/*! elementor - v2.2.5 - 07-10-2018 */
!(function (e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (
                (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && "string" != typeof e)
            )
                for (var o in e)
                    n.d(
                        i,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return i;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 167));
})({
    1: function (e, t, n) {
        "use strict";
        var i;
        (i = n(2).extend({
            elements: null,
            getDefaultElements: function () {
                return {};
            },
            bindEvents: function () {},
            onInit: function () {
                this.initElements(), this.bindEvents();
            },
            initElements: function () {
                this.elements = this.getDefaultElements();
            },
        })),
            (e.exports = i);
    },
    16: function (e, t, n) {
        "use strict";
        var i = n(1);
        e.exports = i.extend({
            getDefaultSettings: function () {
                return {
                    container: null,
                    items: null,
                    columnsCount: 3,
                    verticalSpaceBetween: 30,
                };
            },
            getDefaultElements: function () {
                return {
                    $container: jQuery(this.getSettings("container")),
                    $items: jQuery(this.getSettings("items")),
                };
            },
            run: function () {
                var e = [],
                    t = this.elements.$container.position().top,
                    n = this.getSettings(),
                    i = n.columnsCount;
                (t += parseInt(this.elements.$container.css("margin-top"), 10)),
                    this.elements.$items.each(function (o) {
                        var s = Math.floor(o / i),
                            r = jQuery(this),
                            a =
                                r[0].getBoundingClientRect().height +
                                n.verticalSpaceBetween;
                        if (s) {
                            var l = r.position(),
                                c = o % i,
                                d = l.top - t - e[c];
                            (d -= parseInt(r.css("margin-top"), 10)),
                                (d *= -1),
                                r.css("margin-top", d + "px"),
                                (e[c] += a);
                        } else e.push(a);
                    });
            },
        });
    },
    167: function (e, t, n) {
        "use strict";
        !(function (e) {
            var t = {},
                i = n(20),
                o = n(5),
                s = n(168),
                r = n(180),
                a = n(181),
                l = n(182);
            window.elementorFrontend = new (function () {
                var c,
                    d = this;
                (this.config = elementorFrontendConfig), (this.Module = o);
                var u = function () {
                        t.$body.attr(
                            "data-elementor-device-mode",
                            d.getCurrentDeviceMode()
                        );
                    },
                    h = function (e, t) {
                        var n = d.isEditMode()
                            ? elementor.settings[e].model.attributes
                            : d.config.settings[e];
                        return t ? n[t] : n;
                    };
                (this.init = function () {
                    (d.hooks = new i()),
                        (t.window = window),
                        (t.$window = e(window)),
                        (t.$document = e(document)),
                        (t.$body = e("body")),
                        (t.$elementor = t.$document.find(".elementor")),
                        (t.$wpAdminBar = t.$document.find("#wpadminbar")),
                        (function () {
                            var e =
                                    "Microsoft Internet Explorer" ===
                                        navigator.appName ||
                                    !!navigator.userAgent.match(/Trident/g) ||
                                    !!navigator.userAgent.match(/MSIE/g) ||
                                    !!navigator.userAgent.match(/rv:11/),
                                n =
                                    "string" ==
                                    typeof document.createElement("div").style
                                        .grid;
                            if (e || !n) {
                                t.$body.addClass("elementor-msie");
                                var i =
                                    '<link rel="stylesheet" id="elementor-frontend-css-msie" href="' +
                                    elementorFrontend.config.urls.assets +
                                    "css/frontend-msie.min.css?" +
                                    elementorFrontend.config.version +
                                    '" type="text/css" />';
                                t.$body.append(i);
                            }
                        })(),
                        t.$window.on("resize", u),
                        u(),
                        t.$window.trigger("elementor/frontend/init"),
                        d.isEditMode() ||
                            ((d.hotKeys = n(17)),
                            d.hotKeys.bindListener(t.$window)),
                        (d.utils = {
                            youtube: new r(),
                            anchors: new a(),
                            lightbox: new l(),
                        }),
                        (d.modules = {
                            StretchElement: n(183),
                            Masonry: n(16),
                        }),
                        (d.elementsHandler = new s(e));
                }),
                    (this.getElements = function (e) {
                        return e ? t[e] : t;
                    }),
                    (this.getDialogsManager = function () {
                        return c || (c = new DialogsManager.Instance()), c;
                    }),
                    (this.getPageSettings = function (e) {
                        return h("page", e);
                    }),
                    (this.getGeneralSettings = function (e) {
                        return h("general", e);
                    }),
                    (this.isEditMode = function () {
                        return d.config.isEditMode;
                    }),
                    (this.throttle = function (e, t) {
                        var n,
                            i,
                            o,
                            s,
                            r = 0,
                            a = function () {
                                (r = Date.now()),
                                    (n = null),
                                    (s = e.apply(i, o)),
                                    n || (i = o = null);
                            };
                        return function () {
                            var l = Date.now(),
                                c = t - (l - r);
                            return (
                                (i = this),
                                (o = arguments),
                                c <= 0 || c > t
                                    ? (n && (clearTimeout(n), (n = null)),
                                      (r = l),
                                      (s = e.apply(i, o)),
                                      n || (i = o = null))
                                    : n || (n = setTimeout(a, c)),
                                s
                            );
                        };
                    }),
                    (this.addListenerOnce = function (e, t, n, i) {
                        if (
                            (i || (i = d.getElements("$window")),
                            d.isEditMode())
                        )
                            if (
                                (this.removeListeners(e, t, i),
                                i instanceof jQuery)
                            ) {
                                var o = t + "." + e;
                                i.on(o, n);
                            } else i.on(t, n, e);
                        else i.on(t, n);
                    }),
                    (this.removeListeners = function (e, t, n, i) {
                        if (
                            (i || (i = d.getElements("$window")),
                            i instanceof jQuery)
                        ) {
                            var o = t + "." + e;
                            i.off(o, n);
                        } else i.off(t, n, e);
                    }),
                    (this.getCurrentDeviceMode = function () {
                        return getComputedStyle(
                            t.$elementor[0],
                            ":after"
                        ).content.replace(/"/g, "");
                    }),
                    (this.waypoint = function (t, n, i) {
                        return (
                            (i = e.extend(
                                { offset: "100%", triggerOnce: !0 },
                                i
                            )),
                            t.elementorWaypoint(function () {
                                var e = this.element || this,
                                    t = n.apply(e, arguments);
                                return (
                                    i.triggerOnce &&
                                        this.destroy &&
                                        this.destroy(),
                                    t
                                );
                            }, i)
                        );
                    });
            })();
        })(jQuery),
            elementorFrontend.isEditMode() || jQuery(elementorFrontend.init);
    },
    168: function (e, t, n) {
        "use strict";
        var i;
        (i = function (e) {
            var t = this,
                i = {
                    section: n(169),
                    "accordion.default": n(170),
                    "alert.default": n(171),
                    "counter.default": n(172),
                    "progress.default": n(173),
                    "tabs.default": n(174),
                    "toggle.default": n(175),
                    "video.default": n(176),
                    "image-carousel.default": n(177),
                    "text-editor.default": n(178),
                };
            (this.initHandlers = function () {
                elementorFrontend.hooks.addAction(
                    "frontend/element_ready/global",
                    n(179)
                ),
                    e.each(i, function (e, t) {
                        elementorFrontend.hooks.addAction(
                            "frontend/element_ready/" + e,
                            t
                        );
                    }),
                    (elementorFrontend.isEditMode()
                        ? jQuery(
                              ".elementor-element",
                              ".elementor:not(.elementor-edit-mode)"
                          )
                        : e(".elementor-element")
                    ).each(function () {
                        t.runReadyTrigger(e(this));
                    });
            }),
                (this.getHandlers = function (e) {
                    return e ? i[e] : i;
                }),
                (this.runReadyTrigger = function (t) {
                    var n = t.attr("data-element_type");
                    n &&
                        ((t = jQuery(t)),
                        elementorFrontend.hooks.doAction(
                            "frontend/element_ready/global",
                            t,
                            e
                        ),
                        -1 === ["section", "column"].indexOf(n) &&
                            elementorFrontend.hooks.doAction(
                                "frontend/element_ready/widget",
                                t,
                                e
                            ),
                        elementorFrontend.hooks.doAction(
                            "frontend/element_ready/" + n,
                            t,
                            e
                        ));
                }),
                elementorFrontend.isEditMode() || t.initHandlers();
        }),
            (e.exports = i);
    },
    169: function (e, t, n) {
        "use strict";
        var i = n(5),
            o = i.extend({
                player: null,
                isYTVideo: null,
                getDefaultSettings: function () {
                    return {
                        selectors: {
                            backgroundVideoContainer:
                                ".elementor-background-video-container",
                            backgroundVideoEmbed:
                                ".elementor-background-video-embed",
                            backgroundVideoHosted:
                                ".elementor-background-video-hosted",
                        },
                    };
                },
                getDefaultElements: function () {
                    var e = this.getSettings("selectors"),
                        t = {
                            $backgroundVideoContainer: this.$element.find(
                                e.backgroundVideoContainer
                            ),
                        };
                    return (
                        (t.$backgroundVideoEmbed =
                            t.$backgroundVideoContainer.children(
                                e.backgroundVideoEmbed
                            )),
                        (t.$backgroundVideoHosted =
                            t.$backgroundVideoContainer.children(
                                e.backgroundVideoHosted
                            )),
                        t
                    );
                },
                calcVideosSize: function () {
                    var e =
                            this.elements.$backgroundVideoContainer.outerWidth(),
                        t =
                            this.elements.$backgroundVideoContainer.outerHeight(),
                        n = "16:9".split(":"),
                        i = n[0] / n[1],
                        o = e / t > i;
                    return { width: o ? e : t * i, height: o ? e / i : t };
                },
                changeVideoSize: function () {
                    var e = this.isYTVideo
                            ? jQuery(this.player.getIframe())
                            : this.elements.$backgroundVideoHosted,
                        t = this.calcVideosSize();
                    e.width(t.width).height(t.height);
                },
                startVideoLoop: function () {
                    var e = this;
                    if (e.player.getIframe().contentWindow) {
                        var t = e.getElementSettings(),
                            n = t.background_video_start || 0,
                            i = t.background_video_end;
                        if ((e.player.seekTo(n), i))
                            setTimeout(function () {
                                e.startVideoLoop();
                            }, 1e3 * (i - n + 1));
                    }
                },
                prepareYTVideo: function (e, t) {
                    var n = this,
                        i = n.elements.$backgroundVideoContainer,
                        o = n.getElementSettings(),
                        s = e.PlayerState.PLAYING;
                    window.chrome && (s = e.PlayerState.UNSTARTED),
                        i.addClass("elementor-loading elementor-invisible"),
                        (n.player = new e.Player(
                            n.elements.$backgroundVideoEmbed[0],
                            {
                                videoId: t,
                                events: {
                                    onReady: function () {
                                        n.player.mute(),
                                            n.changeVideoSize(),
                                            n.startVideoLoop(),
                                            n.player.playVideo();
                                    },
                                    onStateChange: function (t) {
                                        switch (t.data) {
                                            case s:
                                                i.removeClass(
                                                    "elementor-invisible elementor-loading"
                                                );
                                                break;
                                            case e.PlayerState.ENDED:
                                                n.player.seekTo(
                                                    o.background_video_start ||
                                                        0
                                                );
                                        }
                                    },
                                },
                                playerVars: {
                                    controls: 0,
                                    showinfo: 0,
                                    rel: 0,
                                },
                            }
                        )),
                        elementorFrontend
                            .getElements("$window")
                            .on("resize", n.changeVideoSize);
                },
                activate: function () {
                    var e = this,
                        t = e.getElementSettings("background_video_link"),
                        n =
                            elementorFrontend.utils.youtube.getYoutubeIDFromURL(
                                t
                            );
                    (e.isYTVideo = !!n),
                        n
                            ? elementorFrontend.utils.youtube.onYoutubeApiReady(
                                  function (t) {
                                      setTimeout(function () {
                                          e.prepareYTVideo(t, n);
                                      }, 1);
                                  }
                              )
                            : e.elements.$backgroundVideoHosted
                                  .attr("src", t)
                                  .one("canplay", e.changeVideoSize);
                },
                deactivate: function () {
                    this.isYTVideo && this.player.getIframe()
                        ? this.player.destroy()
                        : this.elements.$backgroundVideoHosted.removeAttr(
                              "src"
                          );
                },
                run: function () {
                    var e = this.getElementSettings();
                    "video" === e.background_background &&
                    e.background_video_link
                        ? this.activate()
                        : this.deactivate();
                },
                onInit: function () {
                    i.prototype.onInit.apply(this, arguments), this.run();
                },
                onElementChange: function (e) {
                    "background_background" === e && this.run();
                },
            }),
            s = i.extend({
                stretchElement: null,
                bindEvents: function () {
                    var e = this.getUniqueHandlerID();
                    elementorFrontend.addListenerOnce(
                        e,
                        "resize",
                        this.stretch
                    ),
                        elementorFrontend.addListenerOnce(
                            e,
                            "sticky:stick",
                            this.stretch,
                            this.$element
                        ),
                        elementorFrontend.addListenerOnce(
                            e,
                            "sticky:unstick",
                            this.stretch,
                            this.$element
                        );
                },
                unbindEvents: function () {
                    elementorFrontend.removeListeners(
                        this.getUniqueHandlerID(),
                        "resize",
                        this.stretch
                    );
                },
                initStretch: function () {
                    this.stretchElement =
                        new elementorFrontend.modules.StretchElement({
                            element: this.$element,
                            selectors: {
                                container: this.getStretchContainer(),
                            },
                        });
                },
                getStretchContainer: function () {
                    return (
                        elementorFrontend.getGeneralSettings(
                            "elementor_stretched_section_container"
                        ) || window
                    );
                },
                stretch: function () {
                    this.getElementSettings("stretch_section") &&
                        this.stretchElement.stretch();
                },
                onInit: function () {
                    i.prototype.onInit.apply(this, arguments),
                        this.initStretch(),
                        this.stretch();
                },
                onElementChange: function (e) {
                    "stretch_section" === e &&
                        (this.getElementSettings("stretch_section")
                            ? this.stretch()
                            : this.stretchElement.reset());
                },
                onGeneralSettingsChange: function (e) {
                    "elementor_stretched_section_container" in e &&
                        (this.stretchElement.setSettings(
                            "selectors.container",
                            this.getStretchContainer()
                        ),
                        this.stretch());
                },
            }),
            r = i.extend({
                getDefaultSettings: function () {
                    return {
                        selectors: { container: "> .elementor-shape-%s" },
                        svgURL:
                            elementorFrontend.config.urls.assets + "shapes/",
                    };
                },
                getDefaultElements: function () {
                    var e = {},
                        t = this.getSettings("selectors");
                    return (
                        (e.$topContainer = this.$element.find(
                            t.container.replace("%s", "top")
                        )),
                        (e.$bottomContainer = this.$element.find(
                            t.container.replace("%s", "bottom")
                        )),
                        e
                    );
                },
                buildSVG: function (e) {
                    var t = "shape_divider_" + e,
                        n = this.getElementSettings(t),
                        i = this.elements["$" + e + "Container"];
                    if ((i.empty().attr("data-shape", n), n)) {
                        var o = n;
                        this.getElementSettings(t + "_negative") &&
                            (o += "-negative");
                        var s = this.getSettings("svgURL") + o + ".svg";
                        jQuery.get(s, function (e) {
                            i.append(e.childNodes[0]);
                        }),
                            this.setNegative(e);
                    }
                },
                setNegative: function (e) {
                    this.elements["$" + e + "Container"].attr(
                        "data-negative",
                        !!this.getElementSettings(
                            "shape_divider_" + e + "_negative"
                        )
                    );
                },
                onInit: function () {
                    var e = this;
                    i.prototype.onInit.apply(e, arguments),
                        ["top", "bottom"].forEach(function (t) {
                            e.getElementSettings("shape_divider_" + t) &&
                                e.buildSVG(t);
                        });
                },
                onElementChange: function (e) {
                    var t = e.match(/^shape_divider_(top|bottom)$/);
                    if (t) this.buildSVG(t[1]);
                    else {
                        var n = e.match(
                            /^shape_divider_(top|bottom)_negative$/
                        );
                        n && (this.buildSVG(n[1]), this.setNegative(n[1]));
                    }
                },
            }),
            a = i.extend({
                isFirst: function () {
                    return this.$element.is(
                        ".elementor-edit-mode .elementor-top-section:first"
                    );
                },
                getOffset: function () {
                    return this.$element.offset().top;
                },
                setHandlesPosition: function () {
                    if (this.isFirst()) {
                        var e = this.getOffset(),
                            t = this.$element.find(
                                "> .elementor-element-overlay > .elementor-editor-section-settings"
                            );
                        e < 25
                            ? (this.$element.addClass(
                                  "elementor-section--handles-inside"
                              ),
                              e < -5 ? t.css("top", -e) : t.css("top", ""))
                            : this.$element.removeClass(
                                  "elementor-section--handles-inside"
                              );
                    }
                },
                onInit: function () {
                    this.setHandlesPosition(),
                        this.$element.on("mouseenter", this.setHandlesPosition);
                },
            });
        e.exports = function (e) {
            (elementorFrontend.isEditMode() ||
                e.hasClass("elementor-section-stretched")) &&
                new s({ $element: e }),
                elementorFrontend.isEditMode() &&
                    (new r({ $element: e }), new a({ $element: e })),
                new o({ $element: e });
        };
    },
    17: function (e, t, n) {
        "use strict";
        e.exports = new (function () {
            var e = {},
                t = function (t) {
                    var n = e[t.which];
                    n &&
                        jQuery.each(n, function () {
                            (this.isWorthHandling &&
                                !this.isWorthHandling(t)) ||
                                (!this.allowAltKey && t.altKey) ||
                                (t.preventDefault(), this.handle(t));
                        });
                };
            (this.isControlEvent = function (e) {
                return e[elementor.envData.mac ? "metaKey" : "ctrlKey"];
            }),
                (this.addHotKeyHandler = function (t, n, i) {
                    e[t] || (e[t] = {}), (e[t][n] = i);
                }),
                (this.bindListener = function (e) {
                    e.on("keydown", t);
                });
        })();
    },
    170: function (e, t, n) {
        "use strict";
        var i = n(22);
        e.exports = function (e) {
            new i({
                $element: e,
                showTabFn: "slideDown",
                hideTabFn: "slideUp",
            });
        };
    },
    171: function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            e.find(".elementor-alert-dismiss").on("click", function () {
                t(this).parent().fadeOut();
            });
        };
    },
    172: function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            elementorFrontend.waypoint(
                e.find(".elementor-counter-number"),
                function () {
                    var e = t(this),
                        n = e.data(),
                        i = n.toValue.toString().match(/\.(.*)/);
                    i && (n.rounding = i[1].length), e.numerator(n);
                }
            );
        };
    },
    173: function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            elementorFrontend.waypoint(
                e.find(".elementor-progress-bar"),
                function () {
                    var e = t(this);
                    e.css("width", e.data("max") + "%");
                }
            );
        };
    },
    174: function (e, t, n) {
        "use strict";
        var i = n(22);
        e.exports = function (e) {
            new i({ $element: e, toggleSelf: !1 });
        };
    },
    175: function (e, t, n) {
        "use strict";
        var i = n(22);
        e.exports = function (e) {
            new i({
                $element: e,
                showTabFn: "slideDown",
                hideTabFn: "slideUp",
                hidePrevious: !1,
                autoExpand: "editor",
            });
        };
    },
    176: function (e, t, n) {
        "use strict";
        var i,
            o = n(5);
        (i = o.extend({
            getDefaultSettings: function () {
                return {
                    selectors: {
                        imageOverlay: ".elementor-custom-embed-image-overlay",
                        video: ".elementor-video",
                        videoIframe: ".elementor-video-iframe",
                    },
                };
            },
            getDefaultElements: function () {
                var e = this.getSettings("selectors");
                return {
                    $imageOverlay: this.$element.find(e.imageOverlay),
                    $video: this.$element.find(e.video),
                    $videoIframe: this.$element.find(e.videoIframe),
                };
            },
            getLightBox: function () {
                return elementorFrontend.utils.lightbox;
            },
            handleVideo: function () {
                this.getElementSettings("lightbox") ||
                    (this.elements.$imageOverlay.remove(), this.playVideo());
            },
            playVideo: function () {
                if (this.elements.$video.length) this.elements.$video[0].play();
                else {
                    var e = this.elements.$videoIframe,
                        t = e.data("lazy-load");
                    t && e.attr("src", t);
                    var n = e[0].src.replace("&autoplay=0", "");
                    e[0].src = n + "&autoplay=1";
                }
            },
            animateVideo: function () {
                this.getLightBox().setEntranceAnimation(
                    this.getElementSettings("lightbox_content_animation")
                );
            },
            handleAspectRatio: function () {
                this.getLightBox().setVideoAspectRatio(
                    this.getElementSettings("aspect_ratio")
                );
            },
            bindEvents: function () {
                this.elements.$imageOverlay.on("click", this.handleVideo);
            },
            onElementChange: function (e) {
                if ("lightbox_content_animation" !== e) {
                    var t = this.getElementSettings("lightbox");
                    "lightbox" !== e || t
                        ? "aspect_ratio" === e && t && this.handleAspectRatio()
                        : this.getLightBox().getModal().hide();
                } else this.animateVideo();
            },
        })),
            (e.exports = function (e) {
                new i({ $element: e });
            });
    },
    177: function (e, t, n) {
        "use strict";
        var i,
            o = n(5);
        (i = o.extend({
            getDefaultSettings: function () {
                return { selectors: { carousel: ".elementor-image-carousel" } };
            },
            getDefaultElements: function () {
                var e = this.getSettings("selectors");
                return { $carousel: this.$element.find(e.carousel) };
            },
            onInit: function () {
                o.prototype.onInit.apply(this, arguments);
                var e = this.getElementSettings(),
                    t = +e.slides_to_show || 3,
                    n = 1 === t,
                    i = elementorFrontend.config.breakpoints,
                    s = {
                        slidesToShow: t,
                        autoplay: "yes" === e.autoplay,
                        autoplaySpeed: e.autoplay_speed,
                        infinite: "yes" === e.infinite,
                        pauseOnHover: "yes" === e.pause_on_hover,
                        speed: e.speed,
                        arrows: -1 !== ["arrows", "both"].indexOf(e.navigation),
                        dots: -1 !== ["dots", "both"].indexOf(e.navigation),
                        rtl: "rtl" === e.direction,
                        responsive: [
                            {
                                breakpoint: i.lg,
                                settings: {
                                    slidesToShow:
                                        +e.slides_to_show_tablet || (n ? 1 : 2),
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: i.md,
                                settings: {
                                    slidesToShow: +e.slides_to_show_mobile || 1,
                                    slidesToScroll: 1,
                                },
                            },
                        ],
                    };
                n
                    ? (s.fade = "fade" === e.effect)
                    : (s.slidesToScroll = +e.slides_to_scroll),
                    this.elements.$carousel.slick(s);
            },
        })),
            (e.exports = function (e) {
                new i({ $element: e });
            });
    },
    178: function (e, t, n) {
        "use strict";
        var i,
            o = n(5);
        (i = o.extend({
            dropCapLetter: "",
            getDefaultSettings: function () {
                return {
                    selectors: { paragraph: "p:first" },
                    classes: {
                        dropCap: "elementor-drop-cap",
                        dropCapLetter: "elementor-drop-cap-letter",
                    },
                };
            },
            getDefaultElements: function () {
                var e = this.getSettings("selectors"),
                    t = this.getSettings("classes"),
                    n = jQuery("<span>", { class: t.dropCap }),
                    i = jQuery("<span>", { class: t.dropCapLetter });
                return (
                    n.append(i),
                    {
                        $paragraph: this.$element.find(e.paragraph),
                        $dropCap: n,
                        $dropCapLetter: i,
                    }
                );
            },
            getElementName: function () {
                return "text-editor";
            },
            wrapDropCap: function () {
                if (this.getElementSettings("drop_cap")) {
                    var e = this.elements.$paragraph;
                    if (e.length) {
                        var t = e.html().replace(/&nbsp;/g, " "),
                            n = t.match(/^ *([^ ] ?)/);
                        if (n) {
                            var i = n[1],
                                o = i.trim();
                            if ("<" !== o) {
                                (this.dropCapLetter = i),
                                    this.elements.$dropCapLetter.text(o);
                                var s = t
                                    .slice(i.length)
                                    .replace(/^ */, function (e) {
                                        return new Array(e.length + 1).join(
                                            "&nbsp;"
                                        );
                                    });
                                e.html(s).prepend(this.elements.$dropCap);
                            }
                        }
                    }
                } else
                    this.dropCapLetter &&
                        (this.elements.$dropCap.remove(),
                        this.elements.$paragraph.prepend(this.dropCapLetter),
                        (this.dropCapLetter = ""));
            },
            onInit: function () {
                o.prototype.onInit.apply(this, arguments), this.wrapDropCap();
            },
            onElementChange: function (e) {
                "drop_cap" === e && this.wrapDropCap();
            },
        })),
            (e.exports = function (e) {
                new i({ $element: e });
            });
    },
    179: function (e, t, n) {
        "use strict";
        var i,
            o = n(5);
        (i = o.extend({
            getElementName: function () {
                return "global";
            },
            animate: function () {
                var e = this.$element,
                    t = this.getAnimation(),
                    n = this.getElementSettings(),
                    i = n._animation_delay || n.animation_delay || 0;
                e.removeClass(t),
                    setTimeout(function () {
                        e.removeClass("elementor-invisible").addClass(t);
                    }, i);
            },
            getAnimation: function () {
                var e = this.getElementSettings();
                return e.animation || e._animation;
            },
            onInit: function () {
                o.prototype.onInit.apply(this, arguments);
                var e = this.getAnimation();
                e &&
                    (this.$element.removeClass(e),
                    elementorFrontend.waypoint(
                        this.$element,
                        this.animate.bind(this)
                    ));
            },
            onElementChange: function (e) {
                /^_?animation/.test(e) && this.animate();
            },
        })),
            (e.exports = function (e) {
                new i({ $element: e });
            });
    },
    180: function (e, t, n) {
        "use strict";
        var i = n(1);
        e.exports = i.extend({
            getDefaultSettings: function () {
                return {
                    isInserted: !1,
                    APISrc: "https://www.youtube.com/iframe_api",
                    selectors: { firstScript: "script:first" },
                };
            },
            getDefaultElements: function () {
                return {
                    $firstScript: jQuery(
                        this.getSettings("selectors.firstScript")
                    ),
                };
            },
            insertYTAPI: function () {
                this.setSettings("isInserted", !0),
                    this.elements.$firstScript.before(
                        jQuery("<script>", { src: this.getSettings("APISrc") })
                    );
            },
            onYoutubeApiReady: function (e) {
                var t = this;
                t.getSettings("IsInserted") || t.insertYTAPI(),
                    window.YT && YT.loaded
                        ? e(YT)
                        : setTimeout(function () {
                              t.onYoutubeApiReady(e);
                          }, 350);
            },
            getYoutubeIDFromURL: function (e) {
                var t = e.match(
                    /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
                );
                return t && t[1];
            },
        });
    },
    181: function (e, t, n) {
        "use strict";
        var i = n(1);
        e.exports = i.extend({
            getDefaultSettings: function () {
                return {
                    scrollDuration: 500,
                    selectors: {
                        links: 'a[href*="#"]',
                        targets: ".elementor-element, .elementor-menu-anchor",
                        scrollable: "html, body",
                    },
                };
            },
            getDefaultElements: function () {
                return {
                    $scrollable: jQuery(
                        this.getSettings("selectors").scrollable
                    ),
                };
            },
            bindEvents: function () {
                elementorFrontend
                    .getElements("$document")
                    .on(
                        "click",
                        this.getSettings("selectors.links"),
                        this.handleAnchorLinks
                    );
            },
            handleAnchorLinks: function (e) {
                var t = e.currentTarget,
                    n = location.pathname === t.pathname;
                if (
                    location.hostname === t.hostname &&
                    n &&
                    !(t.hash.length < 2)
                ) {
                    var i = jQuery(t.hash).filter(
                        this.getSettings("selectors.targets")
                    );
                    if (i.length) {
                        var o = i.offset().top,
                            s = elementorFrontend.getElements("$wpAdminBar"),
                            r = jQuery(".elementor-sticky--active");
                        s.length > 0 && (o -= s.height()),
                            r.length > 0 &&
                                (o -= Math.max.apply(
                                    null,
                                    r
                                        .map(function () {
                                            return jQuery(this).outerHeight();
                                        })
                                        .get()
                                )),
                            e.preventDefault(),
                            (o = elementorFrontend.hooks.applyFilters(
                                "frontend/handlers/menu_anchor/scroll_top_distance",
                                o
                            )),
                            this.elements.$scrollable.animate(
                                { scrollTop: o },
                                this.getSettings("scrollDuration"),
                                "linear"
                            );
                    }
                }
            },
            onInit: function () {
                i.prototype.onInit.apply(this, arguments), this.bindEvents();
            },
        });
    },
    182: function (e, t, n) {
        "use strict";
        var i,
            o = n(1);
        (i = o.extend({
            oldAspectRatio: null,
            oldAnimation: null,
            swiper: null,
            getDefaultSettings: function () {
                return {
                    classes: {
                        aspectRatio: "elementor-aspect-ratio-%s",
                        item: "elementor-lightbox-item",
                        image: "elementor-lightbox-image",
                        videoContainer: "elementor-video-container",
                        videoWrapper: "elementor-fit-aspect-ratio",
                        playButton: "elementor-custom-embed-play",
                        playButtonIcon: "fa",
                        playing: "elementor-playing",
                        hidden: "elementor-hidden",
                        invisible: "elementor-invisible",
                        preventClose: "elementor-lightbox-prevent-close",
                        slideshow: {
                            container: "swiper-container",
                            slidesWrapper: "swiper-wrapper",
                            prevButton:
                                "elementor-swiper-button elementor-swiper-button-prev",
                            nextButton:
                                "elementor-swiper-button elementor-swiper-button-next",
                            prevButtonIcon: "eicon-chevron-left",
                            nextButtonIcon: "eicon-chevron-right",
                            slide: "swiper-slide",
                        },
                    },
                    selectors: {
                        links: "a, [data-elementor-lightbox]",
                        slideshow: {
                            activeSlide: ".swiper-slide-active",
                            prevSlide: ".swiper-slide-prev",
                            nextSlide: ".swiper-slide-next",
                        },
                    },
                    modalOptions: {
                        id: "elementor-lightbox",
                        entranceAnimation: "zoomIn",
                        videoAspectRatio: 169,
                        position: { enable: !1 },
                    },
                };
            },
            getModal: function () {
                return i.modal || this.initModal(), i.modal;
            },
            initModal: function () {
                var e = (i.modal = elementorFrontend
                    .getDialogsManager()
                    .createWidget("lightbox", {
                        className: "elementor-lightbox",
                        closeButton: !0,
                        closeButtonClass: "eicon-close",
                        selectors: {
                            preventClose:
                                "." + this.getSettings("classes.preventClose"),
                        },
                        hide: { onClick: !0 },
                    }));
                e.on("hide", function () {
                    e.setMessage("");
                });
            },
            showModal: function (e) {
                var t = this,
                    n = t.getDefaultSettings().modalOptions;
                t.setSettings("modalOptions", jQuery.extend(n, e.modalOptions));
                var i = t.getModal();
                switch (
                    (i.setID(t.getSettings("modalOptions.id")),
                    (i.onShow = function () {
                        DialogsManager.getWidgetType(
                            "lightbox"
                        ).prototype.onShow.apply(i, arguments),
                            setTimeout(function () {
                                t.setEntranceAnimation();
                            }, 10);
                    }),
                    (i.onHide = function () {
                        DialogsManager.getWidgetType(
                            "lightbox"
                        ).prototype.onHide.apply(i, arguments),
                            i
                                .getElements("widgetContent")
                                .removeClass("animated");
                    }),
                    e.type)
                ) {
                    case "image":
                        t.setImageContent(e.url);
                        break;
                    case "video":
                        t.setVideoContent(e);
                        break;
                    case "slideshow":
                        t.setSlideshowContent(e.slideshow);
                        break;
                    default:
                        t.setHTMLContent(e.html);
                }
                i.show();
            },
            setHTMLContent: function (e) {
                this.getModal().setMessage(e);
            },
            setImageContent: function (e) {
                var t = this.getSettings("classes"),
                    n = jQuery("<div>", { class: t.item }),
                    i = jQuery("<img>", {
                        src: e,
                        class: t.image + " " + t.preventClose,
                    });
                n.append(i), this.getModal().setMessage(n);
            },
            setVideoContent: function (e) {
                var t,
                    n = this.getSettings("classes"),
                    i = jQuery("<div>", { class: n.videoContainer }),
                    o = jQuery("<div>", { class: n.videoWrapper }),
                    s = this.getModal();
                if ("hosted" === e.videoType) {
                    var r = { src: e.url, autoplay: "" };
                    e.videoParams.forEach(function (e) {
                        r[e] = "";
                    }),
                        (t = jQuery("<video>", r));
                } else {
                    var a = e.url.replace("&autoplay=0", "") + "&autoplay=1";
                    t = jQuery("<iframe>", { src: a, allowfullscreen: 1 });
                }
                i.append(o),
                    o.append(t),
                    s.setMessage(i),
                    this.setVideoAspectRatio();
                var l = s.onHide;
                s.onHide = function () {
                    l(),
                        s
                            .getElements("message")
                            .removeClass("elementor-fit-aspect-ratio");
                };
            },
            setSlideshowContent: function (e) {
                var t = jQuery,
                    n = this,
                    i = n.getSettings("classes"),
                    o = i.slideshow,
                    s = t("<div>", { class: o.container }),
                    r = t("<div>", { class: o.slidesWrapper }),
                    a = t("<div>", {
                        class: o.prevButton + " " + i.preventClose,
                    }).html(t("<i>", { class: o.prevButtonIcon })),
                    l = t("<div>", {
                        class: o.nextButton + " " + i.preventClose,
                    }).html(t("<i>", { class: o.nextButtonIcon }));
                e.slides.forEach(function (e) {
                    var n = o.slide + " " + i.item;
                    e.video && (n += " " + i.video);
                    var s = t("<div>", { class: n });
                    if (e.video) {
                        s.attr("data-elementor-slideshow-video", e.video);
                        var a = t("<div>", { class: i.playButton }).html(
                            t("<i>", { class: i.playButtonIcon })
                        );
                        s.append(a);
                    } else {
                        var l = t("<div>", { class: "swiper-zoom-container" }),
                            c = t("<img>", {
                                class: i.image + " " + i.preventClose,
                                src: e.image,
                            });
                        l.append(c), s.append(l);
                    }
                    r.append(s);
                }),
                    s.append(r, a, l);
                var c = n.getModal();
                c.setMessage(s);
                var d = c.onShow;
                c.onShow = function () {
                    d();
                    var i = {
                        navigation: { prevEl: a, nextEl: l },
                        pagination: { clickable: !0 },
                        on: { slideChangeTransitionEnd: n.onSlideChange },
                        grabCursor: !0,
                        runCallbacksOnInit: !1,
                        loop: !0,
                        keyboard: !0,
                    };
                    e.swiper && t.extend(i, e.swiper),
                        (n.swiper = new Swiper(s, i)),
                        n.setVideoAspectRatio(),
                        n.playSlideVideo();
                };
            },
            setVideoAspectRatio: function (e) {
                e = e || this.getSettings("modalOptions.videoAspectRatio");
                var t = this.getModal().getElements("widgetContent"),
                    n = this.oldAspectRatio,
                    i = this.getSettings("classes.aspectRatio");
                (this.oldAspectRatio = e),
                    n && t.removeClass(i.replace("%s", n)),
                    e && t.addClass(i.replace("%s", e));
            },
            getSlide: function (e) {
                return jQuery(this.swiper.slides).filter(
                    this.getSettings("selectors.slideshow." + e + "Slide")
                );
            },
            playSlideVideo: function () {
                var e = this.getSlide("active"),
                    t = e.data("elementor-slideshow-video");
                if (t) {
                    var n = this.getSettings("classes"),
                        i = jQuery("<div>", {
                            class: n.videoContainer + " " + n.invisible,
                        }),
                        o = jQuery("<div>", { class: n.videoWrapper }),
                        s = jQuery("<iframe>", { src: t }),
                        r = e.children("." + n.playButton);
                    i.append(o),
                        o.append(s),
                        e.append(i),
                        r.addClass(n.playing).removeClass(n.hidden),
                        s.on("load", function () {
                            r.addClass(n.hidden), i.removeClass(n.invisible);
                        });
                }
            },
            setEntranceAnimation: function (e) {
                e = e || this.getSettings("modalOptions.entranceAnimation");
                var t = this.getModal().getElements("message");
                this.oldAnimation && t.removeClass(this.oldAnimation),
                    (this.oldAnimation = e),
                    e && t.addClass("animated " + e);
            },
            isLightboxLink: function (e) {
                if (
                    "A" === e.tagName &&
                    !/\.(png|jpe?g|gif|svg)$/i.test(e.href)
                )
                    return !1;
                var t = elementorFrontend.getGeneralSettings(
                        "elementor_global_image_lightbox"
                    ),
                    n = e.dataset.elementorOpenLightbox;
                return "yes" === n || (t && "no" !== n);
            },
            openLink: function (e) {
                var t = e.currentTarget,
                    n = jQuery(e.target),
                    i = elementorFrontend.isEditMode(),
                    o = !!n.closest("#elementor").length;
                if (this.isLightboxLink(t)) {
                    if (
                        (e.preventDefault(),
                        !i ||
                            elementorFrontend.getGeneralSettings(
                                "elementor_enable_lightbox_in_editor"
                            ))
                    ) {
                        var s = {};
                        if (
                            (t.dataset.elementorLightbox &&
                                (s = JSON.parse(t.dataset.elementorLightbox)),
                            s.type && "slideshow" !== s.type)
                        )
                            this.showModal(s);
                        else if (t.dataset.elementorLightboxSlideshow) {
                            var r = t.dataset.elementorLightboxSlideshow,
                                a = jQuery(
                                    this.getSettings("selectors.links")
                                ).filter(function () {
                                    return (
                                        r ===
                                        this.dataset.elementorLightboxSlideshow
                                    );
                                }),
                                l = [],
                                c = {};
                            a.each(function () {
                                var e = this.dataset.elementorLightboxVideo,
                                    t = e || this.href;
                                if (!c[t]) {
                                    c[t] = !0;
                                    var n = this.dataset.elementorLightboxIndex;
                                    void 0 === n && (n = a.index(this));
                                    var i = { image: this.href, index: n };
                                    e && (i.video = e), l.push(i);
                                }
                            }),
                                l.sort(function (e, t) {
                                    return e.index - t.index;
                                });
                            var d = t.dataset.elementorLightboxIndex;
                            void 0 === d && (d = a.index(t)),
                                this.showModal({
                                    type: "slideshow",
                                    modalOptions: {
                                        id: "elementor-lightbox-slideshow-" + r,
                                    },
                                    slideshow: {
                                        slides: l,
                                        swiper: { initialSlide: +d },
                                    },
                                });
                        } else this.showModal({ type: "image", url: t.href });
                    }
                } else i && o && e.preventDefault();
            },
            bindEvents: function () {
                elementorFrontend
                    .getElements("$document")
                    .on(
                        "click",
                        this.getSettings("selectors.links"),
                        this.openLink
                    );
            },
            onInit: function () {
                o.prototype.onInit.apply(this, arguments),
                    elementorFrontend.isEditMode() &&
                        elementor.settings.general.model.on(
                            "change",
                            this.onGeneralSettingsChange
                        );
            },
            onGeneralSettingsChange: function (e) {
                "elementor_lightbox_content_animation" in e.changed &&
                    (this.setSettings(
                        "modalOptions.entranceAnimation",
                        e.changed.elementor_lightbox_content_animation
                    ),
                    this.setEntranceAnimation());
            },
            onSlideChange: function () {
                this.getSlide("prev")
                    .add(this.getSlide("next"))
                    .add(this.getSlide("active"))
                    .find("." + this.getSettings("classes.videoWrapper"))
                    .remove(),
                    this.playSlideVideo();
            },
        })),
            (e.exports = i);
    },
    183: function (e, t, n) {
        "use strict";
        var i = n(1);
        e.exports = i.extend({
            getDefaultSettings: function () {
                return {
                    element: null,
                    direction: elementorFrontend.config.is_rtl
                        ? "right"
                        : "left",
                    selectors: { container: window },
                };
            },
            getDefaultElements: function () {
                return { $element: jQuery(this.getSettings("element")) };
            },
            stretch: function () {
                var e,
                    t = this.getSettings("selectors.container");
                try {
                    e = jQuery(t);
                } catch (e) {}
                (e && e.length) ||
                    (e = jQuery(this.getDefaultSettings().selectors.container)),
                    this.reset();
                var n = this.elements.$element,
                    i = e.outerWidth(),
                    o = n.offset().left,
                    s = "fixed" === n.css("position"),
                    r = s ? 0 : o;
                if (window !== e[0]) {
                    var a = e.offset().left;
                    s && (r = a), o > a && (r = o - a);
                }
                s ||
                    (elementorFrontend.config.is_rtl &&
                        (r = i - (n.outerWidth() + r)),
                    (r = -r));
                var l = {};
                (l.width = i + "px"),
                    (l[this.getSettings("direction")] = r + "px"),
                    n.css(l);
            },
            reset: function () {
                var e = { width: "" };
                (e[this.getSettings("direction")] = ""),
                    this.elements.$element.css(e);
            },
        });
    },
    2: function (e, t, n) {
        "use strict";
        var i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      },
            o = function () {
                var e,
                    t = jQuery,
                    n = arguments,
                    o = this,
                    s = {};
                (this.getItems = function (e, t) {
                    if (t) {
                        var n = t.split("."),
                            i = n.splice(0, 1);
                        if (!n.length) return e[i];
                        if (!e[i]) return;
                        return this.getItems(e[i], n.join("."));
                    }
                    return e;
                }),
                    (this.getSettings = function (t) {
                        return this.getItems(e, t);
                    }),
                    (this.setSettings = function (n, s, r) {
                        if (
                            (r || (r = e),
                            "object" === (void 0 === n ? "undefined" : i(n)))
                        )
                            return t.extend(r, n), o;
                        var a = n.split("."),
                            l = a.splice(0, 1);
                        return a.length
                            ? (r[l] || (r[l] = {}),
                              o.setSettings(a.join("."), s, r[l]))
                            : ((r[l] = s), o);
                    }),
                    (this.forceMethodImplementation = function (e) {
                        var t = e.callee.name;
                        throw new ReferenceError(
                            "The method " +
                                t +
                                " must to be implemented in the inheritor child."
                        );
                    }),
                    (this.on = function (e, n) {
                        return "object" === (void 0 === e ? "undefined" : i(e))
                            ? (t.each(e, function (e) {
                                  o.on(e, this);
                              }),
                              o)
                            : (e.split(" ").forEach(function (e) {
                                  s[e] || (s[e] = []), s[e].push(n);
                              }),
                              o);
                    }),
                    (this.off = function (e, t) {
                        if (!s[e]) return o;
                        if (!t) return delete s[e], o;
                        var n = s[e].indexOf(t);
                        return -1 !== n && delete s[e][n], o;
                    }),
                    (this.trigger = function (e) {
                        var n = "on" + e[0].toUpperCase() + e.slice(1),
                            i = Array.prototype.slice.call(arguments, 1);
                        o[n] && o[n].apply(o, i);
                        var r = s[e];
                        return r
                            ? (t.each(r, function (e, t) {
                                  t.apply(o, i);
                              }),
                              o)
                            : o;
                    }),
                    o.__construct.apply(o, n),
                    t.each(o, function (e) {
                        var t = o[e];
                        "function" == typeof t &&
                            (o[e] = function () {
                                return t.apply(o, arguments);
                            });
                    }),
                    (function () {
                        e = o.getDefaultSettings();
                        var i = n[0];
                        i && t.extend(e, i);
                    })(),
                    o.trigger("init");
            };
        (o.prototype.__construct = function () {}),
            (o.prototype.getDefaultSettings = function () {
                return {};
            }),
            (o.extendsCount = 0),
            (o.extend = function (e) {
                var t = jQuery,
                    n = this,
                    i = function () {
                        return n.apply(this, arguments);
                    };
                t.extend(i, n),
                    ((i.prototype = Object.create(
                        t.extend({}, n.prototype, e)
                    )).constructor = i);
                var s = ++o.extendsCount;
                return (
                    (i.prototype.getConstructorID = function () {
                        return s;
                    }),
                    (i.__super__ = n.prototype),
                    i
                );
            }),
            (e.exports = o);
    },
    20: function (e, t, n) {
        "use strict";
        e.exports = function () {
            var e,
                t = Array.prototype.slice,
                n = { actions: {}, filters: {} };
            function i(e, t, i, o) {
                var s, r, a;
                if (n[e][t])
                    if (i)
                        if (((s = n[e][t]), o))
                            for (a = s.length; a--; )
                                (r = s[a]).callback === i &&
                                    r.context === o &&
                                    s.splice(a, 1);
                        else
                            for (a = s.length; a--; )
                                s[a].callback === i && s.splice(a, 1);
                    else n[e][t] = [];
            }
            function o(e, t, i, o, s) {
                var r = { callback: i, priority: o, context: s },
                    a = n[e][t];
                if (a) {
                    var l = !1;
                    if (
                        (jQuery.each(a, function () {
                            if (this.callback === i) return (l = !0), !1;
                        }),
                        l)
                    )
                        return;
                    a.push(r),
                        (a = (function (e) {
                            for (var t, n, i, o = 1, s = e.length; o < s; o++) {
                                for (
                                    t = e[o], n = o;
                                    (i = e[n - 1]) && i.priority > t.priority;

                                )
                                    (e[n] = e[n - 1]), --n;
                                e[n] = t;
                            }
                            return e;
                        })(a));
                } else a = [r];
                n[e][t] = a;
            }
            function s(e, t, i) {
                var o,
                    s,
                    r = n[e][t];
                if (!r) return "filters" === e && i[0];
                if (((s = r.length), "filters" === e))
                    for (o = 0; o < s; o++)
                        i[0] = r[o].callback.apply(r[o].context, i);
                else
                    for (o = 0; o < s; o++)
                        r[o].callback.apply(r[o].context, i);
                return "filters" !== e || i[0];
            }
            return (e = {
                removeFilter: function (t, n) {
                    return "string" == typeof t && i("filters", t, n), e;
                },
                applyFilters: function () {
                    var n = t.call(arguments),
                        i = n.shift();
                    return "string" == typeof i ? s("filters", i, n) : e;
                },
                addFilter: function (t, n, i, s) {
                    return (
                        "string" == typeof t &&
                            "function" == typeof n &&
                            o("filters", t, n, (i = parseInt(i || 10, 10)), s),
                        e
                    );
                },
                removeAction: function (t, n) {
                    return "string" == typeof t && i("actions", t, n), e;
                },
                doAction: function () {
                    var n = t.call(arguments),
                        i = n.shift();
                    return "string" == typeof i && s("actions", i, n), e;
                },
                addAction: function (t, n, i, s) {
                    return (
                        "string" == typeof t &&
                            "function" == typeof n &&
                            o("actions", t, n, (i = parseInt(i || 10, 10)), s),
                        e
                    );
                },
            });
        };
    },
    22: function (e, t, n) {
        "use strict";
        var i = n(5);
        e.exports = i.extend({
            $activeContent: null,
            getDefaultSettings: function () {
                return {
                    selectors: {
                        tabTitle: ".elementor-tab-title",
                        tabContent: ".elementor-tab-content",
                    },
                    classes: { active: "elementor-active" },
                    showTabFn: "show",
                    hideTabFn: "hide",
                    toggleSelf: !0,
                    hidePrevious: !0,
                    autoExpand: !0,
                };
            },
            getDefaultElements: function () {
                var e = this.getSettings("selectors");
                return {
                    $tabTitles: this.findElement(e.tabTitle),
                    $tabContents: this.findElement(e.tabContent),
                };
            },
            activateDefaultTab: function () {
                var e = this.getSettings();
                if (
                    e.autoExpand &&
                    ("editor" !== e.autoExpand || this.isEdit)
                ) {
                    var t = this.getEditSettings("activeItemIndex") || 1,
                        n = { showTabFn: e.showTabFn, hideTabFn: e.hideTabFn };
                    this.setSettings({ showTabFn: "show", hideTabFn: "hide" }),
                        this.changeActiveTab(t),
                        this.setSettings(n);
                }
            },
            deactivateActiveTab: function (e) {
                var t = this.getSettings(),
                    n = t.classes.active,
                    i = e ? '[data-tab="' + e + '"]' : "." + n,
                    o = this.elements.$tabTitles.filter(i),
                    s = this.elements.$tabContents.filter(i);
                o.add(s).removeClass(n), s[t.hideTabFn]();
            },
            activateTab: function (e) {
                var t = this.getSettings(),
                    n = t.classes.active,
                    i = this.elements.$tabTitles.filter(
                        '[data-tab="' + e + '"]'
                    ),
                    o = this.elements.$tabContents.filter(
                        '[data-tab="' + e + '"]'
                    );
                i.add(o).addClass(n), o[t.showTabFn]();
            },
            isActiveTab: function (e) {
                return this.elements.$tabTitles
                    .filter('[data-tab="' + e + '"]')
                    .hasClass(this.getSettings("classes.active"));
            },
            bindEvents: function () {
                var e = this;
                e.elements.$tabTitles.on("focus", function (t) {
                    e.changeActiveTab(t.currentTarget.dataset.tab);
                }),
                    e.getSettings("toggleSelf") &&
                        e.elements.$tabTitles.on("mousedown", function (t) {
                            jQuery(t.currentTarget).is(":focus") &&
                                e.changeActiveTab(t.currentTarget.dataset.tab);
                        });
            },
            onInit: function () {
                i.prototype.onInit.apply(this, arguments),
                    this.activateDefaultTab();
            },
            onEditSettingsChange: function (e) {
                "activeItemIndex" === e && this.activateDefaultTab();
            },
            changeActiveTab: function (e) {
                var t = this.isActiveTab(e),
                    n = this.getSettings();
                (!n.toggleSelf && t) ||
                    !n.hidePrevious ||
                    this.deactivateActiveTab(),
                    !n.hidePrevious && t && this.deactivateActiveTab(e),
                    t || this.activateTab(e);
            },
        });
    },
    5: function (e, t, n) {
        "use strict";
        var i;
        (i = n(1).extend({
            $element: null,
            editorListeners: null,
            onElementChange: null,
            onEditSettingsChange: null,
            onGeneralSettingsChange: null,
            onPageSettingsChange: null,
            isEdit: null,
            __construct: function (e) {
                (this.$element = e.$element),
                    (this.isEdit = this.$element.hasClass(
                        "elementor-element-edit-mode"
                    )),
                    this.isEdit && this.addEditorListeners();
            },
            findElement: function (e) {
                var t = this.$element;
                return t.find(e).filter(function () {
                    return jQuery(this).closest(".elementor-element").is(t);
                });
            },
            getUniqueHandlerID: function (e, t) {
                return (
                    e || (e = this.getModelCID()),
                    t || (t = this.$element),
                    e + t.attr("data-element_type") + this.getConstructorID()
                );
            },
            initEditorListeners: function () {
                var e = this;
                if (
                    ((e.editorListeners = [
                        {
                            event: "element:destroy",
                            to: elementor.channels.data,
                            callback: function (t) {
                                t.cid === e.getModelCID() && e.onDestroy();
                            },
                        },
                    ]),
                    e.onElementChange)
                ) {
                    var t = e.getElementName(),
                        n = "change";
                    "global" !== t && (n += ":" + t),
                        e.editorListeners.push({
                            event: n,
                            to: elementor.channels.editor,
                            callback: function (t, n) {
                                e.getUniqueHandlerID(n.model.cid, n.$el) ===
                                    e.getUniqueHandlerID() &&
                                    e.onElementChange(
                                        t.model.get("name"),
                                        t,
                                        n
                                    );
                            },
                        });
                }
                e.onEditSettingsChange &&
                    e.editorListeners.push({
                        event: "change:editSettings",
                        to: elementor.channels.editor,
                        callback: function (t, n) {
                            n.model.cid === e.getModelCID() &&
                                e.onEditSettingsChange(
                                    Object.keys(t.changed)[0]
                                );
                        },
                    }),
                    ["page", "general"].forEach(function (t) {
                        var n =
                            "on" +
                            elementor.helpers.firstLetterUppercase(t) +
                            "SettingsChange";
                        e[n] &&
                            e.editorListeners.push({
                                event: "change",
                                to: elementor.settings[t].model,
                                callback: function (t) {
                                    e[n](t.changed);
                                },
                            });
                    });
            },
            getEditorListeners: function () {
                return (
                    this.editorListeners || this.initEditorListeners(),
                    this.editorListeners
                );
            },
            addEditorListeners: function () {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach(function (t) {
                    elementorFrontend.addListenerOnce(
                        e,
                        t.event,
                        t.callback,
                        t.to
                    );
                });
            },
            removeEditorListeners: function () {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach(function (t) {
                    elementorFrontend.removeListeners(e, t.event, null, t.to);
                });
            },
            getElementName: function () {
                return this.$element.data("element_type").split(".")[0];
            },
            getID: function () {
                return this.$element.data("id");
            },
            getModelCID: function () {
                return this.$element.data("model-cid");
            },
            getElementSettings: function (e) {
                var t = {},
                    n = this.getModelCID();
                if (this.isEdit && n) {
                    var i = elementorFrontend.config.elements.data[n],
                        o =
                            elementorFrontend.config.elements.keys[
                                i.attributes.widgetType || i.attributes.elType
                            ];
                    jQuery.each(i.getActiveControls(), function (e) {
                        -1 !== o.indexOf(e) && (t[e] = i.attributes[e]);
                    });
                } else t = this.$element.data("settings") || {};
                return this.getItems(t, e);
            },
            getEditSettings: function (e) {
                var t = {};
                return (
                    this.isEdit &&
                        (t =
                            elementorFrontend.config.elements.editSettings[
                                this.getModelCID()
                            ].attributes),
                    this.getItems(t, e)
                );
            },
            onDestroy: function () {
                this.removeEditorListeners(),
                    this.unbindEvents && this.unbindEvents();
            },
        })),
            (e.exports = i);
    },
});
