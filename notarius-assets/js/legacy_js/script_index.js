var jetElements = {
    "messages": { "invalidMail": "Please specify a valid e-mail" },
    "jetParallaxSections": {
        "ee77c8f": [
            {
                "jet_parallax_layout_image": { "url": "" },
                "_id": "e204486",
                "jet_parallax_layout_speed": {
                    "unit": "%",
                    "size": 50,
                },
                "jet_parallax_layout_type": "scroll",
                "jet_parallax_layout_z_index": "",
                "jet_parallax_layout_bg_x": 50,
                "jet_parallax_layout_bg_y": 50,
                "jet_parallax_layout_bg_size": "auto",
                "jet_parallax_layout_animation_prop": "transform",
                "jet_parallax_layout_on": ["desktop", "tablet"],
            },
        ],
        "5532f28": [
            {
                "jet_parallax_layout_image": { "url": "" },
                "_id": "9bcc23e",
                "jet_parallax_layout_speed": {
                    "unit": "%",
                    "size": 50,
                },
                "jet_parallax_layout_type": "scroll",
                "jet_parallax_layout_z_index": "",
                "jet_parallax_layout_bg_x": 50,
                "jet_parallax_layout_bg_y": 50,
                "jet_parallax_layout_bg_size": "auto",
                "jet_parallax_layout_animation_prop": "transform",
                "jet_parallax_layout_on": ["desktop", "tablet"],
            },
        ],
        "k8r25db": [
            {
                "jet_parallax_layout_image": { "url": "" },
                "_id": "8a317dc",
                "jet_parallax_layout_speed": {
                    "unit": "%",
                    "size": 50,
                },
                "jet_parallax_layout_type": "scroll",
                "jet_parallax_layout_z_index": "",
                "jet_parallax_layout_bg_x": 50,
                "jet_parallax_layout_bg_y": 50,
                "jet_parallax_layout_bg_size": "auto",
                "jet_parallax_layout_animation_prop": "transform",
                "jet_parallax_layout_on": ["desktop", "tablet"],
            },
        ],
        "7288771": [
            {
                "jet_parallax_layout_image": { "url": "" },
                "_id": "bc5c6ed",
                "jet_parallax_layout_speed": {
                    "unit": "%",
                    "size": 50,
                },
                "jet_parallax_layout_type": "scroll",
                "jet_parallax_layout_z_index": "",
                "jet_parallax_layout_bg_x": 50,
                "jet_parallax_layout_bg_y": 50,
                "jet_parallax_layout_bg_size": "auto",
                "jet_parallax_layout_animation_prop": "transform",
                "jet_parallax_layout_on": ["desktop", "tablet"],
            },
        ],
        "c0d806f": [
            {
                "jet_parallax_layout_image": { "url": "" },
                "_id": "b451435",
                "jet_parallax_layout_speed": {
                    "unit": "%",
                    "size": 50,
                },
                "jet_parallax_layout_type": "scroll",
                "jet_parallax_layout_z_index": "",
                "jet_parallax_layout_bg_x": 50,
                "jet_parallax_layout_bg_y": 50,
                "jet_parallax_layout_bg_size": "auto",
                "jet_parallax_layout_animation_prop": "transform",
                "jet_parallax_layout_on": ["desktop", "tablet"],
            },
        ],
        "310f367": [
            {
                "jet_parallax_layout_image": { "url": "" },
                "_id": "78c5a30",
                "jet_parallax_layout_speed": {
                    "unit": "%",
                    "size": 50,
                },
                "jet_parallax_layout_type": "scroll",
                "jet_parallax_layout_z_index": "",
                "jet_parallax_layout_bg_x": 50,
                "jet_parallax_layout_bg_y": 50,
                "jet_parallax_layout_bg_size": "auto",
                "jet_parallax_layout_animation_prop": "transform",
                "jet_parallax_layout_on": ["desktop", "tablet"],
            },
        ],
        "adaf209": [
            {
                "jet_parallax_layout_image": { "url": "" },
                "_id": "9049b15",
                "jet_parallax_layout_speed": {
                    "unit": "%",
                    "size": 50,
                },
                "jet_parallax_layout_type": "scroll",
                "jet_parallax_layout_z_index": "",
                "jet_parallax_layout_bg_x": 50,
                "jet_parallax_layout_bg_y": 50,
                "jet_parallax_layout_bg_size": "auto",
                "jet_parallax_layout_animation_prop": "transform",
                "jet_parallax_layout_on": ["desktop", "tablet"],
            },
        ],
    },
};

