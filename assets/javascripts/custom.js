! function() {
    "use strict";
    var e = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
            }
        },
        // t = function() {
        //     var e = jQuery(".owl-carousel-carousel");
        //     e.owlCarousel({
        //         items: 3,
        //         loop: !0,
        //         margin: 20,
        //         nav: !0,
        //         dots: !0,
        //         smartSpeed: 800,
        //         autoHeight: !0,
        //         navText: ["<i class='icon-keyboard_arrow_left owl-direction'></i>", "<i class='icon-keyboard_arrow_right owl-direction'></i>"],
        //         responsive: {
        //             0: {
        //                 items: 1
        //             },
        //             600: {
        //                 items: 2
        //             },
        //             1e3: {
        //                 items: 3
        //             }
        //         }
        //     }), (e = jQuery(".owl-carousel-fullwidth")).owlCarousel({
        //         items: 1,
        //         loop: !0,
        //         margin: 20,
        //         nav: !1,
        //         dots: !0,
        //         smartSpeed: 800,
        //         autoHeight: !0,
        //         autoplay: !0,
        //         navText: ["<i class='icon-keyboard_arrow_left owl-direction'></i>", "<i class='icon-keyboard_arrow_right owl-direction'></i>"]
        //     }), (e = jQuery(".owl-work")).owlCarousel({
        //         stagePadding: 150,
        //         loop: !0,
        //         margin: 20,
        //         nav: !0,
        //         dots: !1,
        //         mouseDrag: !1,
        //         autoWidth: !0,
        //         autoHeight: !0,
        //         autoplay: !0,
        //         autoplayTimeout: 2e3,
        //         autoplayHoverPause: !0,
        //         navText: ["<i class='icon-chevron-thin-left'></i>", "<i class='icon-chevron-thin-right'></i>"],
        //         responsive: {
        //             0: {
        //                 items: 1,
        //                 stagePadding: 10
        //             },
        //             500: {
        //                 items: 2,
        //                 stagePadding: 20
        //             },
        //             600: {
        //                 items: 2,
        //                 stagePadding: 40
        //             },
        //             800: {
        //                 items: 2,
        //                 stagePadding: 100
        //             },
        //             1100: {
        //                 items: 3
        //             },
        //             1400: {
        //                 items: 4
        //             }
        //         }
        //     })
        // },
        n = function() {
            jQuery(".flexslider").flexslider({
                animation: "fade",
                prevText: "",
                nextText: "",
                slideshow: !0
            })
        },
        a = function() {
            var e = 0;
            jQuery(".probootstrap-animate").waypoint(function(t) {
                "down" !== t || jQuery(this.element).hasClass("probootstrap-animated") || (e++, jQuery(this.element).addClass("item-animate"), setTimeout(function() {
                    jQuery("body .probootstrap-animate.item-animate").each(function(e) {
                        var t = jQuery(this);
                        setTimeout(function() {
                            var e = t.data("animate-effect");
                            "fadeIn" === e ? t.addClass("fadeIn probootstrap-animated") : "fadeInLeft" === e ? t.addClass("fadeInLeft probootstrap-animated") : "fadeInRight" === e ? t.addClass("fadeInRight probootstrap-animated") : t.addClass("fadeInUp probootstrap-animated"), t.removeClass("item-animate")
                        }, 30 * e, "easeInOutExpo")
                    })
                }, 100))
            }, {
                offset: "95%"
            })
        },
        i = function() {
            jQuery(window).scroll(function() {
                jQuery(this).scrollTop() > 5 ? jQuery(".probootstrap-navbar").addClass("scrolled") : jQuery(".probootstrap-navbar").removeClass("scrolled")
            })
        },
        r = function(e) {
            for (var t = function(e) {
                    for (var t, n, a, i, r = e.childNodes, o = r.length, s = [], u = 0; u < o; u++) 1 === (t = r[u]).nodeType && (n = t.children[0], console.log(t), a = n.getAttribute("data-size").split("x"), i = {
                        src: n.getAttribute("href"),
                        w: parseInt(a[0], 10),
                        h: parseInt(a[1], 10)
                    }, t.children.length > 1 && (i.title = t.children[1].innerHTML), n.children.length > 0 && (i.msrc = n.children[0].getAttribute("src")), i.el = t, s.push(i));
                    return s
                }, n = function e(t, n) {
                    return t && (n(t) ? t : e(t.parentNode, n))
                }, a = function(e, n, a, i) {
                    var r, o, s = document.querySelectorAll(".pswp")[0];
                    if (o = t(n), r = {
                            galleryUID: n.getAttribute("data-pswp-uid"),
                            getThumbBoundsFn: function(e) {
                                var t = o[e].el.getElementsByTagName("img")[0],
                                    n = window.pageYOffset || document.documentElement.scrollTop,
                                    a = t.getBoundingClientRect();
                                return {
                                    x: a.left,
                                    y: a.top + n,
                                    w: a.width
                                }
                            }
                        }, i)
                        if (r.galleryPIDs) {
                            for (var u = 0; u < o.length; u++)
                                if (o[u].pid == e) {
                                    r.index = u;
                                    break
                                }
                        } else r.index = parseInt(e, 10) - 1;
                    else r.index = parseInt(e, 10);
                    isNaN(r.index) || (a && (r.showAnimationDuration = 0), new PhotoSwipe(s, PhotoSwipeUI_Default, o, r).init())
                }, i = document.querySelectorAll(e), r = 0, o = i.length; r < o; r++) i[r].setAttribute("data-pswp-uid", r + 1), i[r].onclick = function(e) {
                (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
                var t = e.target || e.srcElement,
                    i = n(t, function(e) {
                        return e.tagName && "FIGURE" === e.tagName.toUpperCase()
                    });
                if (i) {
                    for (var r, o = i.parentNode, s = i.parentNode.childNodes, u = s.length, l = 0, d = 0; d < u; d++)
                        if (1 === s[d].nodeType) {
                            if (s[d] === i) {
                                r = l;
                                break
                            }
                            l++
                        }
                    return r >= 0 && a(r, o), !1
                }
            };
            var s = function() {
                var e = window.location.hash.substring(1),
                    t = {};
                if (e.length < 5) return t;
                for (var n = e.split("&"), a = 0; a < n.length; a++)
                    if (n[a]) {
                        var i = n[a].split("=");
                        i.length < 2 || (t[i[0]] = i[1])
                    }
                return t.gid && (t.gid = parseInt(t.gid, 10)), t
            }();
            s.pid && s.gid && a(s.pid, i[s.gid - 1], !0, !0)
        },
        o = function() {
            if (jQuery(".portfolio-feed").length > 0) {
                var e = $(".portfolio-feed");
                e.imagesLoaded(function() {
                    e.isotope({
                        itemSelector: ".grid-item",
                        percentPosition: !0,
                        masonry: {
                            columnWidth: ".grid-sizer",
                            gutter: ".gutter-sizer"
                        }
                    })
                })
            }
        },
        s = function() {
            e.any() || jQuery(window).stellar()
        },
        // u = function() {
        //     jQuery("#time").timepicker(), jQuery("#date").datepicker({
        //         format: "m/d/yyyy",
        //         autoclose: !0
        //     })
        // },
        l = function() {
            jQuery('.navbar-nav a:not([class="external"])').click(function(t) {
                var n = jQuery(this).data("nav-section");
                jQuery(".navbar-nav");
                return e.any() && jQuery(".navbar-toggle").click(), jQuery('[data-section="' + n + '"]').length && jQuery("html, body").animate({
                    scrollTop: jQuery('[data-section="' + n + '"]').offset().top - 55
                }, 500, "easeInOutExpo"), t.preventDefault(), !1
            })
        },
        d = function(e) {
            var t = jQuery(".navbar-nav");
            t.find("li").removeClass("active"), t.each(function() {
                jQuery(this).find('a[data-nav-section="' + e + '"]').closest("li").addClass("active")
            })
        },
        c = function() {
            var e = jQuery("section[data-section]");
            e.waypoint(function(e) {
                "down" === e && d(jQuery(this.element).data("section"))
            }, {
                offset: "150px"
            }), e.waypoint(function(e) {
                "up" === e && d(jQuery(this.element).data("section"))
            }, {
                offset: function() {
                    return -jQuery(this.element).height() - 155
                }
            })
        };
    jQuery(function() {
        a(), i(), jQuery(".probootstrap-gallery").length > 0 && r(".probootstrap-gallery"), o(), s(), l(), c()
    }), jQuery(window).load(function() {
        n()
    })
}();