////////////////////////////////
window.lazyLoadOptions = {
    elements_selector: "img[data-lazy-src],.rocket-lazyload",
    data_src: "lazy-src",
    data_srcset: "lazy-srcset",
    data_sizes: "lazy-sizes",
    class_loading: "lazyloading",
    class_loaded: "lazyloaded",
    threshold: 300,
    callback_loaded: function (element) {
        if (
            element.tagName === "IFRAME" &&
            element.dataset.rocketLazyload == "fitvidscompatible"
        ) {
            if (element.classList.contains("lazyloaded")) {
                if (typeof window.jQuery != "undefined") {
                    if (jQuery.fn.fitVids) {
                        jQuery(element).parent().fitVids();
                    }
                }
            }
        }
    },
};
window.addEventListener(
    "LazyLoad::Initialized",
    function (e) {
        var lazyLoadInstance = e.detail.instance;
        if (window.MutationObserver) {
            var observer = new MutationObserver(function (mutations) {
                var image_count = 0;
                var iframe_count = 0;
                var rocketlazy_count = 0;
                mutations.forEach(function (mutation) {
                    for (i = 0; i < mutation.addedNodes.length; i++) {
                        if (
                            typeof mutation.addedNodes[i]
                                .getElementsByTagName !== "function"
                        ) {
                            return;
                        }
                        if (
                            typeof mutation.addedNodes[i]
                                .getElementsByClassName !== "function"
                        ) {
                            return;
                        }
                        images =
                            mutation.addedNodes[i].getElementsByTagName("img");
                        is_image = mutation.addedNodes[i].tagName == "IMG";
                        iframes =
                            mutation.addedNodes[i].getElementsByTagName(
                                "iframe"
                            );
                        is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                        rocket_lazy =
                            mutation.addedNodes[i].getElementsByClassName(
                                "rocket-lazyload"
                            );
                        image_count += images.length;
                        iframe_count += iframes.length;
                        rocketlazy_count += rocket_lazy.length;
                        if (is_image) {
                            image_count += 1;
                        }
                        if (is_iframe) {
                            iframe_count += 1;
                        }
                    }
                });
                if (
                    image_count > 0 ||
                    iframe_count > 0 ||
                    rocketlazy_count > 0
                ) {
                    lazyLoadInstance.update();
                }
            });
            var b = document.getElementsByTagName("body")[0];
            var config = { childList: !0, subtree: !0 };
            observer.observe(b, config);
        }
    },
    !1
);

////////////////////////////////
//!Вебсокеты. Если в будущем понадобится этот функционад то доработать этот раздел
/* if ("WebSocket" in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(
                document.getElementsByTagName("link")
            );
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (
                    (elem.href && typeof rel != "string") ||
                    rel.length == 0 ||
                    rel.toLowerCase() == "stylesheet"
                ) {
                    var url = elem.href.replace(
                        /(&|\?)_cacheOverride=\d+/,
                        ""
                    );
                    elem.href =
                        url +
                        (url.indexOf("?") >= 0 ? "&" : "?") +
                        "_cacheOverride=" +
                        new Date().valueOf();
                }
                parent.appendChild(elem);
            }
        }
        var protocol =
            window.location.protocol === "http:"
                ? "ws://"
                : "wss://";
        var address =
            protocol +
            window.location.host +
            window.location.pathname +
            "/ws";
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == "reload") window.location.reload();
            else if (msg.data == "refreshcss") refreshCSS();
        };
        if (
            sessionStorage &&
            !sessionStorage.getItem(
                "IsThisFirstTime_Log_From_LiveServer"
            )
        ) {
            console.log("Live reload enabled.");
            sessionStorage.setItem(
                "IsThisFirstTime_Log_From_LiveServer",
                true
            );
        }
    })();
} else {
    console.error(
        "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
    );
} */
