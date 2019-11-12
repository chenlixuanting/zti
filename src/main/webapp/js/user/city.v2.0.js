﻿$(function () {
    $(".deschange .changelink").click(function () {
        var c = $(this), b = c.prev(), d = c.next(), e = b.val();
        b.val(d.val());
        d.val(e);
        return false
    });
    $(".special_ticket li:last").css("border-bottom", "none");
    $("#textAskSearch").placeholder();
    $("#btnAskSearch").click(function () {
        var c = $.trim($("#textAskSearch").val());
        if (c != "" && c != "输入您的问题") {
            var b = INTERFACE.askSearchUrl;
            window.open(b + encodeURIComponent(c))
        }
    });
    $(".check_kdgl .b_blue_s, .check_kdgl a.guidepic, .check_kdgl dt.ellipsis a").on("click", function (b) {
        b.preventDefault();
        $(".scan_kdglbox").show()
    });
    var a = function () {
        var b = document.createElement("canvas");
        return !!(b.getContext && b.getContext("2d"))
    };
    if (INTERFACE.gs_kdgl_url) {
        $("#glcode_share").qrcode({
            width: 110,
            height: 110,
            correctLevel: 0,
            render: !a() ? "table" : "canvas",
            text: INTERFACE.gs_kdgl_url
        })
    }
});
$(function () {
    $("#foodPopbox").carousel();
    $(".open_popupbox .list_mod2 img, .open_popupbox .list_mod2 dt a").add(".open_popupbox_a a").add(".open_popupbox li img, .open_popupbox li dt a, .open_popupbox a.morelink,dd.open_popupbox p.ellipsis a").click(function () {
        var b = $(this).parents(".list_mod2");
        if (b.length === 0) {
            b = $(this).parents("li")
        }
        if ($(this).parents(".open_popupbox_a").length !== 0) {
            b = $(this)
        }
        INTERFACE.getFoodDataFn(a, b);
        return false
    });
    $("#gs_addone_1").css({"z-index": 150});
    $("#foodPopbox .icon_slike").click(function () {
        var f = null;
        var c = $(this), e = c.hasClass("click_like");
        if (e) {
            var b = c.find("span");
            if (b.text() != "已喜欢") {
                var d = parseInt(b.text(), 10);
                d = isNaN(d) ? 0 : d;
                var g = function () {
                    b.text(d);
                    clearTimeout(f)
                };
                b.text("已喜欢");
                f = setTimeout(g, 2000)
            }
        }
    });
    $("#foodPopbox .icon_slike").gsbaselike({requestFn: INTERFACE.likeRequestFn});

    function a(l) {
        var k = $("#foodPopbox"), g = k.find(".carousel-indicators"), d = k.find(".carousel-inner"),
            f = k.find(".boxtitle .f_left"), e = k.find(".boxtitle .icon_slike"), b = k.find(".toplinedl li").eq(0),
            c = k.find(".toplinedl .ellipsis"), h = k.find(".toplinedl .topline strong");
        g.empty();
        d.empty();
        f.empty();
        e.removeClass("click_like");
        e.attr("title", "");
        e.find("span").text("0");
        b.text("");
        c.empty();
        var p = l.imgs, o = p.length, m = 0, s = [], q = [];
        for (; m < o; m++) {
            var n = p[m];
            s.push('<li data-slide-to="' + m + '" data-target="#foodCarousel"></li>');
            q.push('<div class="item" style="display: none;">');
            q.push(' <a target="_blank" href="' + n + '">');
            q.push('     <img class="foodpic" src="' + n + '">');
            q.push(" </a>");
            q.push("</div>")
        }
        if (o > 1) {
            g.append(s.join(""));
            g.find("li:first").addClass("active");
            k.find(".carousel-control").show()
        } else {
            k.find(".carousel-control").hide()
        }
        d.append(q.join(""));
        d.find(".item:first").addClass("active").css({display: "block"});
        f.html("<strong>" + l.name + "</strong>" + l.type);
        e.attr("data-id", l.id);
        if (l.ellipsisTitle) {
            h.html(l.ellipsisTitle)
        }
        if (l.likeType) {
            e.attr("data-type", l.likeType)
        }
        if (!l.isLogin) {
            e.addClass("a_popup_login")
        }
        if (l.isLiked) {
            e.addClass("click_like");
            e.attr("title", "已喜欢")
        }
        e.find("span").text(l.likeNum);
        b.text(l.content);
        var w = l.links, v = w.length, r = 0, u = [];
        for (; r < v; r++) {
            var t = w[r];
            u.push('<a target="_blank" href="' + t.url + '">' + t.text + "</a>、")
        }
        u = u.join("");
        u = u.substring(0, u.length - 1);
        c.append(u);
        $.popupbox.show({
            id: "foodPopbox", callback: function () {
                var i = $("#foodPopbox .carousel-indicators").width() / 2;
                $("#foodPopbox .carousel-indicators").css({"margin-left": -i})
            }
        })
    }
});
$.pageLinkJump = function (c, a) {
    var b = a.parents(".ttd_pager").attr("data-type");
    if (b) {
        INTERFACE.pageLinkJump(b, c)
    } else {
        INTERFACE.pageLinkJump(c)
    }
};
$(".practicaltab li").each(function () {
    if ($(this).height() < $(this).find("dd").height()) {
        $(this).find(".seeline").show().toggle(function () {
            $(this).html("收起<span></span>");
            $(this).addClass("seeall");
            $(this).parents("li").css("height", "auto")
        }, function () {
            $(this).parents("li").css("height", "30px");
            $(this).removeClass("seeall");
            $(this).html("更多<span></span>")
        })
    }
});
$(".practicaltab li").each(function () {
    var c = $(this), a = c.find("dd a.current");
    if (a.length !== 0) {
        var b = c.find(".seeline"), d = a.outerHeight();
        positionTop = a.position().top;
        if (positionTop > d) {
            b.trigger("click")
        }
    }
});
(function (a) {
    var c = {};
    var b = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: true,
        hideControlOnEnd: false,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        video: false,
        useCSS: true,
        preloadImages: "visible",
        responsive: true,
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,
        pager: true,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: true,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: false,
        autoControlsSelector: null,
        auto: false,
        pause: 4000,
        autoStart: true,
        autoDirection: "next",
        autoHover: false,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function () {
        },
        onSlideBefore: function () {
        },
        onSlideAfter: function () {
        },
        onSlideNext: function () {
        },
        onSlidePrev: function () {
        }
    };
    a.fn.bxSlider = function (C) {
        if (this.length == 0) {
            return this
        }
        if (this.length > 1) {
            this.each(function () {
                a(this).bxSlider(C)
            });
            return this
        }
        var I = {};
        var n = this;
        c.el = this;
        var Q = a(window).width();
        var P = a(window).height();
        var u = function () {
            I.settings = a.extend({}, b, C);
            I.settings.slideWidth = parseInt(I.settings.slideWidth);
            I.children = n.children(I.settings.slideSelector);
            if (I.children.length < I.settings.minSlides) {
                I.settings.minSlides = I.children.length
            }
            if (I.children.length < I.settings.maxSlides) {
                I.settings.maxSlides = I.children.length
            }
            if (I.settings.randomStart) {
                I.settings.startSlide = Math.floor(Math.random() * I.children.length)
            }
            I.active = {index: I.settings.startSlide};
            I.carousel = I.settings.minSlides > 1 || I.settings.maxSlides > 1;
            if (I.carousel) {
                I.settings.preloadImages = "all"
            }
            I.minThreshold = (I.settings.minSlides * I.settings.slideWidth) + ((I.settings.minSlides - 1) * I.settings.slideMargin);
            I.maxThreshold = (I.settings.maxSlides * I.settings.slideWidth) + ((I.settings.maxSlides - 1) * I.settings.slideMargin);
            I.working = false;
            I.controls = {};
            I.interval = null;
            I.animProp = I.settings.mode == "vertical" ? "top" : "left";
            I.usingCSS = I.settings.useCSS && I.settings.mode != "fade" && (function () {
                var R = document.createElement("div");
                var T = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var S in T) {
                    if (R.style[T[S]] !== undefined) {
                        I.cssPrefix = T[S].replace("Perspective", "").toLowerCase();
                        I.animProp = "-" + I.cssPrefix + "-transform";
                        return true
                    }
                }
                return false
            }());
            if (I.settings.mode == "vertical") {
                I.settings.maxSlides = I.settings.minSlides
            }
            n.data("origStyle", n.attr("style"));
            n.children(I.settings.slideSelector).each(function () {
                a(this).data("origStyle", a(this).attr("style"))
            });
            H()
        };
        var H = function () {
            n.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
            I.viewport = n.parent();
            I.loader = a('<div class="bx-loading" />');
            I.viewport.prepend(I.loader);
            n.css({
                width: I.settings.mode == "horizontal" ? (I.children.length * 100 + 215) + "%" : "auto",
                position: "relative"
            });
            if (I.usingCSS && I.settings.easing) {
                n.css("-" + I.cssPrefix + "-transition-timing-function", I.settings.easing)
            } else {
                if (!I.settings.easing) {
                    I.settings.easing = "swing"
                }
            }
            var S = p();
            I.viewport.css({width: "100%", overflow: "hidden", position: "relative"});
            I.viewport.parent().css({maxWidth: t()});
            if (!I.settings.pager) {
                I.viewport.parent().css({margin: "0 auto 0px"})
            }
            I.children.css({
                "float": I.settings.mode == "horizontal" ? "left" : "none",
                listStyle: "none",
                position: "relative"
            });
            I.children.css("width", r());
            if (I.settings.mode == "horizontal" && I.settings.slideMargin > 0) {
                I.children.css("marginRight", I.settings.slideMargin)
            }
            if (I.settings.mode == "vertical" && I.settings.slideMargin > 0) {
                I.children.css("marginBottom", I.settings.slideMargin)
            }
            if (I.settings.mode == "fade") {
                I.children.css({position: "absolute", zIndex: 0, display: "none"});
                I.children.eq(I.settings.startSlide).css({zIndex: 50, display: "block"})
            }
            I.controls.el = a('<div class="bx-controls" />');
            if (I.settings.captions) {
                d()
            }
            I.active.last = I.settings.startSlide == q() - 1;
            if (I.settings.video) {
                n.fitVids()
            }
            var R = I.children.eq(I.settings.startSlide);
            if (I.settings.preloadImages == "all") {
                R = I.children
            }
            if (!I.settings.ticker) {
                if (I.settings.pager) {
                    g()
                }
                if (I.settings.controls) {
                    e()
                }
                if (I.settings.auto && I.settings.autoControls) {
                    f()
                }
                if (I.settings.controls || I.settings.autoControls || I.settings.pager) {
                    I.viewport.after(I.controls.el)
                }
            } else {
                I.settings.pager = false
            }
            y(R, J)
        };
        var y = function (T, R) {
            var U = T.find("img, iframe").length;
            if (U == 0) {
                R();
                return
            }
            var S = 0;
            T.find("img, iframe").each(function () {
                a(this).one("load", function () {
                    if (++S == U) {
                        R()
                    }
                }).each(function () {
                    if (this.complete) {
                        a(this).load()
                    }
                })
            })
        };
        var J = function () {
            if (I.settings.infiniteLoop && I.settings.mode != "fade" && !I.settings.ticker) {
                var R = I.settings.mode == "vertical" ? I.settings.minSlides : I.settings.maxSlides;
                var S = I.children.slice(0, R).clone().addClass("bx-clone");
                var T = I.children.slice(-R).clone().addClass("bx-clone");
                n.append(S).prepend(T)
            }
            I.loader.remove();
            G();
            if (I.settings.mode == "vertical") {
                I.settings.adaptiveHeight = true
            }
            I.viewport.height(s());
            n.redrawSlider();
            I.settings.onSliderLoad(I.active.index);
            I.initialized = true;
            if (I.settings.responsive) {
                a(window).bind("resize", E)
            }
            if (I.settings.auto && I.settings.autoStart) {
                v()
            }
            if (I.settings.ticker) {
                w()
            }
            if (I.settings.pager) {
                O(I.settings.startSlide)
            }
            if (I.settings.controls) {
                N()
            }
            if (I.settings.touchEnabled && !I.settings.ticker) {
                x()
            }
        };
        var s = function () {
            var T = 0;
            var R = a();
            if (I.settings.mode != "vertical" && !I.settings.adaptiveHeight) {
                R = I.children
            } else {
                if (!I.carousel) {
                    R = I.children.eq(I.active.index)
                } else {
                    var S = I.settings.moveSlides == 1 ? I.active.index : I.active.index * o();
                    R = I.children.eq(S);
                    for (i = 1; i <= I.settings.maxSlides - 1; i++) {
                        if (S + i >= I.children.length) {
                            R = R.add(I.children.eq(i - 1))
                        } else {
                            R = R.add(I.children.eq(S + i))
                        }
                    }
                }
            }
            if (I.settings.mode == "vertical") {
                R.each(function (U) {
                    T += a(this).outerHeight()
                });
                if (I.settings.slideMargin > 0) {
                    T += I.settings.slideMargin * (I.settings.minSlides - 1)
                }
            } else {
                T = Math.max.apply(Math, R.map(function () {
                    return a(this).outerHeight(false)
                }).get())
            }
            return T
        };
        var t = function () {
            var R = "100%";
            if (I.settings.slideWidth > 0) {
                if (I.settings.mode == "horizontal") {
                    R = (I.settings.maxSlides * I.settings.slideWidth) + ((I.settings.maxSlides - 1) * I.settings.slideMargin)
                } else {
                    R = I.settings.slideWidth
                }
            }
            return R
        };
        var r = function () {
            var R = I.settings.slideWidth;
            var S = I.viewport.width();
            if (I.settings.slideWidth == 0 || (I.settings.slideWidth > S && !I.carousel) || I.settings.mode == "vertical") {
                R = S
            } else {
                if (I.settings.maxSlides > 1 && I.settings.mode == "horizontal") {
                    if (S > I.maxThreshold) {
                    } else {
                        if (S < I.minThreshold) {
                            R = (S - (I.settings.slideMargin * (I.settings.minSlides - 1))) / I.settings.minSlides
                        }
                    }
                }
            }
            return R
        };
        var p = function () {
            var S = 1;
            if (I.settings.mode == "horizontal" && I.settings.slideWidth > 0) {
                if (I.viewport.width() < I.minThreshold) {
                    S = I.settings.minSlides
                } else {
                    if (I.viewport.width() > I.maxThreshold) {
                        S = I.settings.maxSlides
                    } else {
                        var R = I.children.first().width();
                        S = Math.floor(I.viewport.width() / R)
                    }
                }
            } else {
                if (I.settings.mode == "vertical") {
                    S = I.settings.minSlides
                }
            }
            return S
        };
        var q = function () {
            var T = 0;
            if (I.settings.moveSlides > 0) {
                if (I.settings.infiniteLoop) {
                    T = I.children.length / o()
                } else {
                    var R = 0;
                    var S = 0;
                    while (R < I.children.length) {
                        ++T;
                        R = S + p();
                        S += I.settings.moveSlides <= p() ? I.settings.moveSlides : p()
                    }
                }
            } else {
                T = Math.ceil(I.children.length / p())
            }
            return T
        };
        var o = function () {
            if (I.settings.moveSlides > 0 && I.settings.moveSlides <= p()) {
                return I.settings.moveSlides
            }
            return p()
        };
        var G = function () {
            if (I.children.length > I.settings.maxSlides && I.active.last && !I.settings.infiniteLoop) {
                if (I.settings.mode == "horizontal") {
                    var R = I.children.last();
                    var T = R.position();
                    F(-(T.left - (I.viewport.width() - R.width())), "reset", 0)
                } else {
                    if (I.settings.mode == "vertical") {
                        var S = I.children.length - I.settings.minSlides;
                        var T = I.children.eq(S).position();
                        F(-T.top, "reset", 0)
                    }
                }
            } else {
                var T = I.children.eq(I.active.index * o()).position();
                if (I.active.index == q() - 1) {
                    I.active.last = true
                }
                if (T != undefined) {
                    if (I.settings.mode == "horizontal") {
                        F(-T.left, "reset", 0)
                    } else {
                        if (I.settings.mode == "vertical") {
                            F(-T.top, "reset", 0)
                        }
                    }
                }
            }
        };
        var F = function (W, V, S, T) {
            if (I.usingCSS) {
                var U = I.settings.mode == "vertical" ? "translate3d(0, " + W + "px, 0)" : "translate3d(" + W + "px, 0, 0)";
                n.css("-" + I.cssPrefix + "-transition-duration", S / 1000 + "s");
                if (V == "slide") {
                    n.css(I.animProp, U);
                    n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        n.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                        L()
                    })
                } else {
                    if (V == "reset") {
                        n.css(I.animProp, U)
                    } else {
                        if (V == "ticker") {
                            n.css("-" + I.cssPrefix + "-transition-timing-function", "linear");
                            n.css(I.animProp, U);
                            n.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                                n.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                                F(T.resetValue, "reset", 0);
                                K()
                            })
                        }
                    }
                }
            } else {
                var R = {};
                R[I.animProp] = W;
                if (V == "slide") {
                    n.animate(R, S, I.settings.easing, function () {
                        L()
                    })
                } else {
                    if (V == "reset") {
                        n.css(I.animProp, W)
                    } else {
                        if (V == "ticker") {
                            n.animate(R, speed, "linear", function () {
                                F(T.resetValue, "reset", 0);
                                K()
                            })
                        }
                    }
                }
            }
        };
        var D = function () {
            var T = "";
            var U = q();
            for (var R = 0; R < U; R++) {
                var S = "";
                if (I.settings.buildPager && a.isFunction(I.settings.buildPager)) {
                    S = I.settings.buildPager(R);
                    I.pagerEl.addClass("bx-custom-pager")
                } else {
                    S = R + 1;
                    I.pagerEl.addClass("bx-default-pager")
                }
                T += '<div class="bx-pager-item"><a href="" data-slide-index="' + R + '" class="bx-pager-link">' + S + "</a></div>"
            }
            I.pagerEl.html(T)
        };
        var g = function () {
            if (!I.settings.pagerCustom) {
                I.pagerEl = a('<div class="bx-pager" />');
                if (I.settings.pagerSelector) {
                    a(I.settings.pagerSelector).html(I.pagerEl)
                } else {
                    I.controls.el.addClass("bx-has-pager").append(I.pagerEl)
                }
                D()
            } else {
                I.pagerEl = a(I.settings.pagerCustom)
            }
            I.pagerEl.delegate("a", "click", j)
        };
        var e = function () {
            I.controls.next = a('<a class="bx-next" href="">' + I.settings.nextText + "</a>");
            I.controls.prev = a('<a class="bx-prev" href="">' + I.settings.prevText + "</a>");
            I.controls.next.bind("click", h);
            I.controls.prev.bind("click", k);
            if (I.settings.nextSelector) {
                a(I.settings.nextSelector).append(I.controls.next)
            }
            if (I.settings.prevSelector) {
                a(I.settings.prevSelector).append(I.controls.prev)
            }
            if (!I.settings.nextSelector && !I.settings.prevSelector) {
                I.controls.directionEl = a('<div class="bx-controls-direction" />');
                I.controls.directionEl.append(I.controls.prev).append(I.controls.next);
                I.controls.el.addClass("bx-has-controls-direction").append(I.controls.directionEl)
            }
        };
        var f = function () {
            I.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + I.settings.startText + "</a></div>");
            I.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + I.settings.stopText + "</a></div>");
            I.controls.autoEl = a('<div class="bx-controls-auto" />');
            I.controls.autoEl.delegate(".bx-start", "click", l);
            I.controls.autoEl.delegate(".bx-stop", "click", m);
            if (I.settings.autoControlsCombine) {
                I.controls.autoEl.append(I.controls.start)
            } else {
                I.controls.autoEl.append(I.controls.start).append(I.controls.stop)
            }
            if (I.settings.autoControlsSelector) {
                a(I.settings.autoControlsSelector).html(I.controls.autoEl)
            } else {
                I.controls.el.addClass("bx-has-controls-auto").append(I.controls.autoEl)
            }
            M(I.settings.autoStart ? "stop" : "start")
        };
        var d = function () {
            I.children.each(function (R) {
                var S = a(this).find("img:first").attr("title");
                if (S != undefined && ("" + S).length) {
                    a(this).append('<div class="bx-caption"><span>' + S + "</span></div>")
                }
            })
        };
        var h = function (R) {
            if (I.settings.auto) {
                n.stopAuto()
            }
            n.goToNextSlide();
            R.preventDefault()
        };
        var k = function (R) {
            if (I.settings.auto) {
                n.stopAuto()
            }
            n.goToPrevSlide();
            R.preventDefault()
        };
        var l = function (R) {
            n.startAuto();
            R.preventDefault()
        };
        var m = function (R) {
            n.stopAuto();
            R.preventDefault()
        };
        var j = function (R) {
            if (I.settings.auto) {
                n.stopAuto()
            }
            var T = a(R.currentTarget);
            var S = parseInt(T.attr("data-slide-index"));
            if (S != I.active.index) {
                n.goToSlide(S)
            }
            R.preventDefault()
        };
        var O = function (S) {
            var R = I.children.length;
            if (I.settings.pagerType == "short") {
                if (I.settings.maxSlides > 1) {
                    R = Math.ceil(I.children.length / I.settings.maxSlides)
                }
                I.pagerEl.html((S + 1) + I.settings.pagerShortSeparator + R);
                return
            }
            I.pagerEl.find("a").removeClass("active");
            I.pagerEl.each(function (U, T) {
                a(T).find("a").eq(S).addClass("active")
            })
        };
        var L = function () {
            if (I.settings.infiniteLoop) {
                var R = "";
                if (I.active.index == 0) {
                    R = I.children.eq(0).position()
                } else {
                    if (I.active.index == q() - 1 && I.carousel) {
                        R = I.children.eq((q() - 1) * o()).position()
                    } else {
                        if (I.active.index == I.children.length - 1) {
                            R = I.children.eq(I.children.length - 1).position()
                        }
                    }
                }
                if (I.settings.mode == "horizontal") {
                    F(-R.left, "reset", 0)
                } else {
                    if (I.settings.mode == "vertical") {
                        F(-R.top, "reset", 0)
                    }
                }
            }
            I.working = false;
            I.settings.onSlideAfter(I.children.eq(I.active.index), I.oldIndex, I.active.index)
        };
        var M = function (R) {
            if (I.settings.autoControlsCombine) {
                I.controls.autoEl.html(I.controls[R])
            } else {
                I.controls.autoEl.find("a").removeClass("active");
                I.controls.autoEl.find("a:not(.bx-" + R + ")").addClass("active")
            }
        };
        var N = function () {
            if (q() == 1) {
                I.controls.prev.addClass("disabled");
                I.controls.next.addClass("disabled")
            } else {
                if (!I.settings.infiniteLoop && I.settings.hideControlOnEnd) {
                    if (I.active.index == 0) {
                        I.controls.prev.addClass("disabled");
                        I.controls.next.removeClass("disabled")
                    } else {
                        if (I.active.index == q() - 1) {
                            I.controls.next.addClass("disabled");
                            I.controls.prev.removeClass("disabled")
                        } else {
                            I.controls.prev.removeClass("disabled");
                            I.controls.next.removeClass("disabled")
                        }
                    }
                }
            }
        };
        var v = function () {
            if (I.settings.autoDelay > 0) {
                var R = setTimeout(n.startAuto, I.settings.autoDelay)
            } else {
                n.startAuto()
            }
            if (I.settings.autoHover) {
                n.hover(function () {
                    if (I.interval) {
                        n.stopAuto(true);
                        I.autoPaused = true
                    }
                }, function () {
                    if (I.autoPaused) {
                        n.startAuto(true);
                        I.autoPaused = null
                    }
                })
            }
        };
        var w = function () {
            var S = 0;
            if (I.settings.autoDirection == "next") {
                n.append(I.children.clone().addClass("bx-clone"))
            } else {
                n.prepend(I.children.clone().addClass("bx-clone"));
                var R = I.children.first().position();
                S = I.settings.mode == "horizontal" ? -R.left : -R.top
            }
            F(S, "reset", 0);
            I.settings.pager = false;
            I.settings.controls = false;
            I.settings.autoControls = false;
            if (I.settings.tickerHover && !I.usingCSS) {
                I.viewport.hover(function () {
                    n.stop()
                }, function () {
                    var W = 0;
                    I.children.each(function (X) {
                        W += I.settings.mode == "horizontal" ? a(this).outerWidth(true) : a(this).outerHeight(true)
                    });
                    var V = I.settings.speed / W;
                    var U = I.settings.mode == "horizontal" ? "left" : "top";
                    var T = V * (W - (Math.abs(parseInt(n.css(U)))));
                    K(T)
                })
            }
            K()
        };
        var K = function (W) {
            speed = W ? W : I.settings.speed;
            var T = {left: 0, top: 0};
            var U = {left: 0, top: 0};
            if (I.settings.autoDirection == "next") {
                T = n.find(".bx-clone").first().position()
            } else {
                U = I.children.first().position()
            }
            var R = I.settings.mode == "horizontal" ? -T.left : -T.top;
            var V = I.settings.mode == "horizontal" ? -U.left : -U.top;
            var S = {resetValue: V};
            F(R, "ticker", speed, S)
        };
        var x = function () {
            I.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}};
            I.viewport.bind("touchstart", B)
        };
        var B = function (R) {
            if (I.working) {
                R.preventDefault()
            } else {
                I.touch.originalPos = n.position();
                var S = R.originalEvent;
                I.touch.start.x = S.changedTouches[0].pageX;
                I.touch.start.y = S.changedTouches[0].pageY;
                I.viewport.bind("touchmove", A);
                I.viewport.bind("touchend", z)
            }
        };
        var A = function (S) {
            var T = S.originalEvent;
            var V = Math.abs(T.changedTouches[0].pageX - I.touch.start.x);
            var W = Math.abs(T.changedTouches[0].pageY - I.touch.start.y);
            if ((V * 3) > W && I.settings.preventDefaultSwipeX) {
                S.preventDefault()
            } else {
                if ((W * 3) > V && I.settings.preventDefaultSwipeY) {
                    S.preventDefault()
                }
            }
            if (I.settings.mode != "fade" && I.settings.oneToOneTouch) {
                var U = 0;
                if (I.settings.mode == "horizontal") {
                    var R = T.changedTouches[0].pageX - I.touch.start.x;
                    U = I.touch.originalPos.left + R
                } else {
                    var R = T.changedTouches[0].pageY - I.touch.start.y;
                    U = I.touch.originalPos.top + R
                }
                F(U, "reset", 0)
            }
        };
        var z = function (S) {
            I.viewport.unbind("touchmove", A);
            var T = S.originalEvent;
            var U = 0;
            I.touch.end.x = T.changedTouches[0].pageX;
            I.touch.end.y = T.changedTouches[0].pageY;
            if (I.settings.mode == "fade") {
                var R = Math.abs(I.touch.start.x - I.touch.end.x);
                if (R >= I.settings.swipeThreshold) {
                    I.touch.start.x > I.touch.end.x ? n.goToNextSlide() : n.goToPrevSlide();
                    n.stopAuto()
                }
            } else {
                var R = 0;
                if (I.settings.mode == "horizontal") {
                    R = I.touch.end.x - I.touch.start.x;
                    U = I.touch.originalPos.left
                } else {
                    R = I.touch.end.y - I.touch.start.y;
                    U = I.touch.originalPos.top
                }
                if (!I.settings.infiniteLoop && ((I.active.index == 0 && R > 0) || (I.active.last && R < 0))) {
                    F(U, "reset", 200)
                } else {
                    if (Math.abs(R) >= I.settings.swipeThreshold) {
                        R < 0 ? n.goToNextSlide() : n.goToPrevSlide();
                        n.stopAuto()
                    } else {
                        F(U, "reset", 200)
                    }
                }
            }
            I.viewport.unbind("touchend", z)
        };
        var E = function (R) {
            var T = a(window).width();
            var S = a(window).height();
            if (Q != T || P != S) {
                Q = T;
                P = S;
                n.redrawSlider()
            }
        };
        n.goToSlide = function (Y, R) {
            if (I.working || I.active.index == Y) {
                return
            }
            I.working = true;
            I.oldIndex = I.active.index;
            if (Y < 0) {
                I.active.index = q() - 1
            } else {
                if (Y >= q()) {
                    I.active.index = 0
                } else {
                    I.active.index = Y
                }
            }
            I.settings.onSlideBefore(I.children.eq(I.active.index), I.oldIndex, I.active.index);
            if (R == "next") {
                I.settings.onSlideNext(I.children.eq(I.active.index), I.oldIndex, I.active.index)
            } else {
                if (R == "prev") {
                    I.settings.onSlidePrev(I.children.eq(I.active.index), I.oldIndex, I.active.index)
                }
            }
            I.active.last = I.active.index >= q() - 1;
            if (I.settings.pager) {
                O(I.active.index)
            }
            if (I.settings.controls) {
                N()
            }
            if (I.settings.mode == "fade") {
                if (I.settings.adaptiveHeight && I.viewport.height() != s()) {
                    I.viewport.animate({height: s()}, I.settings.adaptiveHeightSpeed)
                }
                I.children.filter(":visible").fadeOut(I.settings.speed).css({zIndex: 0});
                I.children.eq(I.active.index).css("zIndex", 51).fadeIn(I.settings.speed, function () {
                    a(this).css("zIndex", 50);
                    L()
                })
            } else {
                if (I.settings.adaptiveHeight && I.viewport.height() != s()) {
                    I.viewport.animate({height: s()}, I.settings.adaptiveHeightSpeed)
                }
                var V = 0;
                var W = {left: 0, top: 0};
                if (!I.settings.infiniteLoop && I.carousel && I.active.last) {
                    if (I.settings.mode == "horizontal") {
                        var T = I.children.eq(I.children.length - 1);
                        W = T.position();
                        V = I.viewport.width() - T.outerWidth()
                    } else {
                        var U = I.children.length - I.settings.minSlides;
                        W = I.children.eq(U).position()
                    }
                } else {
                    if (I.carousel && I.active.last && R == "prev") {
                        var S = I.settings.moveSlides == 1 ? I.settings.maxSlides - o() : ((q() - 1) * o()) - (I.children.length - I.settings.maxSlides);
                        var T = n.children(".bx-clone").eq(S);
                        W = T.position()
                    } else {
                        if (R == "next" && I.active.index == 0) {
                            W = n.find("> .bx-clone").eq(I.settings.maxSlides).position();
                            I.active.last = false
                        } else {
                            if (Y >= 0) {
                                var X = Y * o();
                                W = I.children.eq(X).position()
                            }
                        }
                    }
                }
                if ("undefined" !== typeof(W)) {
                    var Z = I.settings.mode == "horizontal" ? -(W.left - V) : -W.top;
                    F(Z, "slide", I.settings.speed)
                }
            }
        };
        n.goToNextSlide = function () {
            if (!I.settings.infiniteLoop && I.active.last) {
                return
            }
            var R = parseInt(I.active.index) + 1;
            n.goToSlide(R, "next")
        };
        n.goToPrevSlide = function () {
            if (!I.settings.infiniteLoop && I.active.index == 0) {
                return
            }
            var R = parseInt(I.active.index) - 1;
            n.goToSlide(R, "prev")
        };
        n.startAuto = function (R) {
            if (I.interval) {
                return
            }
            I.interval = setInterval(function () {
                I.settings.autoDirection == "next" ? n.goToNextSlide() : n.goToPrevSlide()
            }, I.settings.pause);
            if (I.settings.autoControls && R != true) {
                M("stop")
            }
        };
        n.stopAuto = function (R) {
            if (!I.interval) {
                return
            }
            clearInterval(I.interval);
            I.interval = null;
            if (I.settings.autoControls && R != true) {
                M("start")
            }
        };
        n.getCurrentSlide = function () {
            return I.active.index
        };
        n.getSlideCount = function () {
            return I.children.length
        };
        n.redrawSlider = function () {
            I.children.add(n.find(".bx-clone")).outerWidth(r());
            I.viewport.css("height", s());
            if (!I.settings.ticker) {
                G()
            }
            if (I.active.last) {
                I.active.index = q() - 1
            }
            if (I.active.index >= q()) {
                I.active.last = true
            }
            if (I.settings.pager && !I.settings.pagerCustom) {
                D();
                O(I.active.index)
            }
        };
        n.destroySlider = function () {
            if (!I.initialized) {
                return
            }
            I.initialized = false;
            a(".bx-clone", this).remove();
            I.children.each(function () {
                a(this).data("origStyle") != undefined ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
            });
            a(this).data("origStyle") != undefined ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style");
            a(this).unwrap().unwrap();
            if (I.controls.el) {
                I.controls.el.remove()
            }
            if (I.controls.next) {
                I.controls.next.remove()
            }
            if (I.controls.prev) {
                I.controls.prev.remove()
            }
            if (I.pagerEl) {
                I.pagerEl.remove()
            }
            a(".bx-caption", this).remove();
            if (I.controls.autoEl) {
                I.controls.autoEl.remove()
            }
            clearInterval(I.interval);
            if (I.settings.responsive) {
                a(window).unbind("resize", E)
            }
        };
        n.reloadSlider = function (R) {
            if (R != undefined) {
                C = R
            }
            n.destroySlider();
            u()
        };
        u();
        return this
    }
})(jQuery);

function show_duantu_tab() {
    var c = window.location.hash, d = $(".suggest_poitab"), b = d.find(".journey"), a = $(".card_list");
    if (c === "#duantu" && b.length > 0) {
        d.find("li").removeClass("current");
        b.parent().addClass("current");
        a.find("div").hide();
        a.find("#poi_4").show();
        var e = $(".suggest_poitab").offset().top - 50;
        $("body,html").animate({scrollTop: e}, 500)
    }
}

$(function () {
    $("#landlordtab").carouselSlide();
    var c = $(".helpbox"), d = 300, b = null;
    c.hover(function () {
        $(this).children(".glistbox").show();
        window.clearTimeout(b)
    }, function () {
        var f = $(this);
        b = window.setTimeout(function () {
            f.children(".glistbox").fadeOut("slow")
        }, d)
    });
    $(".landlordcon dt").hover(function () {
        $(this).children(".btn_ask,.btn_attention").show()
    }, function () {
        $(this).children(".btn_ask,.btn_attention").hide()
    });
    $(".c_playbox .f_14[data-cityId]").click(function () {
        var f = $(this).attr("data-cityId") || 2;
        INTERFACE.travelPlaySearch(f)
    });
    $(".journaltab a").click(function () {
        var f = $(this).parents(".normalbox").offset().top - $(".ttd_topnav").height();
        $("body,html").animate({scrollTop: f}, 800)
    });
    $(".piclist").hover(function () {
        $(this).addClass("sinhoverbg")
    }, function () {
        $(this).removeClass("sinhoverbg")
    });
    $(".card_list").on("mouseenter", ".all_link", function () {
        $(this).parent().addClass("current")
    }).on("mouseleave", ".all_link", function () {
        $(this).parent().removeClass("current")
    });
    $(".slide_show").carouselSlide();
    $(".suggest_poitab li").mouseenter(function () {
        $(this).siblings(".current").removeClass("current");
        $(this).addClass("current");
        $(".card_list").children().hide();
        var f = $(this).attr("data-id");
        $(f).show();
        setTimeout(e, 300)
    });

    function e() {
        if ($(".suggest_poitab li[data-id='#poi_1']").hasClass("current")) {
            var j = [];
            var g = 0;
            for (; g < mapCoords.length; g++) {
                j.push(new BMap.Point(mapCoords[g].Lng, mapCoords[g].Lat))
            }
            var k = staticMap.getViewport(j);
            var h = k.zoom;
            var f = k.center;
            staticMap.centerAndZoom(f, h);
            staticMap.setZoom()
        }
    }

    $(".card_list > div").eq(0).find("img").lazyload();
    $(".journeyswrap .journeys_v2box").hover(function () {
        $(this).addClass("jv2boxborder")
    }, function () {
        $(this).removeClass("jv2boxborder")
    });

    function a(f) {
        var i, j = $.trim(f.html()), g = f.attr("profileurlno"), h = f.attr("sessionprofileurlno");
        if (j == "关注") {
            i = "/members/ajax/addfriend.ashx";
            f.html("取消关注")
        } else {
            i = "/members/ajax/cancelfriend.ashx?type=1";
            f.html("关注")
        }
        $.get(i, {profileurlno: g, sessionprofileurlno: h, rnd: +new Date()})
    }

    $(".btn_attention").on("click", function (f) {
        if ($(this).hasClass("a_popup_login")) {
            return
        }
        a($(this))
    });
    $tabs(".journaltab li", ".journalslist");
    $(".guesslike_list li").hover(function () {
        $(this).addClass("current")
    }, function () {
        $(this).removeClass("current")
    });
    $("body").on("click", ".guesslike_list", function () {
        GS.tracklog("you.ttd.district.basic.online", "")
    })
});
var cQuery = {};
$(function () {
    var a = $("<div></div>");
    $(document.body).append(a);
    var b = function (e, d) {
        var f = this, c = $(e);
        this.$element = c;
        this.oldValue = "";
        this.alignRight = d.alignRight || false;
        this.title = d.title || "支持中文/拼音/简拼输";
        this.drawHtml = d.drawHtml;
        this.eventControl = d.eventControl || function () {
        };
        this.addBox();
        c.keyup(function () {
            if ($(this).val() != f.oldValue) {
                f.blur()
            }
        });
        c.click(function (g) {
            f.focus();
            f.$element.select();
            g.stopPropagation()
        });
        $(document).click(function () {
            f.blur()
        });
        $(window).resize(function () {
            f.blur()
        })
    };
    b.prototype = {
        container: "",
        tabContainer: "",
        hasHtml: false,
        selectHtml: '<div class="city_select_popup"><a class="close" href="javascript:;">×</a><p class="title"></p><ul class="tab_box"></ul></div>',
        addBox: function () {
            this.container = $(this.selectHtml);
            this.tabContainer = this.container.find(".tab_box");
            a.append(this.container);
            this.container.find(".title").text(this.title)
        },
        focus: function () {
            this.$element.focus();
            $(".city_select_popup").hide();
            $(".city_suggest_popup").hide();
            this.oldValue = this.$element.val();
            if (this.hasHtml) {
                this.setOffset();
                this.container.show()
            } else {
                this.displayPopup()
            }
        },
        blur: function () {
            this.container.hide()
        },
        setOffset: function () {
            var e = this.$element.offset(), c = this.$element.outerHeight() - 1, d = e.left;
            if (this.alignRight) {
                d = d + this.$element.outerWidth() - this.container.outerWidth()
            }
            this.container.css({top: e.top + c, left: d})
        },
        displayPopup: function () {
            var c = this;
            this.drawHtml(function (d) {
                c.container.find(".city_item").remove();
                c.tabContainer.empty();
                c.container.append(d.html);
                c.tabContainer.append(d.tabHtml);
                c.setOffset();
                c.addEventListener();
                c.eventControl(c);
                c.container.show();
                c.hasHtml = true
            }, c)
        },
        addEventListener: function () {
            var e = this, d = this.tabContainer, c = this.container.find(".city_item");
            this.container.click(function (f) {
                f.stopPropagation()
            });
            this.container.find(".close").click(function (f) {
                e.blur();
                f.stopPropagation()
            });
            d.find("li").on("click", function (f) {
                var g = $(this).index();
                d.find("li").removeClass("current");
                $(this).addClass("current");
                c.removeClass("current");
                c.eq(g).addClass("current");
                f.stopPropagation()
            })
        }
    };
    $.fn.citySelect = function (c) {
        return this.each(function () {
            new b(this, c)
        })
    }
});
var cQuery = {};
$(function () {
    var a = $("<div></div>");
    $(document.body).append(a);
    var b = function (e, d) {
        var f = this, c = $(e);
        this.$element = c;
        this.container = "";
        this.firstData = null;
        this.placeholder = d.placeholder || "";
        this.formatData = d.formatData;
        this.eventControl = d.eventControl || function () {
        };
        this.cannotToCache = d.cannotToCache || false;
        this.gos = 0;
        this.oldValue = c.val();
        this.pageNum = 0;
        this.totlePage = 1;
        this.cache = {};
        this.addBox();
        this.timer = null;
        c.keyup(function (g) {
            f.onKeyup(g)
        });
        c.click(function (g) {
            f.oldValue = f.$element.val();
            g.stopPropagation()
        });
        $(document).click(function () {
            f.hidePopup()
        });
        $(window).resize(function () {
            f.hidePopup()
        })
    };
    b.prototype = {
        kCode: {ENTER: 13, UP: 38, DOWN: 40, ESC: 27},
        perPageNum: 10,
        suggestHtml: '<div class="city_suggest_popup"></div>',
        addBox: function () {
            var c = this;
            this.container = $(this.suggestHtml);
            a.append(this.container);
            this.container.click(function (d) {
                c.$element.focus();
                d.stopPropagation()
            })
        },
        addToCache: function (d, c) {
            if (!this.cannotToCache && c.length > 0) {
                this.cache[d] = [];
                this.cache[d] = c
            }
        },
        checkCache: function (c) {
            if (this.cache[c]) {
                return true
            }
            return false
        },
        setOffset: function () {
            var d = this.$element.offset(), c = this.$element.outerHeight() - 1;
            this.container.css({top: d.top + c, left: d.left})
        },
        checkValue: function () {
            if (this.$element.val() == "" || this.$element.val() == this.placeholder) {
                this.hidePopup()
            }
            if (this.$element.val() != this.oldValue) {
                var c = this;

                function d() {
                    c.showPopup();
                    clearTimeout(c.timer);
                    c.timer = null
                }

                if (!c.timer) {
                    c.timer = setTimeout(d, 200)
                }
            }
            this.oldValue = this.$element.val()
        },
        onKeyup: function (c) {
            switch (c.keyCode) {
                case this.kCode.UP:
                    var d = this.container.find(".city_suggest_item");
                    if (d.length > 1) {
                        this.gos--;
                        if (this.gos == -1) {
                            this.gos = d.length - 1
                        }
                        this.selected(d.eq(this.gos))
                    } else {
                        if (d.length == 1) {
                            this.selected(d.eq(0))
                        }
                    }
                    break;
                case this.kCode.DOWN:
                    var d = this.container.find(".city_suggest_item");
                    if (d.length > 1) {
                        this.gos++;
                        if (this.gos == 1 && !d.hasClass("current")) {
                            this.gos = 0
                        }
                        if (this.gos == d.length) {
                            this.gos = 0
                        }
                        this.selected(d.eq(this.gos))
                    } else {
                        if (d.length == 1) {
                            this.selected(d.eq(0))
                        }
                    }
                    break;
                case this.kCode.ENTER:
                    this.container.find(".city_suggest_item").eq(this.gos).trigger("click");
                    break;
                case this.kCode.ESC:
                    this.$element.val("");
                    this.hidePopup();
                    break;
                default:
                    this.checkValue()
            }
        },
        selected: function (c) {
            this.container.find(".city_suggest_item").removeClass("current");
            c.addClass("current")
        },
        hidePopup: function () {
            clearTimeout(this.timer);
            this.timer = null;
            this.container.hide()
        },
        showPopup: function (c) {
            var d = this, c = this.$element.val();
            if (c) {
                if (this.checkCache(c)) {
                    this.displayPopup(this.cache[c])
                } else {
                    d.formatData(c, function (e) {
                        d.addToCache(c, e);
                        d.displayPopup(e)
                    })
                }
            }
        },
        displayPopup: function (c) {
            this.pageNum = 0;
            this.drawHtml(c);
            this.drawPageHtml();
            this.setOffset();
            this.eventControl(this);
            this.container.show();
            this.pageControl(c)
        },
        drawHtml: function (f) {
            this.container.find("div").not(".city_suggest_pager").remove();
            this.gos = 0;
            var h = "", k = f.length, o = Math.ceil(k / this.perPageNum), j = (this.pageNum * this.perPageNum),
                g = (this.pageNum + 1) * this.perPageNum;
            g = g > k ? k : g;
            this.totlePage = o;
            if (k > 0) {
                this.firstData = f[0];
                for (; j < g; j++) {
                    var e = f[j], n = e.showRight;
                    if (!n) {
                        if (e.noAirPort) {
                            h += '<div class="city_suggest_noAir" data="' + e.data + '">' + e.text + '<span class="orange">&nbsp;-该城市没有机场</span></div>'
                        } else {
                            h += '<div class="city_suggest_item" data="' + e.data + '">' + e.text + "</div>"
                        }
                        if (e.airPort && e.airPort.length > 0) {
                            var l = 0, c = e.airPort.length;
                            for (; l < c; l++) {
                                h += '<div class="city_suggest_item gray" data="' + e.data + '" data-airPort="' + e.airPort[l] + '">' + e.airPortText[l] + "</div>"
                            }
                        }
                    } else {
                        h += '<div class="city_suggest_item" data="' + e.data + '"><span class="fl">' + e.text + '</span><span class="fr">' + e.right + "</span></div>"
                    }
                }
            } else {
                this.firstData = "";
                h += '<div class="city_suggest_null">对不起，没有找到匹配的关键字</div>'
            }
            this.container.prepend(h)
        },
        drawPageHtml: function () {
            this.container.find(".city_suggest_pager").remove();
            var d = "", e = this.totlePage, c = 0;
            if (e > 1) {
                for (; c < e; c++) {
                    if (c === 0) {
                        d += '<a class="page_num active" href="javascript:;">1</a>'
                    } else {
                        if (c < 3) {
                            d += '<a class="page_num" href="javascript:;">' + (c + 1) + "</a>"
                        } else {
                            d += '<a class="page_num" href="javascript:;" style="display: none;">' + (c + 1) + "</a>"
                        }
                    }
                }
                d = '<a class="gray page_prev" href="javascript:;">&lt;</a>' + d + '<a class="page_next" href="javascript:;">&gt;</a>';
                d = '<div class="city_suggest_pager">' + d + "</div>"
            }
            this.container.append(d)
        },
        pageControl: function (d) {
            var e = this, c = this.container.find(".city_suggest_pager");
            c.find("a").click(function (j) {
                var i = $(this), h = c.find(".page_prev"), f = c.find(".page_next"), g = c.find(".page_num"),
                    m = e.pageNum, o = e.totlePage;
                if (!i.hasClass("gray") && !i.hasClass("active")) {
                    if (i.hasClass("page_prev")) {
                        m = m - 1;
                        f.removeClass("gray")
                    } else {
                        if (i.hasClass("page_next")) {
                            m = m + 1;
                            h.removeClass("gray")
                        } else {
                            var l = parseInt(i.text(), 10);
                            m = l - 1
                        }
                    }
                    var n = m - 1, k = m + 1;
                    if (n <= 0) {
                        k = 2
                    }
                    if (k >= o) {
                        n = o - 3
                    }
                    g.each(function (p) {
                        if (p >= n && p <= k) {
                            $(this).show()
                        } else {
                            $(this).hide()
                        }
                    });
                    if (m === 0) {
                        h.addClass("gray");
                        f.removeClass("gray")
                    } else {
                        if (m === o - 1) {
                            f.addClass("gray");
                            h.removeClass("gray")
                        } else {
                            h.removeClass("gray");
                            f.removeClass("gray")
                        }
                    }
                    c.find("a.page_num").removeClass("active").eq(m).addClass("active");
                    e.pageNum = m;
                    e.drawHtml(d);
                    e.eventControl(e)
                }
            })
        }
    };
    $.fn.citySuggest = function (c) {
        return this.each(function () {
            new b(this, c)
        })
    }
});
var CitySuggestFilter = function (a) {
    this._init(a)
};
CitySuggestFilter.prototype = {
    sort: ["^0$", "^1$", "^3+$", "^0", "^1", "^3+", "0", "1", "3+"],
    _colsHash: null,
    _displayHash: {left: 0, right: 1, text: 1},
    message: {sort: []},
    _init: function (a) {
        a = a || {};
        var b = $.type(a.sort);
        if (a.sort && b == "array" || b == "function") {
            this.sort = a.sort;
            this._sortReString = null
        }
        this.sortFunction = a.sortFunction || this.sortFunction;
        if (a.message) {
            this.message = $.extend(true, {}, this.message, a.message)
        }
        this._colsHash = a._colsHash || this._colsHash;
        if (a._displayHash) {
            this._displayHash = $.extend(true, {}, this._displayHash, a._displayHash)
        }
    },
    sortFunction: function (c, d) {
        if (c.left > d.left) {
            return 1
        } else {
            if (c.left == d.left) {
                return 0
            } else {
                return -1
            }
        }
    },
    _initSort: function () {
        if (this._sortReString) {
            return
        }
        var g = this._sortReString = {accurate: [], vague: []};
        var c = 0, d = 0;
        switch ($.type(this.sort)) {
            case"array":
                for (var b = 0, e = this.sort.length; b < e; b++) {
                    var a = this.sort[b].match(/^(\^?)([^\^\$\|@\r\n\+]+)(\+?)(\$?)$/);
                    if (a) {
                        if (/^\d$/.test(a[2])) {
                            a[2] = parseInt(a[2], 10)
                        } else {
                            if (a[2] in this._colsHash) {
                                a[2] = this._colsHash[a[2]]
                            } else {
                                continue
                            }
                        }
                        var f = (+a[2] || a[3]) ? "([^\\|@]*\\|){" + a[2] + (a[3] ? "," : "") + "}" : "";
                        g.accurate[c++] = ["@(" + f, "", "(\\|[^@]*)?)(?=@)"];
                        g.vague[d++] = ["@(" + f + (a[1] ? "" : "[^\\|@]*"), "", (a[4] ? "(\\|[^@]*)?" : "[^@]*") + ")(?=@)"]
                    }
                }
                break;
            case"function":
                break;
            default:
                break
        }
    },
    getfilterData: function (b, t, e, f) {
        this._initSort();
        var a = this, m = [], h = 0, c = b;
        switch ($.type(this.sort)) {
            case"array":
                var r = this._sortReString[e ? "accurate" : "vague"];
                var s = t;
                var o = $.type(this.message.sort) == "array" ? this.message.sort : [];
                for (var d = 0, p = r.length; d < p; d++) {
                    r[d][1] = s;
                    var q = new RegExp(r[d].join(""), "gi");
                    var g = [], j = 0;
                    c = c.replace(q, function (i, k) {
                        var l = k.split("|");
                        var n = {
                            left: l[a._displayHash.left] || "",
                            right: l[a._displayHash.right] || "",
                            text: l[a._displayHash.text] || "",
                            data: k
                        };
                        g[j++] = n;
                        return ""
                    });
                    if (j) {
                        g.sort(this.sortFunction);
                        if (f) {
                            return g[0].data
                        }
                        if (o[d]) {
                            g.unshift($.tmpl.render(o[d], {val: t, items: g}))
                        }
                        m[h++] = g
                    }
                }
                if (f) {
                    return false
                }
                break;
            case"function":
                g = this.sort(b, t, e, f);
                if (f) {
                    if (g.length) {
                        return g[0].data
                    } else {
                        return false
                    }
                }
                m[h++] = g;
                break;
            default:
                return false;
                break
        }
        m = Array.prototype.concat.apply([], m);
        return m
    }
};

function ShowWantWentCommAjax() {
    ShowGowant()
}

function ShowGowant() {
    var a = jQuery("#wantClickID").attr("data_type");
    var b = jQuery("#wantClickID").attr("dataresource-cat");
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowGowant",
        type: "POST",
        async: true,
        data: {Resource: b, pageType: a, rank: Math.random()},
        success: function (c) {
            if (c.HasWented) {
                $("#wentClickID").addClass("current")
            }
            if (c.HasWanted) {
                $("#wantClickID").addClass("current")
            }
            if (c.WentTimes) {
                $("#emWentValueID").text(c.WentTimes.toString())
            }
            if (c.WantTimes) {
                $("#emWantValueID").text(c.WantTimes.toString())
            }
        },
        error: function () {
        }
    })
}

function ClickWent() {
    var d = jQuery("#wentClickID").attr("data_type");
    var c = jQuery("#wentClickID").attr("dataresource-cat");
    var b = jQuery("#putDistrictId").val();
    var a = {type: 1, pageType: d, resource: c, district: b, rank: Math.random()};
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAddDistrictWent",
        type: "POST",
        async: true,
        data: a,
        success: function (e) {
            ShowGowant();
            $("#emWentValueID").html(Number($("#emWentValueID").html()) + 1)
        },
        error: function () {
        }
    })
}

function ClickWant() {
    var d = jQuery("#wantClickID").attr("data_type");
    var c = jQuery("#wantClickID").attr("dataresource-cat");
    var b = jQuery("#putDistrictId").val();
    var a = {type: 2, pageType: d, resource: c, district: b, rank: Math.random()};
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAddDistrictWent",
        type: "POST",
        async: true,
        data: a,
        success: function (e) {
            ShowGowant();
            $("#emWantValueID").html(Number($("#emWantValueID").html()) + 1)
        },
        error: function () {
        }
    })
}

function ShowGuideBook() {
    var a = $("#pdfDistrictId").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowGuideBook",
        type: "POST",
        async: true,
        data: {districtId: a, topNum: "5", type: 1, rank: Math.random()},
        success: function (e) {
            if (e.length > 0) {
                var f = [];
                var g = [];
                var b = 0;
                $.each(e, function (c, h) {
                    if (h) {
                        if (c == 0) {
                            f.push(' <li data-target="#myCarousel" data-slide-to="' + c + '" class="active"></li>');
                            g.push(' <div class="item active">');
                            b += 1
                        } else {
                            f.push(' <li data-target="#myCarousel" data-slide-to="' + c + '" ></li>');
                            g.push(' <div class="item">');
                            b += 1
                        }
                        g.push('<h4 class="ellipsis"><a target="_blank" title="' + h.Name + '攻略" href="' + h.pdfurl + '"> ' + h.SubName + "攻略</a></h4>");
                        g.push('<a href="' + h.pdfurl + '" target="_blank" class="guidepic"><img width=\'55\' height=\'83\' src="' + h.CoverPicUrl + '"></a>');
                        g.push('  <dl class="info">');
                        g.push("   <dd>更新：" + h.updateTime + "</dd>");
                        g.push("    <dd>下载：" + h.DownloadCount + "</dd>");
                        g.push('    <dd><a href="' + h.pdfurl + '" target="_blank" class="gsn-btn-20">免费下载</a></dd></dl></div>')
                    }
                });
                if (f == "") {
                    $("#myCarousel").hide()
                } else {
                    $("#myCarousel").show();
                    $("#carousel-indicatorsID").html(f.join(""));
                    $("#carousel-innerID").html(g.join(""));
                    $("#myCarousel").carousel();
                    var d = $("#carousel-indicatorsID").width() / 2;
                    $("#carousel-indicatorsID").css({"margin-left": -d})
                }
                if (b <= 1) {
                    $("#carousel-indicatorsID").hide()
                }
                if (b < 5) {
                    $(".smore_btn").hide()
                }
            } else {
                $("#myCarousel").hide()
            }
        },
        error: function () {
            $("#myCarousel").hide()
        }
    })
}

function ShowGuideWeather() {
    ShowGuideWeatherAjax($("#putDistrictId").val())
}

function ShowGuideWeatherAjax(a) {
    $.ajax({
        url: "/Destinationsite/SharedComm/GetGuideWeather",
        type: "POST",
        async: true,
        dataType: "text",
        data: {districtId: a, rank: Math.random()},
        success: function (b) {
            if (b != "") {
                $(".lastday").html(b);
                $("#weathertabId").show();
                $("#gs_tianqiId").show()
            } else {
                $("#weathertabId").hide();
                $("#gs_tianqiId").hide()
            }
        },
        error: function () {
        }
    })
}

function showSoaHotelLocationZone(b) {
    var a = {City: b, rank: Math.random()};
    jQuery.ajax({
        url: "/Destinationsite/SharedComm/SoaHotelLocationZone",
        type: "POST",
        dataType: "text",
        data: a,
        error: function (c) {
        },
        success: function (c) {
            $(".keyword_search").html(c);
            $(".address_hot_abb2 li").click(function () {
                var d = $(this).index(".address_hot_abb2 > li");
                $(this).addClass("hot_selected2").siblings().removeClass("hot_selected2");
                $(".area_list").find("dd").hide().eq(d).show()
            });
            $("#hotel_position").click(function () {
                var d = $(".keyword_search");
                var e = $(this);
                d.show();
                $(document).click(function (f) {
                    f = f || window.event;
                    if (f.target.nodeName == "BODY" || f.target.nodeName == "FROM") {
                        d.hide()
                    }
                })
            });
            $(".keyword_search dl.area_list").on("click", "a", function (g) {
                var f = $(this).attr("data") || $(this).attr("metrodata");
                var h = f;
                if (f != "") {
                    var d = h.split("|");
                    $("#hotel_position").val(d[1]);
                    $("#txthideLocationZoneType").val(d[3]);
                    $("#txthidenID").val(d[2])
                }
                $(".keyword_search").hide()
            })
        }
    })
}

function ajaxSearchHotelList() {
    if (jQuery("#txtCheckIn").val() == "") {
        alert("请输入入住日期");
        return false
    }
    if (jQuery("#txtCheckOut").val() == "") {
        alert("请输入退房日期");
        return false
    }
    var d = new Date(Date.parse(jQuery("#txtCheckIn").val()));
    var e = new Date(Date.parse(jQuery("#txtCheckOut").val()));
    if (d >= e) {
        alert("退房日期应大于入住日期");
        return false
    }
    var j = 0;
    if (jQuery(".select-txt").html() == "") {
        j = 0
    }
    if (jQuery(".select-txt").html() == "不限") {
        j = 0
    }
    if (jQuery(".select-txt").html() == "五星级/豪华") {
        j = 5
    }
    if (jQuery(".select-txt").html() == "四星级/高档") {
        j = 4
    }
    if (jQuery(".select-txt").html() == "三星级/舒适") {
        j = 3
    }
    if (jQuery(".select-txt").html() == "二星级及以下") {
        j = 2
    }
    var c = jQuery("#txthidencityid").val();
    var k = jQuery("#txthideLocationZoneType").val();
    var l = jQuery("#txthidenID").val();
    var g = jQuery("#txtKeyword").val();
    var a = jQuery("#txtCheckIn").val();
    var b = jQuery("#txtCheckOut").val();
    var h = jQuery("#txthideninchina").val();
    var f = jQuery("#txthidenename").val().toLowerCase();
    f = f ? f.replace(/.*[\u4e00-\u9fa5]+.*$/gm, "lists").replace(/\s/gm, "").replace(/[^a-z0-9]*/gmi, "") : "ename";
    if (c > 0) {
        if (h) {
            var i = "http://hotels.ctrip.com/hotel/" + f + "" + c + "/";
            if (g != "") {
                if (j != 0) {
                    i += "star" + j
                }
                i += "/k1" + g
            } else {
                if (k != "") {
                    i += k + l
                }
                if (j != 0) {
                    i += "star" + j
                }
            }
        } else {
            var i = "http://hotels.ctrip.com/international/" + f + "" + c + "/";
            if (g != "") {
                if (j != 0) {
                    i += "star" + j
                }
                i += "/k1" + g
            } else {
                if (k != "") {
                    i += k + l
                }
                if (j != 0) {
                    i += "star" + j
                }
            }
        }
        document.forms[0].action = i;
        document.forms[0].target = "_blank";
        document.forms[0].method = "post";
        document.forms[0].submit()
    } else {
        window.open("http://hotels.ctrip.com/")
    }
}

function viewCtripHotelMap(a, b) {
    if (a == 0) {
        window.open("http://hotels.ctrip.com/")
    } else {
        if (jQuery("#txthideninchina").val()) {
            window.open("http://hotels.ctrip.com/hotel/" + b + "" + a + "/map")
        } else {
            window.open("http://hotels.ctrip.com/international/maplist/" + b + "" + a + "")
        }
    }
}

function ShowNearHotel() {
    var a = $("#CityID").val();
    var b = $("#putDistrictId").val();
    var c = $("#Lat").val();
    var d = $("#Lon").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/GetNearHotel",
        type: "POST",
        async: true,
        dataType: "text",
        data: {City: a, District: b, Lat: c, Lon: d, rank: Math.random()},
        success: function (e) {
            if (e == "") {
                $("#dest_NearHotel").hide()
            } else {
                $("#dest_NearHotel").html(e)
            }
        },
        error: function () {
            $("#dest_NearHotel").hide()
        }
    })
}

function ShowCityHotelList() {
    var a = $("#txthidencityid").val();
    var b = $("#txthidendistrictid").val();
    var c = $("#txthideninchina").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowCityHotelList",
        type: "POST",
        async: true,
        dataType: "text",
        data: {City: a, District: b, InChina: c, rank: Math.random()},
        success: function (d) {
            if (d == "") {
                $("#cityHotelListID").hide()
            } else {
                $("#cityHotelListID").html(d)
            }
        },
        error: function () {
            $("#cityHotelListID").hide()
        }
    })
}

function GetExpertPartialView() {
    var a = $("#txtDistrictId").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/GetExpertPartialView",
        type: "POST",
        async: true,
        dataType: "text",
        data: {district: a, rank: Math.random()},
        success: function (b) {
            if (b == "") {
                $("#destexpertId").hide()
            } else {
                $("#destexpertId").html(b)
            }
        },
        error: function () {
            $("#destexpertId").hide()
        }
    })
}

function ShowAroundList() {
    var a = $("#putDistrictId").val();
    var b = $("#JourUrl").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAroundList",
        type: "POST",
        async: true,
        dataType: "text",
        data: {district: a, rank: Math.random()},
        success: function (c) {
            if (c != "") {
                $("#tourListId").html(c);
                $("#aroundSpanId").show()
            } else {
                $("#tourListId").html('<div class="gs_list_load"><i class="listface"></i>这里暂时没有周边游信息，你可以<a target="_blank" href="http://vacations.ctrip.com/domestic/">查看更多</a></p></div>')
            }
        },
        error: function () {
            $("#tourListId").html('<div class="gs_list_load"><i class="listface"></i>这里暂时没有周边游信息，你可以<a target="_blank" href="http://vacations.ctrip.com/domestic/">查看更多</a></p></div>')
        }
    })
}

$(function () {
    $(".ttd_topnav").setfixed({top: "-5px", width: "100%"});
    if ($(".link_share").length > 0) {
        $(".link_share").gsbaseshare({requestFn: INTERFACE.shareRequestFn})
    }
    if ($(".city_sfind input[type='text']").length !== 0) {
        $(".city_sfind input[type='text']").placeholder()
    }
    if ($(".sightsearch input[type='text']").length !== 0) {
        $(".sightsearch input[type='text']").placeholder()
    }
    $(".dest_toptitle .des_icon_want a").hover(function () {
        if (!$(this).hasClass("current")) {
            $(this).siblings("p").find(".textcolor").html("我想去")
        }
    }, function () {
        if (!$(this).hasClass("current")) {
            $(this).siblings("p").find(".textcolor").html("想去")
        }
    });
    $(".dest_toptitle .des_icon_want a").click(function () {
        var b = $(this);
        if (!b.hasClass("current") && !b.hasClass("a_popup_login")) {
            $(this).siblings("p").find(".textcolor").html("我想去");
            var c = wantBeen(this);
            INTERFACE.wantRequestFn(c)
        }
    });
    $(".dest_toptitle .des_icon_been a").hover(function () {
        if (!$(this).hasClass("current")) {
            $(this).siblings("p").find(".textcolor").html("我去过")
        }
    }, function () {
        if (!$(this).hasClass("current")) {
            $(this).siblings("p").find(".textcolor").html("去过")
        }
    });
    $(".dest_toptitle .des_icon_been a").click(function () {
        var b = $(this);
        if (!b.hasClass("current") && !b.hasClass("a_popup_login")) {
            $(this).siblings("p").find(".textcolor").html("我去过");
            var c = wantBeen(this);
            INTERFACE.beenRequestFn(c)
        }
    });
    if ($("#myCarousel").length !== 0) {
        $("#myCarousel").carousel()
    }
    if ($("#detailCarousel").length !== 0) {
        $("#detailCarousel").carousel()
    }
    if (!GS.ismoblie) {
        $("#WeaTher").mouseenter(function () {
            var b = $(this), d = b.offset().top - 11, c = b.offset().left - 47;
            $(".hoverweather").css({position: "absolute", top: d, left: c, display: "block", "z-index": "22"})
        });
        $(".hoverweather").mouseleave(function () {
            $(".hoverweather").hide()
        })
    } else {
        $(".hoverweather span.arrow").remove()
    }
    $(".ttd_topnav .gs_newicon").parent().css("z-index", "1");
    $(".cityseojs .fr").toggle(function () {
        $(this).html("-收起");
        $(this).parent().next().css("height", "auto")
    }, function () {
        $(this).html("+更多");
        $(this).parent().next().css("height", "44px")
    });
    var a = $(".ttd_guide_nav").height();
    $(".ttd_topnav ul li.ttd_guide_nav").hover(function () {
        $(this).addClass("ttd_nav_cur");
        $(this).find(".ttd_guide_link").addClass("ttd_guide_cur");
        $(this).find(".corner_down_icon").addClass("corner_down_cur");
        $(this).find(".ttd_guide_uplayer").css("top", a).show()
    }, function () {
        $(this).removeClass("ttd_nav_cur");
        $(this).find(".ttd_guide_link").removeClass("ttd_guide_cur");
        $(this).find(".corner_down_icon").removeClass("corner_down_cur");
        $(this).find(".ttd_guide_uplayer").hide()
    })
});

function wantBeen(d) {
    var b = $(d), a = b.siblings("p").find("em"), f = b.offset(), g = f.top, e = f.left + 40,
        c = parseInt(a.text(), 10), h = +1;
    c = isNaN(c) ? 0 : c;
    c = c < 0 ? 0 : c;
    if ($("#gs_addone_1").length === 0) {
        $("body").append($('<div id="gs_addone_1" class="gs_addone_1">+1</div>'))
    }
    if (b.hasClass("current")) {
        c--;
        h = -1;
        b.removeClass("current");
        $("#gs_addone_1").text("-1")
    } else {
        c++;
        h = 1;
        b.addClass("current");
        $("#gs_addone_1").text("+1")
    }
    $("#gs_addone_1").css({opacity: 1, top: g, left: e, display: "block", "font-size": "18px"}).animate({
        top: g - 30,
        opacity: 0
    }, "slow", function () {
        $("#gs_addone_1").text("+1")
    });
    return h
}

function $tabs(c, b, a) {
    $(c).click(function () {
        if ($(this).parent().hasClass("scroll-top")) {
            var d = $(".journalbtn_t").offset().top;
            $("body,html").animate({scrollTop: d}, 500)
        }
        $(this).addClass("current").siblings().removeClass("current");
        $(b).hide().eq($(c).index(this)).show();
        typeof a == "function" && a($(this))
    });
    $(".journalslistv1 .journal-item").hover(function () {
        $(this).addClass("itemhover")
    }, function () {
        $(this).removeClass("itemhover")
    })
};var mapControlClass = null;

function initMaper() {
    mapControlClass = new MapControlClass({inChina: INTERFACE.inChina, mapInner: "detailMapInner", scrollWheel: false});
    mapControlClass.init(INTERFACE.poiData);
    if (INTERFACE.nearbyType == "hotel") {
        $(".topchk .group .chkhotel").attr("checked", true);
        $(".topchk .group .chkhotel").trigger("change")
    } else {
        if (INTERFACE.nearbyType == "attractions") {
            $(".topchk .group .chkattractions").attr("checked", true);
            $(".topchk .group .chkattractions").trigger("change")
        } else {
            if (INTERFACE.nearbyType == "restaurant") {
                $(".topchk .group .chkrestaurant").attr("checked", true);
                $(".topchk .group .chkrestaurant").trigger("change")
            }
        }
    }
}

function loadScript(b, a) {
    var c = document.createElement("script");
    c.type = "text/javascript";
    if (a != "") {
        b += "&callback=" + a
    }
    c.src = b;
    document.body.appendChild(c)
}

$(function () {
    if (INTERFACE.inChina) {
        var a = "http://webapi.amap.com/maps?v=1.2&key=07ce09b7bf3881b654ee247c612377e9";
        loadScript(a, "initMaper")
    } else {
        var a = "http://ditu.google.cn/maps/api/js?v=3&sensor=false&key=AIzaSyD9FaRWN46k9YXmEUfS7HIyC_fyCFU2gyo";
        loadScript(a, "initMaper")
    }
    $(".topchk .group").find("input[type='checkbox']").attr("checked", false);
    $(".topchk .group label").click(function () {
        var b = $(this).siblings("input[type='checkbox']");
        if (b.attr("checked")) {
            b.attr("checked", false)
        } else {
            b.attr("checked", true)
        }
        b.trigger("change")
    });
    $(".map_side .side_arrow").click(function () {
        var b = $(this).parent(), c = parseInt(b.css("left"), 10);
        if (c == 0) {
            b.animate({left: "-181px"}, 150);
            $(this).find("i").removeClass("icon_left_arrow").addClass("icon_right_arrow")
        } else {
            b.animate({left: "0px"}, 150);
            $(this).find("i").removeClass("icon_right_arrow").addClass("icon_left_arrow")
        }
    });
    if (INTERFACE.nearbyType == "hotel") {
        init("hotel", $(".map_box.hotel"))
    } else {
        if (INTERFACE.nearbyType == "attractions") {
            init("attractions", $(".map_box.attractions"))
        } else {
            if (INTERFACE.nearbyType == "restaurant") {
                init("restaurant", $(".map_box.restaurant"))
            }
        }
    }
});

function init(m, a) {
    var j = 5, d = null, i = 0, h = 0, l = 1, b = a.find(".nearby_box"), f = INTERFACE.hotelData || [],
        c = INTERFACE.attractionsData || [], k = INTERFACE.restaurantData || [];
    if (m == "hotel") {
        d = f
    } else {
        if (m == "attractions") {
            d = c
        } else {
            if (m == "restaurant") {
                d = k
            }
        }
    }
    h = d.length;
    l = Math.ceil(h / j);

    function e() {
        var r = (i * 5), p = (i + 1) * 5, q = [], s = 0;
        p = p > h ? h : p;
        for (; r < p; r++) {
            s++;
            var n = d[r], t = n.name, v = n.priceShowType || 0, x = n.score || "&nbsp;", o = n.distance || "&nbsp;",
                u = n.price || "0", w = "";
            if (m != "restaurant") {
                v = parseInt(v, 10);
                switch (v) {
                    case 0:
                        w = '<span class="price">¥<strong>' + u + "</strong>起</span>";
                        break;
                    case 1:
                        w = '<span class="price">' + u + "</span>";
                        break;
                    case 2:
                        w = "";
                        break
                }
            } else {
                w = '<span style="color: #666;">人均 ¥ ' + u + "</span>"
            }
            q.push("<div>");
            q.push('	<a class="item" href="' + n.href + '" title="' + t + '" data-id="' + n.id + '" target="_blank">');
            q.push('		<i class="icon_marker">' + s + "</i>");
            q.push("		<dl>");
            q.push("			<dt>" + t + "</dt>");
            q.push("			<dd>");
            q.push('				<span class="score">' + x + "</span>");
            q.push('				<span class="distance">' + o + "</span>");
            q.push("			</dd>");
            q.push("			<dd>");
            q.push(w);
            q.push("			</dd>");
            q.push("		</dl>");
            q.push("	</a>");
            q.push("</div>")
        }
        b.find("div").not(".nearby_pager").remove();
        b.prepend(q.join(""))
    }

    function g() {
        if (h < 1) {
            var o = '<div class="nearby_null fs_12">啊哦，这附近没有发现酒店。</div>';
            if (b.parents(".map_box").hasClass("attractions")) {
                o = '<div class="nearby_null fs_12">啊哦，这附近没别的景点。</div>'
            } else {
                if (b.parents(".map_box").hasClass("restaurant")) {
                    o = '<div class="nearby_null fs_12">啊哦，这附近没有发现餐馆。</div>'
                }
            }
            b.append(o);
            return
        }
        var p = 0, o = "";
        for (; p < l; p++) {
            if (p === 0) {
                o += '<a class="page_num active" href="javascript:;">1</a>'
            } else {
                if (p < 5) {
                    o += '<a class="page_num" href="javascript:;">' + (p + 1) + "</a>"
                } else {
                    o += '<a class="page_num" href="javascript:;" style="display: none;">' + (p + 1) + "</a>"
                }
            }
        }
        if (l > 1) {
            o = '<a class="gray page_prev" href="javascript:;"><</a>' + o + '<a class="page_next" href="javascript:;">></a>'
        }
        o = '<div class="nearby_pager">' + o + "</div>";
        b.append(o);
        var n = b.find(".nearby_pager");
        n.find("a").click(function () {
            var t = $(this), s = n.find(".page_prev"), q = n.find(".page_next"), r = n.find(".page_num");
            if (!t.hasClass("gray") && !t.hasClass("active")) {
                if (t.hasClass("page_prev")) {
                    i = i - 1;
                    q.removeClass("gray")
                } else {
                    if (t.hasClass("page_next")) {
                        i = i + 1;
                        s.removeClass("gray")
                    } else {
                        var v = parseInt(t.text(), 10);
                        i = v - 1
                    }
                }
                if (i === 0) {
                    s.addClass("gray");
                    q.removeClass("gray")
                } else {
                    if (i === l - 1) {
                        q.addClass("gray");
                        s.removeClass("gray")
                    } else {
                        s.removeClass("gray");
                        q.removeClass("gray")
                    }
                }
                var w = i - 2, u = i + 2;
                if (w <= 0) {
                    u = 4
                }
                if (u >= l) {
                    w = l - 5
                }
                r.each(function (x) {
                    if (x >= w && x <= u) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                });
                n.find("a.page_num").removeClass("active").eq(i).addClass("active");
                e();
                if (m == "hotel") {
                    mapControlClass.removeHotel();
                    if (a.find(".chkhotel").attr("checked")) {
                        mapControlClass.addHotel(d.slice(i * j, (i + 1) * j))
                    }
                } else {
                    if (m == "attractions") {
                        mapControlClass.removeAttractions();
                        if (a.find(".chkattractions").attr("checked")) {
                            mapControlClass.addAttractions(d.slice(i * j, (i + 1) * j))
                        }
                    } else {
                        if (m == "restaurant") {
                            mapControlClass.removeRestaurant();
                            if (a.find(".chkrestaurant").attr("checked")) {
                                mapControlClass.addRestaurant(d.slice(i * j, (i + 1) * j))
                            }
                        }
                    }
                }
            }
        })
    }

    e();
    g();
    a.find(".chkhotel").change(function () {
        if ($(this).attr("checked")) {
            if (m == "hotel") {
                mapControlClass.addHotel(f.slice(i * j, (i + 1) * j))
            } else {
                mapControlClass.addHotel(f.slice(0 * j, (0 + 1) * j))
            }
        } else {
            mapControlClass.removeHotel()
        }
    });
    a.find(".chkattractions").change(function () {
        if ($(this).attr("checked")) {
            if (m == "attractions") {
                mapControlClass.addAttractions(c.slice(i * j, (i + 1) * j))
            } else {
                mapControlClass.addAttractions(c.slice(0 * j, (0 + 1) * j))
            }
        } else {
            mapControlClass.removeAttractions()
        }
    });
    a.find(".chkrestaurant").change(function () {
        if ($(this).attr("checked")) {
            if (m == "restaurant") {
                mapControlClass.addRestaurant(k.slice(i * j, (i + 1) * j))
            } else {
                mapControlClass.addRestaurant(k.slice(0 * j, (0 + 1) * j))
            }
        } else {
            mapControlClass.removeRestaurant()
        }
    });
    a.find(".nearby_box").on("mouseenter", "a.item", function () {
        var p = $(this).attr("data-id"), n = a.find(".map_inner .maps_mark[data-id='" + p + "']"), o = n.parent();
        n.addClass("active");
        new MarkerAnimate(n);
        o.css({"z-index": 2})
    }).on("mouseleave", "a.item", function () {
        var p = $(this).attr("data-id"), n = a.find(".map_inner .maps_mark[data-id='" + p + "']"), o = n.parent();
        n.removeClass("active");
        o.css({"z-index": 1})
    })
};var GMaper = function (a) {
    var k = this, a = a || {}, h = null, c = new google.maps.DirectionsService(), b = null, i = {}, d = {}, f = {},
        l = null, m = {}, j = null, e = null, g = null;
    k.init = function (n) {
        var o = document.getElementById(n.mapInner);
        var q = true;
        if (a.scrollWheel == false) {
            q = false
        }
        var p = a.mapTypeControl || false, r = a.zoom || 12;
        if (o) {
            if (a.mapOptions) {
                h = new google.maps.Map(o, a.mapOptions)
            } else {
                h = new google.maps.Map(o, {
                    mapTypeControl: p,
                    center: new google.maps.LatLng(n.lat, n.lng),
                    zoom: r,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: q
                })
            }
        }
        b = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport: true});
        google.maps.event.addListener(h, "click", function (s) {
            if (a.clickListener && $.type(a.clickListener) == "function") {
                a.clickListener()
            }
            k.hideInfoWindows()
        });
        google.maps.event.addListener(h, "idle", function (s) {
            if (a.idleListener && $.type(a.idleListener) == "function") {
                a.idleListener(this.getCenter(), this.getZoom())
            }
        })
    };
    k.setCenterByLatLng = function (n, o) {
        h.setCenter(new google.maps.LatLng(n, o))
    };
    k.setCenter = function (n) {
        h.setCenter(n)
    };
    k.getCenter = function () {
        return h.getCenter()
    };
    k.setZoom = function (n) {
        h.setZoom(n)
    };
    k.getZoom = function () {
        return h.getZoom()
    };
    k.clearRoute = function () {
        b.setMap(null)
    };
    k.clearPolygon = function () {
        if (m) {
            for (var n in m) {
                m[n].setMap(null)
            }
            m = {}
        }
    };
    k.clearMap = function () {
        b.setMap(null);
        k.clearPolygon();
        k.clearInfoWindow();
        for (var n in i) {
            if (i.hasOwnProperty(n)) {
                var o = i[n];
                o.setMap(null)
            }
        }
        i = {}
    };
    k.clearMarker = function () {
        for (var n in i) {
            if (i.hasOwnProperty(n)) {
                var o = i[n];
                o.setMap(null)
            }
        }
        i = {}
    };
    k.setFitView = function () {
        var n = new google.maps.LatLngBounds(), r = 0, s;
        for (var p in i) {
            s = i[p];
            if (s.getMap()) {
                n.extend(i[p].latLng);
                r++
            }
        }
        if (r > 1) {
            h.fitBounds(n);
            var o = n.getCenter();
            return {lat: o.lat(), lng: o.lng()}
        } else {
            if (s) {
                var q = s.latLng;
                h.setCenter(q);
                h.setZoom(12);
                return {lat: q.lat(), lng: q.lng()}
            }
        }
    };
    k.setFitViewByLatLngArray = function (n) {
        var r = n.length, q = 0, o = new google.maps.LatLngBounds();
        for (; q < r; q++) {
            var p = n[q];
            if (p.lat && p.lng) {
                o.extend(new google.maps.LatLng(p.lat, p.lng))
            }
        }
        h.fitBounds(o)
    };
    k.addMarkers = function (n) {
        var p = n.length, o = 0;
        for (; o < p; o++) {
            k.addMarker(n[o])
        }
    };
    k.addMarker = function (o, n) {
        var q = new google.maps.LatLng(o.lat, o.lng), p = o.id;
        var r = new j(o.markerHtml, q, function () {
            var s = $(this.div.firstChild);
            n(s, q)
        });
        r.setMap(h);
        i[p] = r
    };
    k.getMarker = function (n) {
        var o = i[n];
        if (o) {
            return o
        }
    };
    k.removeMarker = function (n) {
        var o = i[n];
        if (o) {
            o.setMap(null);
            delete i[n]
        }
    };
    k.removeMarkers = function (o) {
        var p = o.length, n = 0;
        for (; n < p; n++) {
            k.removeMarker(o[n])
        }
    };
    k.showMarker = function (n) {
        var o = i[n];
        if (o) {
            o.setMap(h)
        }
    };
    k.showMarkers = function (o) {
        var p = o.length, n = 0;
        for (; n < p; n++) {
            k.showMarker(o[n])
        }
    };
    k.hideMarker = function (n) {
        var o = i[n];
        if (o) {
            o.setMap(null)
        }
    };
    k.hideMarkers = function (o) {
        var p = o.length, n = 0;
        for (; n < p; n++) {
            k.hideMarker(o[n])
        }
    };
    k.checkMarker = function (n) {
        if (i[n]) {
            return true
        }
        return false
    };
    k.checkMarkerShow = function (n) {
        if (i[n] && i[n].getMap()) {
            return true
        }
        return false
    };
    k.createInfo = function (o, n) {
        var p = o.id;
        var q = d[p];
        if (q) {
            if (q.getMap()) {
                return
            }
        } else {
            var r = o.gOffset || [0, -103];
            q = new e(o.infoHtml, o.latLng, r, function () {
                n($(this.div.firstChild))
            });
            d[p] = q
        }
        k.hideInfoWindows();
        q.setMap(h)
    };
    k.checkInfo = function (n) {
        if (d[n]) {
            return true
        }
        return false
    };
    k.getInfo = function (n) {
        var o = d[n];
        if (o) {
            return o
        }
        return null
    };
    k.openInfo = function (n) {
        k.hideInfoWindows();
        var o = k.getInfo(n);
        o.setMap(h)
    };
    k.hideInfoWindow = function (n) {
        var o = d[n];
        if (o) {
            o.setMap(null)
        }
    };
    k.hideInfoWindows = function () {
        for (var n in d) {
            if (d.hasOwnProperty(n)) {
                var o = d[n];
                o.setMap(null)
            }
        }
    };
    k.clearInfoWindow = function () {
        for (var n in d) {
            if (d.hasOwnProperty(n)) {
                var o = d[n];
                o.setMap(null)
            }
        }
        d = {}
    };
    k.createLabel = function (n, s) {
        var p = n.id, r = new google.maps.LatLng(n.lat, n.lng), o = n.html;
        var q = new g(o, r, function () {
            var t = $(this.div.firstChild);
            if (s && typeof s == "function") {
                s(t, r)
            }
        });
        q.setMap(h);
        f[p] = q
    };
    k.setPolygonOptions = function (n, o) {
        var p = m[n];
        if (p) {
            p.setOptions(o)
        }
    };
    k.drawPolygon = function (q, n, s) {
        var t = [], r = n.length, p = 0;
        for (; p < r; p++) {
            var o = n[p];
            t.push(new google.maps.LatLng(o.lat, o.lng))
        }
        s = s || {strokeColor: "#FF6D6D", strokeOpacity: 1, strokeWeight: 3, fillColor: "#FFBFBF", fillOpacity: 0.3};
        s.paths = t;
        l = new google.maps.Polygon(s);
        l.setMap(h);
        m[q] = l;
        return l
    };
    k.drawRoute = function (n, v, o) {
        var r = n.length - 1, q = 1, w = [], s = new google.maps.LatLng(n[0].lat, n[0].lng),
            p = new google.maps.LatLng(n[r].lat, n[r].lng);
        for (; q < r; q++) {
            var t = new google.maps.LatLng(n[q].lat, n[q].lng);
            w.push({location: t, stopover: true})
        }
        var u = {
            origin: s,
            destination: p,
            waypoints: w,
            optimizeWaypoints: false,
            travelMode: v,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        c.route(u, function (B, D) {
            var C = {msg: 0};
            if (D == google.maps.DirectionsStatus.OK) {
                if (!b.getMap()) {
                    b.setMap(h)
                }
                b.setDirections(B);
                if (B.routes && B.routes[0].legs && B.routes[0].legs.length > 0) {
                    C.msg = 1;
                    var y = B.routes[0].legs[0], E = y.steps, z = E.length, A = 0;
                    C.distance = y.distance.text;
                    C.time = y.duration.text;
                    C.steps = [];
                    for (; A < z; A++) {
                        var x = E[A].instructions;
                        x = x.replace(/<\/?[^>]*>/g, "");
                        C.steps.push(x)
                    }
                }
            }
            o(C)
        })
    };
    k.drawWalkRoute = function (n, o) {
        k.drawRoute(n, google.maps.TravelMode.WALKING, o)
    };
    k.drawDriveRoute = function (n, o) {
        k.drawRoute(n, google.maps.TravelMode.DRIVING, o)
    };
    k.drawPublicTransitRoute = function (n, o) {
        k.drawRoute(n, google.maps.TravelMode.TRANSIT, o)
    };
    (function () {
        g = function (n, o, p) {
            this.html = n;
            this.latLng = o;
            this.ready = p;
            this.div = null
        };
        g.prototype = new google.maps.OverlayView();
        $.extend(g.prototype, {
            onAdd: function () {
                var n = document.createElement("div");
                n.innerHTML = this.html;
                n.style.position = "absolute";
                this.getPanes().overlayImage.appendChild(n);
                this.div = n;
                if (typeof this.ready === "function") {
                    this.ready.call(this)
                }
            }, draw: function () {
                var o = $(this.div), n = $(this.div.firstChild);
                var p = this.getProjection().fromLatLngToDivPixel(this.latLng);
                o.css({left: parseInt(p.x) - n.outerWidth() / 2, bottom: -(p.y - n.outerHeight() - 10)})
            }, onRemove: function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null
            }
        })
    })();
    (function () {
        j = function (n, o, p) {
            this.html = n;
            this.latLng = o;
            this.ready = p;
            this.div = null
        };
        j.prototype = new google.maps.OverlayView();
        $.extend(j.prototype, {
            onAdd: function () {
                var n = document.createElement("div");
                n.innerHTML = this.html;
                n.style.position = "absolute";
                this.getPanes().overlayImage.appendChild(n);
                this.div = n;
                this.ready.call(this)
            }, draw: function () {
                this.dom = this.div.firstChild;
                var n = this.getProjection().fromLatLngToDivPixel(this.latLng);
                this.div.style.left = n.x - 15 + "px";
                this.div.style.top = n.y - 40 + "px"
            }, onRemove: function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null
            }
        })
    })();
    (function () {
        e = function (n, o, p, q) {
            this.html = n;
            this.latLng = o;
            this.ready = q;
            this.div = null;
            this.offset = p
        };
        e.prototype = new google.maps.OverlayView();
        $.extend(e.prototype, {
            onAdd: function () {
                var n = document.createElement("div");
                n.innerHTML = this.html;
                n.style.position = "absolute";
                n.style.zIndex = "5";
                this.getPanes().overlayImage.appendChild(n);
                this.div = n;
                this.ready.call(this)
            }, draw: function () {
                var u = this.getProjection(), p = h.getBounds(), q = u.fromLatLngToDivPixel(this.latLng),
                    n = p.getNorthEast().A, o = p.getSouthWest().A, t = u.fromLatLngToDivPixel(p.getNorthEast()),
                    v = u.fromLatLngToDivPixel(p.getSouthWest()), w = $(this.div.firstChild).outerWidth(),
                    s = $(this.div.firstChild).outerHeight(), r = (w / 2);
                left = q.x - r + this.offset[0], bottom = -q.y + (s + this.offset[1]);
                this.div.style.left = left + "px";
                this.div.style.bottom = bottom + "px";
                var z = 0;
                var A = 0;
                if (q.x < (v.x + r + 5)) {
                    z = q.x - (v.x + r + 5)
                }
                if (q.x > (t.x - r - 5)) {
                    z = q.x - (t.x - r - 5)
                }
                A = (q.y - (s + 55)) - t.y;
                A = A < 0 ? A : 0;
                if (n !== 180 && o !== -180) {
                    if (z || A) {
                        h.panBy(z, A)
                    }
                } else {
                    if (A) {
                        h.panBy(0, A)
                    }
                }
            }, onRemove: function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null
            }
        })
    })()
};
var CarouselSlide = function (c, f) {
    var a = $(c);
    this.$element = a;
    this.options = f;
    var e = this, b = a.find("[data-indicators]"), d = f.eventType;
    b.find("[data-slip-to]").bind(d, function () {
        e.slide($(this).index())
    });
    if (this.options.interval) {
        e.cycle();
        b.add(a.find("[data-inner]")).on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this))
    }
};
CarouselSlide.prototype = {
    cycle: function (f) {
        if (!f) {
            this.paused = false
        }
        if (this.cycleTimer) {
            clearInterval(this.cycleTimer)
        }
        var e = this, a = this.$element.find("[data-indicators]:visible").find("[data-slip-to]"), d = a.length,
            b = a.siblings(".current").index();
        b = b === d - 1 ? 0 : ++b;

        function c() {
            e.slide(b)
        }

        this.options.interval && !this.paused && (this.cycleTimer = setInterval(c, this.options.interval));
        return this
    }, pause: function (a) {
        if (!a) {
            this.paused = true
        }
        this.cycle(true);
        clearInterval(this.cycleTimer);
        this.cycleTimer = null;
        return this
    }, slide: function (e) {
        var f = this;
        var a = f.$element.find("[data-indicators]:visible"), b = f.$element.find("[data-inner]"),
            c = a.find("[data-slip-to]").eq(e), d = this.cycleTimer;
        if (c.hasClass("current")) {
            return
        }
        d && this.pause();
        b.each(function () {
            var i = $(this), h = i.find("[data-item]").eq(e), g = i.find(".current");
            if (h.length === 0 || c.length === 0) {
                return
            }
            a.find(".current").removeClass("current");
            c.addClass("current");
            g.stop(true, true);
            h.stop(true, true);
            g.fadeOut({
                duration: 400, easing: "linear", complete: function () {
                    g.removeClass("current")
                }
            });
            h.fadeIn({
                duration: 400, easing: "linear", complete: function () {
                    i.find(".current").css({display: "none"});
                    i.find(".current").removeClass("current");
                    h.addClass("current")
                }
            })
        });
        d && this.cycle();
        return this
    }
};
$.fn.carouselSlide = function (a) {
    $.fn.carouselSlide.defaults = {eventType: "mouseover", interval: 3000};
    return this.each(function () {
        a = $.extend({}, $.fn.carouselSlide.defaults, a);
        new CarouselSlide(this, a)
    })
};
$(function () {
    $(".gs-like-box a").click(function () {
        var e = null;
        var b = $(this), d = b.hasClass("click_like");
        if (d) {
            var a = b.find("span");
            if (a.text() != "已喜欢") {
                var c = parseInt(a.text(), 10);
                c = isNaN(c) ? 0 : c;
                var f = function () {
                    a.text(c);
                    clearTimeout(e)
                };
                a.text("已喜欢");
                e = setTimeout(f, 2000)
            }
        }
    });
    $(".gs-like-box a").gsbaselike({
        requestFn: INTERFACE.likeRequestFn, callback: function (a) {
        }
    })
});
var MapControlClass = function (c) {
    var f = this, e = null, g = null, a = $(".map_side"), d = [], b = [], i = [], h = [];
    f.getMaper = function () {
        return e
    };
    f.init = function (j) {
        if (j && !e) {
            g = j;
            var l = g.lng, k = g.lat;
            if (l && k) {
                var m = true;
                if (c.scrollWheel == false) {
                    m = false
                }
                if (c.inChina) {
                    e = new AMaper({scrollWheel: m})
                } else {
                    e = new GMaper({scrollWheel: m})
                }
                e.init({mapInner: c.mapInner, lng: l, lat: k});
                f.addPoi()
            }
        }
    };
    f.addPoi = function () {
        var k = g.id, j = '<a class="maps_mark_poi" data-id="' + k + '" href="javascript:;"></a>';
        g.markerHtml = j;
        e.addMarker(g, function (l, m) {
            l.click(function (n) {
                if (!e.checkInfo(k)) {
                    var o = [];
                    o.push('<div class="maps_info_poi">');
                    o.push('	<a class="btn_close" href="javascript:;">×</a>');
                    o.push("	<h3>" + g.name + "</h3>");
                    o.push('	<p class="ellipsis" title="' + g.address + '">地址：' + g.address + "</p>");
                    o.push('	<s class="bot_arrow"><em>◆</em><span>◆</span></s>');
                    o.push("</div>");
                    e.createInfo({
                        id: k,
                        latLng: m,
                        infoHtml: o.join(""),
                        gOffset: [0, 50],
                        aOffset: [-23, -113]
                    }, function (p) {
                        p.find(".btn_close").click(function (q) {
                            e.hideInfoWindow(k);
                            q.stopPropagation()
                        });
                        p.click(function (q) {
                            q.stopPropagation()
                        })
                    })
                } else {
                    e.openInfo(k)
                }
                n.stopPropagation()
            });
            if (c.showTip) {
                l.trigger("click")
            }
        })
    };
    f.setFitView = function () {
        e.setFitView()
    };
    f.addHotel = function (j) {
        d = [];
        var n = j.length, l = 0;
        for (; l < n; l++) {
            var k = j[l], o = [];
            if (!k) {
                continue
            }
            var m = k.id;
            o.push('<a class="maps_mark maps_mark_hotel" href="' + k.href + '" data-id="' + m + '" target="_blank">');
            o.push("	<i>" + (l + 1) + "</i>");
            o.push('	<em class="ellipsis">' + k.name + "</em>");
            o.push("</a>");
            k.markerHtml = o.join("");
            e.addMarker(k, function (p, r) {
                var q = p.attr("data-id");
                p.on("mouseenter", function () {
                    a.find("a.item[data-id=" + q + "]").addClass("active");
                    p.addClass("active");
                    p.parent().css({"z-index": 2})
                }).on("mouseleave", function () {
                    p.removeClass("active");
                    p.parent().css({"z-index": 1});
                    a.find("a.item[data-id=" + q + "]").removeClass("active")
                })
            });
            d.push(m)
        }
        if (n > 0) {
            e.setFitView()
        }
    };
    f.removeHotel = function () {
        if (d && d.length > 0) {
            e.removeMarkers(d)
        }
    };
    f.addAttractions = function (j) {
        b = [];
        var n = j.length, l = 0;
        for (; l < n; l++) {
            var k = j[l], o = [];
            if (!k) {
                continue
            }
            var m = k.id;
            o.push('<a class="maps_mark maps_mark_attractions" href="' + k.href + '" data-id="' + m + '" target="_blank">');
            o.push("	<i>" + (l + 1) + "</i>");
            o.push('	<em class="ellipsis">' + k.name + "</em>");
            o.push("</a>");
            k.markerHtml = o.join("");
            e.addMarker(k, function (p, r) {
                var q = p.attr("data-id");
                p.on("mouseenter", function () {
                    a.find("a.item[data-id=" + q + "]").addClass("active");
                    p.addClass("active");
                    p.parent().css({"z-index": 2})
                }).on("mouseleave", function () {
                    p.removeClass("active");
                    p.parent().css({"z-index": 1});
                    a.find("a.item[data-id=" + q + "]").removeClass("active")
                })
            });
            b.push(m)
        }
        if (n > 0) {
            e.setFitView()
        }
    };
    f.removeAttractions = function () {
        if (b && b.length > 0) {
            e.removeMarkers(b)
        }
    };
    f.addTraffic = function (j, p) {
        i = [];
        var n = j.length, l = 0;
        for (; l < n; l++) {
            var k = j[l], o = [];
            if (!k) {
                continue
            }
            var m = k.id;
            if (p) {
                var q = "mark_traffic_" + k.type;
                o.push('<a class="maps_mark ' + q + '" href="' + k.href + '" data-id="' + m + '" target="_blank">');
                o.push("   <i></i>")
            } else {
                o.push('<a class="maps_mark maps_mark_traffic" href="' + k.href + '" data-id="' + m + '" target="_blank">');
                o.push("   <i>" + (l + 1) + "</i>")
            }
            o.push('   <em class="ellipsis">' + k.name + "</em>");
            o.push("</a>");
            k.markerHtml = o.join("");
            e.addMarker(k, function (r, t) {
                var s = r.attr("data-id");
                r.on("mouseenter", function () {
                    a.find("a.item[data-id=" + s + "]").addClass("active");
                    r.addClass("active");
                    r.parent().css({"z-index": 2})
                }).on("mouseleave", function () {
                    r.removeClass("active");
                    r.parent().css({"z-index": 1});
                    a.find("a.item[data-id=" + s + "]").removeClass("active")
                })
            });
            i.push(m)
        }
        if (n > 0) {
            e.setFitView()
        }
    };
    f.removeTraffic = function () {
        if (i && i.length > 0) {
            e.removeMarkers(i)
        }
    };
    f.addRestaurant = function (j) {
        h = [];
        var n = j.length, l = 0;
        for (; l < n; l++) {
            var k = j[l], o = [];
            if (!k) {
                continue
            }
            var m = k.id;
            o.push('<a class="maps_mark maps_mark_restaurant" href="' + k.href + '" data-id="' + m + '" target="_blank">');
            o.push("   <i>" + (l + 1) + "</i>");
            o.push('   <em class="ellipsis">' + k.name + "</em>");
            o.push("</a>");
            k.markerHtml = o.join("");
            e.addMarker(k, function (p, r) {
                var q = p.attr("data-id");
                p.on("mouseenter", function () {
                    a.find("a.item[data-id=" + q + "]").addClass("active");
                    p.addClass("active");
                    p.parent().css({"z-index": 2})
                }).on("mouseleave", function () {
                    p.removeClass("active");
                    p.parent().css({"z-index": 1});
                    a.find("a.item[data-id=" + q + "]").removeClass("active")
                })
            });
            h.push(m)
        }
        if (n > 0) {
            e.setFitView()
        }
    };
    f.removeRestaurant = function () {
        if (h && h.length > 0) {
            e.removeMarkers(h)
        }
    }
};

function MarkerAnimate(a) {
    var c = [-30, 0], f = [160, 160], b = c.length, d = 0;

    function e() {
        var g = c[d], h = f[d];
        a.animate({top: g}, h, function () {
            ++d;
            if (d < b) {
                e(a)
            }
        })
    }

    e()
};(function (a) {
    a.pageEventBind = function () {
        a(".pager_v1").each(function () {
            var e = parseInt(a(this).find(".numpage").text()), d = a(this).find("span input");
            d.on("keyup", function (f) {
                var g = a(this).val();
                if (/\D/g.test(g)) {
                    a(this).val("")
                }
                if (f.keyCode == 13) {
                    c(g, e, d)
                }
            }).parent("span").siblings(".gopage").on("click", function () {
                var f = d.val();
                c(f, e, d)
            })
        });

        function c(f, e, d) {
            if (f == "" || f == "0" || f > e || /\D/g.test(f)) {
                d.val("");
                b(d)
            } else {
                if (a.pageLinkJump) {
                    a.pageLinkJump(f, d)
                }
            }
        }

        function b(j) {
            var f = j.clone(), g = j.offset(), d = 0;
            j.css("visibility", "hidden");
            f.css({
                position: "absolute",
                top: g.top + "px",
                left: g.left + "px",
                width: "18px",
                height: "16px",
                border: "1px solid #ccc"
            }).appendTo("body");
            var e = setInterval(function () {
                d++;
                f.css({top: g.top + 2 * Math.sin(d) + "px", left: g.left + 1 * Math.cos(d) + "px"});
                if (15 == d) {
                    clearInterval(e);
                    j.css("visibility", "visible");
                    f.remove()
                }
            }, 30)
        }
    };
    a.pageEventBind()
})(jQuery);
$(function () {
    var a = INTERFACE.isChina;
    $("#cateSTab li a").click(function () {
        var b = $(this);
        if (!b.parent().hasClass("active")) {
            b.parent().siblings("li").removeClass("active");
            b.parent().addClass("active");
            var c = b.attr("href");
            $(c).siblings(".tabitem").removeClass("active");
            $(c).addClass("active");
            $(".city_select_popup").hide();
            $(".city_suggest_popup").hide();
            if (!b.data("withoutFn")) {
                switch (c) {
                    case"#cate_flight":
                        if (a) {
                            SearchControl.initFlight()
                        } else {
                            SearchControl.initForeignFlight()
                        }
                        b.data("withoutFn", true);
                        break;
                    case"#cate_ticket":
                        SearchControl.initTicket();
                        b.data("withoutFn", true);
                        break;
                    case"#cate_train":
                        SearchControl.initTrain();
                        b.data("withoutFn", true);
                        break
                }
            }
        }
        return false
    });
    if (a) {
        SearchControl.initHotel()
    } else {
        SearchControl.initForeignHotel()
    }
    SearchControl.initTravel()
});

function submitForm(c) {
    if (!c.action) {
        return
    }
    var d = document.createElement("FORM"), b = c.charset || "utf-8", f = c.method || "post", i = c.target || "",
        h = [], a = c.action, g = c.param || {};
    for (var e in g) {
        h.push('<input type="hidden" name="' + e + '" value="' + g[e] + '" />')
    }
    d.setAttribute("accept-charset", b);
    d.target = i;
    d.method = f;
    d.action = a;
    d.innerHTML = h.join("");
    document.body.appendChild(d);
    document.charset = "gb2312";
    jQuery(window).on("beforeunload", function () {
        document.charset = "UTF-8";
        jQuery(window).off("beforeunload")
    });
    d.submit()
}

function getDateStr(a, h) {
    var e = new Date();
    if (h) {
        var i = h.split("-"), k = parseInt(i[0], 10), g = parseInt(i[1], 10) - 1, c = parseInt(i[2], 10),
            e = new Date(k, g, c)
    }
    e.setDate(e.getDate() + a);
    var j = e.getFullYear();
    var f = (e.getMonth() + 1) < 10 ? "0" + (e.getMonth() + 1) : (e.getMonth() + 1);
    var b = e.getDate() < 10 ? "0" + e.getDate() : e.getDate();
    return j + "-" + f + "-" + b
}

function checkDate(h, c) {
    var i = h.split("-"), d = c.split("-"), j = parseInt(i[0], 10), e = parseInt(d[0], 10), g = parseInt(i[1], 10),
        b = parseInt(d[1], 10), f = parseInt(i[2], 10), a = parseInt(d[2], 10);
    if (j < e) {
        return true
    } else {
        if (j == e && g < b) {
            return true
        } else {
            if (j == e && g == b && f < a) {
                return true
            }
        }
    }
    return false
}

function GetDateDiff(c) {
    var a = new Date();
    var b = new Date(Date.parse(c.replace(/-/g, "/")));
    return Math.ceil(parseFloat((b - a) / 86400000, 10))
};(function (c) {
    var a = this;
    c = a[c] = (a && a[c]) || {};
    c.initFlight = function () {
        var f = null, g = null;
        b();

        function e(k) {
            var o = [], u = [];
            for (var r in k) {
                var q = [];
                if (r != "热门") {
                    u.push("<li><span>" + r + "</span></li>");
                    q.push('<div class="city_item">');
                    var m = k[r];
                    for (var l in m) {
                        var h = m[l], s = h.length, p = 0;
                        q.push('<div class="city_item_in cf"><span class="city_item_letter">' + l + "</span>");
                        for (; p < s; p++) {
                            var j = h[p];
                            q.push('<a href="javascript:void(0);" data="' + j.data + '">' + j.display + "</a>")
                        }
                        q.push("</div>")
                    }
                    q.push("</div>")
                } else {
                    var h = k[r], s = h.length, t = 0;
                    u.push('<li class="current"><span>' + r + "</span></li>");
                    q.push('<div class="city_item current"><div>');
                    for (var t = 0; t < s; t++) {
                        var j = h[t];
                        q.push('<a href="javascript:void(0);" data="' + j.data + '">' + j.display + "</a>")
                    }
                    q.push("</div></div>")
                }
                o.push(q.join(""))
            }
            return {html: o.join(""), tabHtml: u.join("")}
        }

        $("#flightFrom,#flightTo").citySelect({
            drawHtml: function (h) {
                if (f) {
                    h(e(f))
                } else {
                    var i = "http://webresource.c-ctrip.com/code/cquery/resource/address/flight/flight_new_gb2312.js";
                    $.ajax({
                        dataType: "script", scriptCharset: "gb2312", url: i, success: function () {
                            f = cQuery.jsonpResponse.suggestion;
                            g = cQuery.jsonpResponse.data;
                            h(e(f))
                        }
                    })
                }
            }, eventControl: function (j) {
                var h = j.container, i = j.$element;
                h.find(".city_item a").click(function () {
                    if (i.val() != $(this).text()) {
                        i.val($(this).text());
                        i.attr("data", $(this).attr("data"))
                    }
                    if (i.attr("id") == "flightFrom") {
                        $("#flightTo").trigger("click")
                    }
                    j.blur()
                })
            }
        });
        var d = new CitySuggestFilter({
            sort: function (h, i, j, m) {
                var n = [], o = 0, q = RegExp("@" + i + ".+", "i"), s = RegExp("@.+\\|([a-z]{3},)*" + i + ".+", "i"),
                    p = (/[a-z]/i);
                h.replace(RegExp("@([^@]*" + i + "[^@]*)", "gi"), function (k, l) {
                    var t = 0, r = !1, u = l.split("|");
                    (m ? u[1] == i && (n[o++] = {
                        left: u[0],
                        right: u[1],
                        text: u[1],
                        data: l,
                        sortPrioity: t
                    }) : ("" != u[6] && (t -= 200), 0 < u[1].indexOf("(") && (t -= 1), -1 < u[0].indexOf("Shanhaiguan") && (t -= 5), (1 == i.length ? (p.test(i) ? (r = q.test(k), t += 100) : (r = s.test(k), t += 50)) : 1 < i.length && (q.test(k) && (t += 100, r = !0), s.test(k) && (0 == u[4].indexOf(i.toUpperCase()) && (t += 50), 0 == u[2].indexOf(i.toUpperCase()) && (t += 10), r = !0))), r && isNaN(i) && (n[o++] = {
                        left: u[0],
                        right: u[1],
                        text: u[1],
                        data: l,
                        priority: t
                    })))
                });
                m || n.sort(function (k, l) {
                    return (k.priority == l.priority ? (k.data < l.data ? -1 : (k.data > l.data ? 1 : 0)) : (k.priority > l.priority ? -1 : 1))
                });
                return n
            }
        });
        $("#flightFrom,#flightTo").citySuggest({
            formatData: function (p, k) {
                var j = [];
                if (g) {
                    j = d.getfilterData(g, p, false, false)
                }
                if (j && j.length > 0) {
                    var l = [], q = j.length, o = 0;
                    for (; o < q; o++) {
                        var n = j[o];
                        str = n.data, arr = str.split("|"), airPort = arr[5], distance = arr[6];
                        if (airPort != "-") {
                            n.noAirPort = true;
                            airPort = airPort.split("#"), distance = distance.split("#");
                            n.airPort = [];
                            n.airPortText = [];
                            for (var r = 0; r < airPort.length; r++) {
                                var h = airPort[r].replace("-", "");
                                n.airPortText.push("-邻近机场：" + h + "-" + distance[r] + "");
                                n.airPort.push(h)
                            }
                        }
                    }
                }
                k(j)
            }, eventControl: function (j) {
                var h = j.container, i = j.$element;
                h.find(".city_suggest_item").click(function (p) {
                    var n = $(this).attr("data"), k = n.split("|"), o = k[1], m = k[2];
                    if ($(this).attr("data-airPort")) {
                        o = $(this).attr("data-airPort");
                        i.val(o);
                        i.trigger("keyup")
                    } else {
                        i.val(o);
                        j.hidePopup();
                        var l = "|" + o + "|" + m;
                        i.attr("data", l);
                        if (i.attr("id") == "flightFrom") {
                            $("#flightTo").trigger("click")
                        }
                    }
                    j.firstData = null;
                    p.stopPropagation()
                });
                $(document).one("click", function () {
                    var o = j.firstData;
                    if (o) {
                        if (o.noAirPort && o.airPort.length > 0) {
                            i.val("");
                            i.attr("data", "")
                        } else {
                            i.val(o.text);
                            var k = o.data.split("|"), n = k[1], m = k[2];
                            var l = "|" + n + "|" + m;
                            i.attr("data", l)
                        }
                    } else {
                        if (o === "") {
                            i.val("");
                            i.attr("data", "")
                        }
                    }
                    j.firstData = null
                })
            }
        })
    };
    c.initForeignFlight = function () {
        b();
        $("#flightFrom,#flightTo").citySelect({
            drawHtml: function (d, e) {
                var g = "", f = e.$element.attr("id");
                if (f == "flightFrom") {
                    g = "http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/flightintl_start_new_gb2312.js"
                } else {
                    g = "http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/flightintl_dest_new_gb2312.js"
                }
                $.ajax({
                    dataType: "script", scriptCharset: "gb2312", url: g, success: function () {
                        var k = cQuery.jsonpResponse.suggestion;
                        var l = [], r = [], i = 0;
                        for (var o in k) {
                            var m = [], h = k[o], p = h.length, q = 0;
                            if (i !== 0) {
                                r.push("<li><span>" + o + "</span></li>");
                                m.push('<div class="city_item"><div>')
                            } else {
                                r.push('<li class="current"><span>' + o + "</span></li>");
                                m.push('<div class="city_item current"><div>')
                            }
                            for (var q = 0; q < p; q++) {
                                var j = h[q];
                                m.push('<a href="javascript:void(0);" data="' + j.data + '">' + j.display + "</a>")
                            }
                            m.push("</div></div>");
                            l.push(m.join(""));
                            i++
                        }
                        d({html: l.join(""), tabHtml: r.join("")})
                    }
                })
            }, eventControl: function (f) {
                var d = f.container, e = f.$element;
                d.find(".city_item a").click(function () {
                    if (e.val() != $(this).text()) {
                        var g = escape($(this).text());
                        var h = "http://flights.ctrip.com/international/tools/GetCities.ashx?s=" + g + "&a=0&t=0";
                        $.ajax({
                            dataType: "script", scriptCharset: "gb2312", url: h, success: function () {
                                var j = cQuery.jsonpResponse, k = j.data;
                                if (j.data && j.data.split("|").length > 1) {
                                    g = k.split("|")[1];
                                    var i = g.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2");
                                    e.val(g);
                                    e.attr("data", i)
                                }
                            }
                        })
                    }
                    if (e.attr("id") == "flightFrom") {
                        $("#flightTo").trigger("click")
                    }
                    f.blur()
                })
            }
        });
        $("#flightFrom,#flightTo").citySuggest({
            formatData: function (e, d) {
                var f = "http://flights.ctrip.com/international/tools/GetCities.ashx?s=" + escape(e) + "&a=0&t=0";
                $.getScript(f, function () {
                    var j = cQuery.jsonpResponse;
                    if (j && j.data) {
                        var h = j.data.split("@"), n = h.length, m = 0, k = [];
                        for (; m < n; m++) {
                            if (h[m]) {
                                var o = h[m], g = o.split("|"), l = {};
                                if (g.length > 0) {
                                    l.text = g[3];
                                    l.data = o;
                                    l.value = g[1];
                                    k.push(l)
                                }
                            }
                        }
                        d(k)
                    } else {
                        d([])
                    }
                })
            }, eventControl: function (f) {
                var d = f.container, e = f.$element;
                d.find(".city_suggest_item").click(function (j) {
                    var h = $(this).attr("data"), g = h.split("|"), i = g[1];
                    e.val(i);
                    e.attr("data", i.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"));
                    f.hidePopup();
                    if (e.attr("id") == "flightFrom") {
                        $("#flightTo").trigger("click")
                    }
                    f.firstData = null;
                    j.stopPropagation()
                });
                $(document).one("click", function () {
                    var g = f.firstData;
                    if (g) {
                        e.val(g.value);
                        e.attr("data", g.value.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"))
                    } else {
                        if (g === "") {
                            e.val("");
                            e.attr("data", "")
                        }
                    }
                    f.firstData = null
                })
            }
        })
    };

    function b() {
        $("#flightOneWay")[0].checked = true;
        $("#flightBackForth")[0].checked = false;
        $("input[name='flyType']").change(function () {
            if ($("input[name='flyType']:checked").val() == 0) {
                $("#cate_flight .sformline").eq(4).addClass("gray")
            } else {
                $("#cate_flight .sformline").eq(4).removeClass("gray")
            }
        });
        $("#flightStartDate").val("yyyy-mm-dd");
        $("#flightEndDate").val("yyyy-mm-dd");
        $("#flightStartDate,#flightEndDate").calendar({
            callback: function (k, d) {
                var n = k.match(/-[\d]{1}\b/g), j = d.attr("id"), f = $("#flightStartDate"), e = $("#flightEndDate");
                if (n != null) {
                    for (var h = 0; h < n.length; h++) {
                        var m = n[h].replace("-", "-0");
                        k = k.replace(/-[\d]{1}\b/, m)
                    }
                }
                switch (j) {
                    case"flightStartDate":
                        if ($("input[name='flyType']:checked").val() == 1) {
                            var g = e.val();
                            if (g == "yyyy-mm-dd") {
                                e.val(getDateStr(1, k));
                                e.focus()
                            } else {
                                if (!checkDate(k, g)) {
                                    e.val(getDateStr(1, k));
                                    e.focus()
                                }
                            }
                        }
                        break;
                    case"flightEndDate":
                        var l = f.val();
                        if (l != "yyyy-mm-dd" && !checkDate(l, k)) {
                            k = getDateStr(1, l)
                        }
                        e.parents(".sformline").removeClass("gray");
                        $("input[name='flyType']").attr("checked", "1");
                        break
                }
                d.val(k)
            }
        });
        $("#cate_flight .changeinput a").click(function () {
            var d = $("#flightFrom"), e = $("#flightTo"), f = d.val();
            d.val(e.val());
            e.val(f);
            f = d.attr("data");
            d.attr("data", e.attr("data"));
            e.attr("data", f)
        });
        $("#cate_flight .radiobox").click(function (f) {
            if (f.target.name != "flyType") {
                var d = $(this).find("input[type='radio']");
                d.attr("checked", true);
                if ($("input[name='flyType']:checked").val() == 0) {
                    $("#cate_flight .sformline").eq(4).addClass("gray")
                } else {
                    $("#cate_flight .sformline").eq(4).removeClass("gray")
                }
            }
        });
        $("#cate_flight .b_blue_s").click(function () {
            if ($.trim($("#flightFrom").val()) == "") {
                $("#flightFrom").focus();
                return false
            }
            if ($.trim($("#flightTo").val()) == "") {
                $("#flightTo").focus();
                return false
            }
            if ($.trim($("#flightStartDate").val()) == "yyyy-mm-dd") {
                $("#flightStartDate").focus();
                return false
            }
            var d = {
                type: $("#cate_flight input[type='radio']:checked").val(),
                from: GS.xssFilter($.trim($("#flightFrom").val())),
                fromData: $("#flightFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#flightTo").val())),
                destinationData: $("#flightTo").attr("data") || "",
                startDate: $("#flightStartDate").val(),
                endDate: $("#flightEndDate").val()
            };
            INTERFACE.searchFlightFn(d)
        })
    }
})("SearchControl");
(function (c) {
    var a = this;
    c = a[c] = (a && a[c]) || {};
    c.initHotel = function () {
        $(".tabitem .gsn-select").on("click", function (g) {
            var f = $(this);
            if (f.children("ul").css("display") == "none") {
                f.children("ul").show();
                f.children("span").addClass("arrow-cur")
            } else {
                f.children("ul").hide();
                f.children("span").removeClass("arrow-cur")
            }
            g.stopPropagation()
        });
        $(document).on("click", function () {
            var e = $(".tabitem .gsn-select");
            e.children("ul").hide();
            e.children("span").removeClass("arrow-cur")
        });
        $(".tabitem .gsn-select a").click(function (g) {
            var f = $(this);
            var h = f.attr("data-value");
            f.parents(".gsn-select").find(".select-txt").html(f.html()).addClass("select-txt-cur").attr("data-value", h);
            f.parents("ul").hide();
            f.parents(".gsn-select").children("span").removeClass("arrow-cur");
            g.stopPropagation()
        });
        var d = $("#hotelTo").val();
        b();
        $("#hotelTo").citySelect({
            drawHtml: function (e) {
                var f = "http://hotels.ctrip.com/Domestic/Tool/AjaxGetCitySuggestion.aspx";
                $.getScript(f, function () {
                    var j = cQuery.jsonpResponse.suggestion;
                    var m = [], u = [];
                    for (var q in j) {
                        var p = [], l = {}, g = j[q], r = g.length, o = 0, s = 0;
                        if (q != "热门") {
                            u.push("<li><span>" + q + "</span></li>");
                            for (; o < r; o++) {
                                var h = g[o], k = h.group || "";
                                if (k) {
                                    if (l[k]) {
                                        l[k] += '<a href="javascript:void(0);" data="' + h.data + '">' + h.display + "</a>"
                                    } else {
                                        l[k] = '<div class="city_item_in cf"><span class="city_item_letter">' + k + '</span><a href="javascript:void(0);" data="' + h.data + '">' + h.display + "</a>"
                                    }
                                }
                            }
                            p.push('<div class="city_item">');
                            for (var t in l) {
                                l[t] += "</div>";
                                p.push(l[t])
                            }
                            p.push("</div>")
                        } else {
                            u.push('<li class="current"><span>' + q + "</span></li>");
                            p.push('<div class="city_item current"><div>');
                            for (; s < r; s++) {
                                var h = g[s];
                                p.push('<a href="javascript:void(0);" data="' + h.data + '">' + h.display + "</a>")
                            }
                            p.push("</div></div>")
                        }
                        m.push(p.join(""))
                    }
                    e({html: m.join(""), tabHtml: u.join("")})
                })
            }, eventControl: function (g) {
                var e = g.container, f = g.$element;
                e.find(".city_item a").click(function () {
                    var h = $.trim($(this).text());
                    if (d != h) {
                        $("#hotelKeyword").val("");
                        f.val(h);
                        f.attr("data", $(this).attr("data"));
                        d = h
                    }
                    g.blur()
                })
            }
        });
        $("#hotelTo").citySuggest({
            formatData: function (f, e) {
                var g = "http://hotels.ctrip.com/Domestic/Tool/AjaxIndexCityNew.aspx?keyword=" + escape(f);
                $.getScript(g, function () {
                    var k = cQuery.jsonpResponse;
                    if (k && k.data) {
                        var j = k.data.split("@"), o = j.length, n = 0, l = [];
                        for (; n < o; n++) {
                            if (n != 0 && n != (o - 1)) {
                                var p = j[n], h = p.split("|"), m = {};
                                if (h.length > 0) {
                                    m.text = h[7] + "" + h[5];
                                    m.data = p;
                                    m.keyword = h[4];
                                    l.push(m)
                                }
                            }
                        }
                        e(l)
                    }
                })
            }, eventControl: function (g) {
                var e = g.container, f = g.$element;
                e.find(".city_suggest_item").click(function () {
                    var i = $(this).attr("data"), h = i.split("|"), j = h[1], k = h[4];
                    if (j == k) {
                        k = ""
                    }
                    $("#hotelTo").val(j);
                    $("#hotelTo").attr("data", i);
                    if (d != j) {
                        $("#hotelKeyword").val(k);
                        d = j
                    }
                    g.hidePopup();
                    g.firstData = null
                });
                $(document).one("click", function () {
                    var h = g.firstData;
                    if (h) {
                        if (h.keyword) {
                            e.find(".city_suggest_item").eq(0).trigger("click")
                        }
                    } else {
                        if (h === "") {
                            f.val("");
                            f.attr("data", "")
                        }
                    }
                    g.firstData = null
                })
            }
        })
    };
    c.initForeignHotel = function () {
        var d = $("#hotelTo").val();
        b();
        $("#hotelTo").citySelect({
            drawHtml: function (e) {
                var f = "http://hotels.ctrip.com/international/Tool/citySource_J.aspx?charset=gb2312";
                $.getScript(f, function () {
                    var j = cQuery.jsonpResponse.suggestion.cities;
                    var l = [], s = [];
                    for (var p in j) {
                        var o = [], k = {}, g = j[p], q = g.length, m = 0, r = 0;
                        if (p != "热门") {
                            s.push("<li><span>" + p + "</span></li>");
                            o.push('<div class="city_item"><div></div>')
                        } else {
                            s.push('<li class="current"><span>' + p + "</span></li>");
                            o.push('<div class="city_item current"><div>')
                        }
                        for (; r < q; r++) {
                            var h = g[r];
                            o.push('<a href="javascript:void(0);" data="' + h.data + '">' + h.display + "</a>")
                        }
                        o.push("</div></div>");
                        l.push(o.join(""))
                    }
                    e({html: l.join(""), tabHtml: s.join("")})
                })
            }, eventControl: function (g) {
                var e = g.container, f = g.$element;
                e.find(".city_item a").click(function () {
                    var i = $.trim($(this).text());
                    var h = $(this).attr("data").split("|");
                    var j = h[2];
                    h[2] = h[3];
                    h[3] = j;
                    if (d != i) {
                        $("#hotelKeyword").val("");
                        f.val(i);
                        f.attr("data", h.join("|"));
                        d = i
                    }
                    g.blur()
                })
            }
        });
        $("#hotelTo").citySuggest({
            formatData: function (f, e) {
                var g = "http://hotels.ctrip.com/international/Tool/cityFilter.aspx?charset=gb2312&IsUseNewStyle=T&keyword=" + escape(f);
                $.getScript(g, function () {
                    var k = cQuery.jsonpResponse;
                    if (k && k.data) {
                        var j = k.data.split("@"), o = j.length, n = 0, l = [];
                        for (; n < o; n++) {
                            if (n != 0 && n != (o - 1)) {
                                var p = j[n], h = p.split("|"), m = {};
                                if (h.length > 0) {
                                    m.text = h[1];
                                    m.data = p;
                                    l.push(m)
                                }
                            }
                        }
                        e(l)
                    }
                })
            }, eventControl: function (g) {
                var e = g.container, f = g.$element;
                e.find(".city_suggest_item").click(function () {
                    var i = $(this).attr("data"), h = i.split("|"), j = h[1];
                    $("#hotelTo").val(j);
                    $("#hotelTo").attr("data", i);
                    if (d != j) {
                        $("#hotelKeyword").val("");
                        d = j
                    }
                    g.hidePopup();
                    g.firstData = null
                });
                $(document).one("click", function () {
                    var h = g.firstData;
                    if (h) {
                        e.find(".city_suggest_item").eq(0).trigger("click")
                    } else {
                        if (h === "") {
                            f.val("");
                            f.attr("data", "")
                        }
                    }
                    g.firstData = null
                })
            }
        })
    };

    function b() {
        var e = 7, d = 8;
        if (!INTERFACE.isChina) {
            e = 10;
            d = 15
        }
        $("#hotelStartDate").val(getDateStr(e));
        $("#hotelEndDate").val(getDateStr(d));
        $("#hotelStartDate,#hotelEndDate").calendar({
            callback: function (m, f) {
                var p = m.match(/-[\d]{1}\b/g), l = f.attr("id"), h = $("#hotelStartDate"), g = $("#hotelEndDate");
                if (p != null) {
                    for (var k = 0; k < p.length; k++) {
                        var o = p[k].replace("-", "-0");
                        m = m.replace(/-[\d]{1}\b/, o)
                    }
                }
                switch (l) {
                    case"hotelEndDate":
                        var n = h.val();
                        if (!checkDate(n, m)) {
                            m = getDateStr(1, n)
                        }
                        break;
                    case"hotelStartDate":
                        var j = g.val();
                        if (!checkDate(m, j)) {
                            g.val(getDateStr(1, m));
                            g.focus()
                        }
                        break
                }
                f.val(m)
            }
        });
        $("#hotelKeyword").placeholder();
        $("#cate_hotel .b_blue_s").click(function () {
            var g = $.trim($("#hotelTo").val());
            if (g == "") {
                $("#hotelTo").focus();
                return false
            }
            if ($("#hotelKeyword").val() == "酒店名/地标/商圈") {
                $("#hotelKeyword").val("")
            }
            var f = {
                destination: GS.xssFilter(g),
                destinationData: $("#hotelTo").attr("data") || "",
                startDate: $("#hotelStartDate").val(),
                endDate: $("#hotelEndDate").val(),
                hotelLevel: $("#cate_hotel .select-txt").attr("data-value") || 0,
                keyword: GS.xssFilter($.trim($("#hotelKeyword").val()))
            };
            INTERFACE.searchHotelFn(f)
        })
    }
})("SearchControl");
(function (b) {
    var a = this;
    b = a[b] = (a && a[b]) || {};
    b.initTicket = function () {
        $("#ticketText").placeholder();
        var d = null;
        var c = new CitySuggestFilter();
        $("#ticketText").citySuggest({
            formatData: function (f, e) {
                var g = "http://piao.ctrip.com/thingstodo-booking-bookingwebsite/api/AutoComplete?keyWords=" + f + "&pageIndex=1&count=10";
                $.ajax({
                    type: "GET", url: g, dataType: "jsonp", success: function (k) {
                        var m = k.KeyWords, o = k.SearchList, l = 0, n = o.length, h = [];
                        for (; l < n; l++) {
                            var j = o[l];
                            dataStr = j.ID + "|" + j.Name + "|" + j.ParentName + "|" + j.Type;
                            h.push({data: dataStr, left: j.Name, right: j.ParentName, text: j.Name, showRight: true})
                        }
                        e(h, true)
                    }
                })
            }, eventControl: function (g) {
                var e = g.container, f = g.$element;
                e.find(".city_suggest_item").click(function () {
                    var i = $(this).attr("data"), h = i.split("|"), j = h[1];
                    f.val(j).attr("data", i);
                    g.hidePopup()
                })
            }
        });
        $("#cate_ticket .b_blue_s").click(function () {
            var l = "http://piao.ctrip.com/", e = $("#ticketText"), g = e.attr("data"), i = $.trim(e.val());
            if (i == "" || i == "请输入景点名称") {
                $("#ticketText").focus();
                return false
            }
            var f = g.split("|"), h = f[0], j = f[3], k = "";
            if (j === "4") {
                k = l + "dest/t" + h + ".html"
            } else {
                k = l + "piao.html?keyword=" + encodeURIComponent(i)
            }
            window.open(k)
        })
    }
})("SearchControl");
(function (c) {
    var a = this;
    c = a[c] = (a && a[c]) || {};
    c.initTrain = function () {
        b();
        var f = null, g = null;

        function e(k) {
            var p = [], w = [];
            for (var s in k) {
                var r = [], o = {}, h = k[s], t = h.length, q = 0, u = 0;
                if (s != "热门") {
                    w.push("<li><span>" + s + "</span></li>");
                    for (; q < t; q++) {
                        var j = h[q], l = j.data.split("|")[2], m = l.substring(0, 1).toUpperCase();
                        if (m) {
                            if (o[m]) {
                                o[m] += '<a href="javascript:void(0);" data="' + j.data + '">' + j.display + "</a>"
                            } else {
                                o[m] = '<div class="city_item_in cf"><span class="city_item_letter">' + m + '</span><a href="javascript:void(0);" data="' + j.data + '">' + j.display + "</a>"
                            }
                        }
                    }
                    r.push('<div class="city_item">');
                    for (var v in o) {
                        o[v] += "</div>";
                        r.push(o[v])
                    }
                    r.push("</div>")
                } else {
                    w.push('<li class="current"><span>' + s + "</span></li>");
                    r.push('<div class="city_item current"><div>');
                    for (; u < t; u++) {
                        var j = h[u];
                        r.push('<a href="javascript:void(0);" data="' + j.data + '">' + j.display + "</a>")
                    }
                    r.push("</div></div>")
                }
                p.push(r.join(""))
            }
            return {html: p.join(""), tabHtml: w.join("")}
        }

        $("#trainFrom,#trainTo").citySelect({
            drawHtml: function (h) {
                if (f) {
                    h(e(f))
                } else {
                    var i = "http://webresource.ctrip.com/code/cquery/resource/address/train_new/station_gb2312.js";
                    $.ajax({
                        dataType: "script", scriptCharset: "gb2312", url: i, success: function () {
                            f = cQuery.jsonpResponse.suggestion;
                            g = cQuery.jsonpResponse.data;
                            h(e(f))
                        }
                    })
                }
            }, eventControl: function (j) {
                var h = j.container, i = j.$element;
                h.find(".city_item a").click(function () {
                    if (i.val() != $(this).text()) {
                        i.val($(this).text());
                        i.attr("data", $(this).attr("data"))
                    }
                    if (i.attr("id") == "trainFrom") {
                        $("#trainTo").trigger("click")
                    }
                    j.blur()
                })
            }
        });
        var d = new CitySuggestFilter({sort: ["^0$", "^1$", "^3+$", "^0", "^1", "^3+"]});
        $("#trainFrom,#trainTo").citySuggest({
            formatData: function (i, h) {
                h(d.getfilterData(g, i, false, false))
            }, eventControl: function (j) {
                var h = j.container, i = j.$element;
                h.find(".city_suggest_item").click(function (p) {
                    var n = $(this).attr("data"), k = n.split("|"), o = k[1], m = $.trim(k[0]), l = "|" + o + "|" + m;
                    i.val(o);
                    i.attr("data", l);
                    j.hidePopup();
                    if (i.attr("id") == "trainFrom") {
                        $("#trainTo").trigger("click")
                    }
                    j.firstData = null;
                    p.stopPropagation()
                });
                $(document).one("click", function () {
                    var o = j.firstData;
                    if (o) {
                        var k = o.data.split("|"), n = k[1], m = $.trim(k[0]), l = "|" + n + "|" + m;
                        i.val(o.text);
                        i.attr("data", l)
                    } else {
                        if (o === "") {
                            i.val("");
                            i.attr("data", "")
                        }
                    }
                    j.firstData = null
                })
            }
        })
    };

    function b() {
        var d = 7;
        if (!INTERFACE.isChina) {
            d = 10
        }
        $("#trainStartDate").val(getDateStr(d));
        $("#trainStartDate").calendar({
            callback: function (g, e) {
                var j = g.match(/-[\d]{1}\b/g);
                if (j != null) {
                    for (var f = 0; f < j.length; f++) {
                        var h = j[f].replace("-", "-0");
                        g = g.replace(/-[\d]{1}\b/, h)
                    }
                }
                e.val(g)
            }
        });
        $("#cate_train .radiobox").click(function () {
            var e = $(this).find("input[type='radio']");
            e.attr("checked", true);
            $(this).siblings(".radiobox").find("input[type='radio']").attr("checked", false)
        });
        $("#cate_train .changeinput a").click(function () {
            var e = $("#trainFrom"), f = $("#trainTo"), g = e.val();
            e.val(f.val());
            f.val(g);
            g = e.attr("data");
            e.attr("data", f.attr("data"));
            f.attr("data", g)
        });
        $("#cate_train .b_blue_s").click(function () {
            if ($.trim($("#trainFrom").val()) == "") {
                $("#trainFrom").focus();
                return false
            }
            if ($.trim($("#trainTo").val()) == "") {
                $("#trainTo").focus();
                return false
            }
            var e = {
                from: GS.xssFilter($.trim($("#trainFrom").val())),
                fromData: $("#trainFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#trainTo").val())),
                destinationData: $("#trainTo").attr("data") || "",
                startDate: $("#trainStartDate").val()
            };
            INTERFACE.searchTrainFn(e)
        })
    }
})("SearchControl");
var Cmd = {};
(function (c) {
    var a = this;
    c = a[c] = (a && a[c]) || {};
    c.initTravel = function () {
        b();
        var f = $("#travelFrom").attr("data") || 2, g = {};
        var e = {
            "热门城市": [{display: "北京", data: "1"}, {display: "上海", data: "2"}, {
                display: "天津",
                data: "3"
            }, {display: "重庆", data: "4"}, {display: "哈尔滨", data: "5"}, {display: "大连", data: "6"}, {
                display: "青岛",
                data: "7"
            }, {display: "西安", data: "10"}, {display: "敦煌", data: "11"}, {display: "南京", data: "12"}],
            ABCD: {
                B: [{display: "北京", data: "1"}, {display: "包头", data: "141"}],
                C: [{display: "重庆", data: "4"}, {display: "成都", data: "28"}, {
                    display: "长春",
                    data: "158"
                }, {display: "长沙", data: "206"}, {display: "常州", data: "213"}],
                D: [{display: "大连", data: "6"}, {display: "东莞", data: "223"}]
            },
            EFGH: {
                F: [{display: "佛山", data: "251"}, {display: "福州", data: "258"}],
                G: [{display: "广州", data: "32"}, {display: "贵阳", data: "38"}],
                H: [{display: "哈尔滨", data: "5"}, {display: "杭州", data: "17"}, {
                    display: "海口",
                    data: "42"
                }, {display: "呼和浩特", data: "103"}, {display: "海拉尔", data: "142"}, {display: "合肥", data: "278"}]
            },
            JKLM: {
                J: [{display: "济南", data: "144"}, {display: "江门", data: "316"}],
                K: [{display: "昆明", data: "34"}, {display: "喀什市", data: "109"}],
                L: [{display: "丽江", data: "37"}, {display: "拉萨", data: "41"}, {display: "兰州", data: "100"}],
                M: [{display: "绵阳", data: "370"}]
            },
            NOPQRS: {
                N: [{display: "南京", data: "12"}, {display: "南通", data: "82"}, {
                    display: "宁波",
                    data: "375"
                }, {display: "南昌", data: "376"}, {display: "南宁", data: "380"}],
                Q: [{display: "青岛", data: "7"}, {display: "泉州", data: "406"}],
                S: [{display: "上海", data: "2"}, {display: "苏州", data: "14"}, {
                    display: "深圳",
                    data: "30"
                }, {display: "三亚", data: "43"}, {display: "石家庄", data: "428"}, {
                    display: "汕头",
                    data: "447"
                }, {display: "沈阳", data: "451"}]
            },
            TUVWX: {
                T: [{display: "天津", data: "3"}, {display: "太原", data: "105"}, {display: "台州", data: "578"}],
                W: [{display: "无锡", data: "13"}, {display: "乌鲁木齐", data: "39"}, {
                    display: "武汉",
                    data: "477"
                }, {display: "威海", data: "47"}, {display: "温州", data: "491"}],
                X: [{display: "西安", data: "10"}, {display: "厦门", data: "25"}, {
                    display: "西宁",
                    data: "124"
                }, {display: "西昌", data: "494"}, {display: "徐州", data: "512"}]
            },
            YZ: {
                Y: [{display: "银川", data: "99"}, {display: "运城", data: "140"}, {
                    display: "延吉",
                    data: "523"
                }, {display: "榆林", data: "527"}, {display: "烟台", data: "533"}, {display: "义乌", data: "536"}],
                Z: [{display: "珠海", data: "31"}, {display: "中山", data: "553"}, {display: "郑州", data: "559"}]
            }
        };
        $("#travelFrom,#travelPlayFrom").citySelect({
            drawHtml: function (j) {
                var p = [], v = [];
                var l = e;
                for (var s in l) {
                    var r = [];
                    if (s != "热门城市") {
                        v.push("<li><span>" + s + "</span></li>");
                        r.push('<div class="city_item">');
                        var o = l[s];
                        for (var m in o) {
                            var h = o[m], t = h.length, q = 0;
                            r.push('<div class="city_item_in cf"><span class="city_item_letter">' + m + "</span>");
                            for (; q < t; q++) {
                                var k = h[q];
                                r.push('<a href="javascript:void(0);" data="' + k.data + '">' + k.display + "</a>")
                            }
                            r.push("</div>")
                        }
                        r.push("</div>")
                    } else {
                        var h = l[s], t = h.length, u = 0;
                        v.push('<li class="current"><span>' + s + "</span></li>");
                        r.push('<div class="city_item current"><div>');
                        for (var u = 0; u < t; u++) {
                            var k = h[u];
                            r.push('<a href="javascript:void(0);" data="' + k.data + '">' + k.display + "</a>")
                        }
                        r.push("</div></div>")
                    }
                    p.push(r.join(""))
                }
                j({html: p.join(""), tabHtml: v.join("")})
            }, eventControl: function (j) {
                var h = j.container, i = j.$element;
                h.find(".city_item a").click(function () {
                    if (i.val() != $(this).text()) {
                        i.val($(this).text());
                        i.attr("data", $(this).attr("data"))
                    }
                    if (i.attr("id") == "travelFrom") {
                        f = $(this).attr("data") || 2
                    } else {
                        if (i.attr("id") == "travelPlayFrom") {
                            var k = $(this).attr("data") || 2;
                            INTERFACE.travelPlaySearch(k)
                        }
                    }
                    j.blur()
                })
            }
        });
        var d = new CitySuggestFilter();
        $("#travelTo").citySuggest({
            cannotToCache: true, formatData: function (i, h) {
                if (g[f]) {
                    data = g[f];
                    h(d.getfilterData(data, i, false, false))
                } else {
                    var j = "http://vacations.ctrip.com/booking/PageTools/HomeStatic/DestSelector2013.ashx?startCity=" + f;
                    $.getScript(j, function () {
                        var k = Cmd.JsonPData;
                        if (k) {
                            g[f] = k;
                            h(d.getfilterData(k, i, false, false))
                        }
                    })
                }
            }, eventControl: function (j) {
                var h = j.container, i = j.$element;
                h.find(".city_suggest_item").click(function () {
                    var l = $(this).attr("data"), k = l.split("|"), m = k[1];
                    i.val(m);
                    j.hidePopup()
                })
            }
        })
    };

    function b() {
        $("#cate_travel .radiobox").click(function () {
            var d = $(this).find("input[type='radio']");
            d.attr("checked", true);
            $(this).parents(".checkul").find(".radiobox").not(this).find("input[type='radio']").attr("checked", false)
        });
        $("#cate_travel .b_blue_s").click(function () {
            if ($.trim($("#travelTo").val()) == "") {
                $("#travelTo").focus();
                return false
            }
            var d = {
                from: $.trim($("#travelFrom").val()),
                fromData: $("#travelFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#travelTo").val())),
                destinationData: $("#travelTo").attr("data") || ""
            };
            INTERFACE.searchTravelFn(d)
        })
    }
})("SearchControl");

function createInfoHtml(e) {
    var g = "_blank";
    var c = {1: "hotel", 2: "restaurant", 3: "sight", 4: "destination", 5: "shopping", 6: "amusement"};
    var a = [];
    var h = e.type;
    var f = function (k, j) {
        return k
    };
    var d = function (l, m) {
        var k = "";
        if (l.photoUrl != "") {
            k = '<img src="' + l.photoUrl + '" alt="">'
        }
        m = m || l.url;
        return '<a target="' + g + '" href="' + m + '" class="poipic">' + k + "</a>"
    };
    var b = function (l) {
        var k = "";
        if (l.rstar > 0) {
            k = '<span class="hotel_stars0' + l.rstar + '" title="' + l.hotelStarTitle + '"></span>'
        } else {
            k = '<span class="hotel_diamond0' + l.customerEval + '" title="' + l.hotelDiamondTitle + '"></span>'
        }
        return k
    };
    a.push('<div class="gs_poi_pop_outer cf" style="position: absolute;top:20px;left:50px;"><div class="gs_poi_pop cf"><a class="btn_close" href="#">×</a>');
    switch (h) {
        case 4:
            a.push(d(e));
            a.push('<dl class="cf">');
            return;
        case 1:
            a.push(d(e, createCTM(e.url, "mapCard", "hotel", "Image")));
            a.push('<dl class="cf">');
            a.push('<dt><i class="' + c[h] + '"></i><a target="' + g + '" href="' + createCTM(e.url, "mapCard", "hotel", "Text") + '">' + e.name + "</a></dt>");
            if (e.price > 0) {
                a.push("<dd>" + b(e) + "</dd>");
                a.push("<dd>" + e.address + "</dd>");
                a.push("<dd><b>" + e.score + "</b>/5分 源自" + e.commentCount + "位住客点评</dd>");
                a.push('<dd><a target="' + g + '" href="' + createCTM(e.bookUrl, "mapCard", "hotel", "button") + '" class="b_orange_s">立即预订</a><span class="price">¥<em>' + e.price + "</em>起</span></dd>")
            } else {
                if (e.commentCount != 0) {
                    a.push('<dd> <span class="starlist_12"> <span style="width:' + (e.score / 5) * 100 + '%;"> </span> </span>' + e.commentCount + "条点评</dd>")
                } else {
                    a.push("<dd>暂无点评</dd>")
                }
                a.push("<dd>" + e.address + "</dd>");
                a.push('<dd><a target="' + g + '" href="' + createCTM(e.url, "mapCard", "hotel", "button") + '" class="b_blue_s">查看详情</a></dd>')
            }
            break;
        case 2:
            a.push(d(e));
            a.push('<dl class="cf">');
            a.push('<dt><i class="' + c[h] + '"></i><a target="' + g + '" href="' + e.url + '">' + e.name + "</a></dt>");
            if (e.averagePrice == "0") {
                e.averagePrice = "暂无"
            } else {
                e.averagePrice = '<span class="price">' + e.averagePrice + "</span>元"
            }
            if (e.commentCount != 0) {
                a.push('<dd> <span class="starlist_12"> <span style="width:' + (e.score / 5) * 100 + '%;"> </span> </span>' + e.commentCount + '条点评<span class="g_line">|</span>人均：' + e.averagePrice + "</dd>")
            } else {
                a.push("<dd>暂无点评</dd>")
            }
            a.push("<dd>" + e.address + "</dd>");
            a.push('<dd><a target="' + g + '" href="' + e.url + '" class="b_blue_s">查看详情</a></dd>');
            break;
        case 3:
            a.push(d(e, createCTM(e.url, "mapCard", "tkt", "Image", e.poiId)));
            a.push('<dl class="cf">');
            a.push('<dt><i class="' + c[h] + '"></i><a target="' + g + '" href="' + createCTM(e.url, "mapCard", "tkt", "Text", e.poiId) + '">' + e.name + "</a></dt>");
            if (e.commentCount != 0) {
                a.push('<dd> <span class="starlist_12"> <span style="width:' + (e.score / 5) * 100 + '%;"> </span> </span> ' + e.commentCount + "条点评</dd>")
            } else {
                a.push("<dd>暂无点评</dd>")
            }
            a.push("<dd>" + e.address + "</dd>");
            if (e.price == 0) {
                a.push('<dd><a target="' + g + '" href="' + createCTM(e.url, "mapCard", "tkt", "button", e.poiId) + '" class="b_blue_s">查看详情</a></dd>')
            } else {
                a.push('<dd><a target="' + g + '" href="' + createCTM(e.url, "mapCard", "tkt", "button", e.poiId) + '" class="b_orange_s">立即预订</a><span class="price">¥<em>' + e.price + '</em></span><span class="delspace">市场价：<del>¥' + e.marketPrice + "</del></span></dd>")
            }
            break;
        case 5:
            a.push(d(e));
            a.push('<dl class="cf">');
            a.push('<dt><i class="' + c[h] + '"></i><a target="' + g + '" href="' + e.url + '">' + e.name + "</a></dt>");
            if (e.averagePrice == "0") {
                e.averagePrice = "暂无"
            } else {
                e.averagePrice = '<span class="price">' + e.averagePrice + "</span>元"
            }
            if (e.commentCount != 0) {
                a.push('<dd> <span class="starlist_12"> <span style="width:' + (e.score / 5) * 100 + '%;"> </span> </span>' + e.commentCount + '条点评<span class="g_line">|</span>人均：' + e.averagePrice + "</dd>")
            } else {
                a.push("<dd>暂无点评</dd>")
            }
            a.push("<dd>" + e.address + "</dd>");
            a.push('<dd><a target="' + g + '" href="' + e.url + '" class="b_blue_s">查看详情</a></dd>');
            break;
        case 6:
            a.push(d(e));
            a.push('<dl class="cf">');
            a.push('<dt><i class="' + c[h] + '"></i><a target="' + g + '" href="' + e.url + '">' + e.name + "</a></dt>");
            if (e.commentCount != 0) {
                a.push('<dd> <span class="starlist_12"> <span style="width:' + (e.score / 5) * 100 + '%;"></span></span> ' + e.commentCount + "条点评</dd>")
            } else {
                a.push("<dd>暂无点评</dd>")
            }
            a.push("<dd>" + e.address + "</dd>");
            if (e.price > 0) {
                a.push('<dd><a target="' + g + '" href="' + f(e.ticketbookUrl, "Tkt") + '" class="b_orange_s">立即预订</a><span class="price">¥<em>' + e.price + '</em></span><span class="delspace">市场价：<del>¥' + e.marketPrice + "</del></span></dd>")
            }
            break
    }
    a.push("</dl>");
    a.push('<s class="bot_arrow"></s></div></div>');
    return a.join("")
}

function Coord(a, b) {
    this.Lat = a;
    this.Lng = b
}

var mapCoords = [];
var HotelMap = function () {
    var e = this;
    var f = null;
    var c = null;
    var g = null;
    var b = null;
    var a = 0;
    var d = {};
    this.createPanel = function () {
        g = new TabPanel();
        b = new ItemPanel()
    };
    this.addTabListener = function () {
        g.addEventListener("changeArea", function (j, h, k) {
            e.changeDescription(j);
            INTERFACE.getHotelData(h, 1, function (m) {
                b.loadData(m);
                var n = 0;
                mapCoords = [];
                for (; n < m.result.length; n++) {
                    var l = m.result[n];
                    mapCoords.push(new Coord(l.lat, l.lng))
                }
                if (c) {
                    c.addCurrentPageHotel(m.result)
                }
            })
        })
    };
    this.addItemListener = function () {
        b.addEventListener("doPage", function (j) {
            var h = g.getCurrentAreaParam();
            INTERFACE.getHotelData(h, j, function (l) {
                if (l && l.result) {
                    mapCoords = [];
                    for (; i < l.result.length; i++) {
                        var k = l.result[i];
                        mapCoords.push(new Coord(k.lat, k.lng))
                    }
                    b.addCurrentPageItem(l.result);
                    c.addCurrentPageHotel(l.result)
                }
            })
        });
        b.addEventListener("itemClick", function (h) {
            c.openInfo(h)
        });
        b.addEventListener("itemMouseenter", function (h) {
            c.markerMouseenter(h)
        });
        b.addEventListener("itemMouseleave", function (h) {
            c.markerMouseleave(h)
        })
    };
    this.addMapListener = function () {
        c.addEventListener("openInfo", function (h) {
            b.checkedItem(h)
        });
        c.addEventListener("closeInfo", function (h) {
            b.lossItem(h)
        });
        c.addEventListener("markerMouseenter", function (h) {
            b.itemMouseenter(h)
        });
        c.addEventListener("markerMouseleave", function (h) {
            b.itemMouseleave(h)
        })
    };
    this.changeDescription = function (j) {
        var h = $(".mapbox .description");
        h.fadeOut("slow");
        h.eq(j).fadeIn("slow")
    };
    this.setMainSize = function () {
        var j = $(window).height() - $(".map_header").outerHeight() - $(".map_tab").outerHeight() - $(".map_nav").outerHeight() - 60;
        var k = j;
        var h = $(".map_main");
        if ($(".pager").css("display") == "block") {
            k = j - $(".pager").height()
        }
        h.height(j);
        h.find(".sidebox").height(k)
    };
    this.resize = function () {
        $(window).resize(function () {
            clearTimeout(f);
            f = setTimeout(e.setMainSize, 200)
        })
    };
    this.firstLoadData = function () {
        g.firstChangeArea()
    };
    this.addSightListener = function () {
        $(".chkrestaurant").on("change", function () {
            if ($(this).attr("checked")) {
                var h = g.getSightData();
                c.addSights(h)
            } else {
                c.removeSights()
            }
        })
    };
    this.init = function () {
        e.createPanel();
        e.setMainSize();
        e.resize();
        e.addTabListener();
        e.firstLoadData()
    };
    this.initMap = function () {
        var h = b.getCurrentPageData();
        if (h && h.length > 0) {
            c.init(h[0].lng, h[0].lat)
        } else {
            c.init(121.491706848145, 31.227466583252)
        }
        if (h && h.length > 0) {
            c.addCurrentPageHotel(b.getCurrentPageData())
        }
        e.addItemListener();
        e.addMapListener();
        e.addSightListener()
    };
    this.createMap = function () {
        c = new MapPanel({
            getInfoHtml: function (j, h) {
                h(createInfoHtml(j))
            }, getSightInfo: function (j, h) {
                INTERFACE.getSightInfo(j, function (k) {
                    h(createInfoHtml(k))
                })
            }
        });
        staticMap = c.mapper;
        a++;
        if (a === 2) {
            e.initMap()
        }
    }
};
var staticMap = null;
var hotelMap = null;

function initMaper() {
    hotelMap.createMap()
}

$(function () {
    hotelMap = new HotelMap();
    hotelMap.init();
    var a = "http://api.map.baidu.com/api?v=2.0&ak=FnL3GE3mocMaGdAUIheP5pFm";
    var b = a;
    var c = INTERFACE.MAPTYPE;
    switch (c) {
        case"baidu":
            b = a;
            break
    }
    loadScript(b, "initMaper");
    $(".description .icon_des_close").on("click", function () {
        var d = $(this).parents(".description");
        d.fadeOut("slow")
    })
});

function loadScript(b, a) {
    var c = document.createElement("script");
    c.type = "text/javascript";
    if (a != "") {
        b += "&callback=" + a
    }
    c.src = b;
    document.body.appendChild(c)
};var MapPanel = function (a) {
    var h = this, e = null, d = new GS.HashMap(), c = [], i = [], a = a || {}, b = false, g = [],
        f = a.mapInnerId || "hotelMapInner";
    $.extend(this, new GS.Event());
    this.addEvents(["markerMouseenter", "markerMouseleave", "openInfo", "closeInfo"]);
    this.getMaper = function () {
        if (e) {
            return e
        } else {
            return
        }
    };
    this.init = function (k, j) {
        if (k && j) {
            e = new BMap.Map(f);
            staticMap = e;
            var l = new BMap.Point(k, j);
            e.centerAndZoom(l, 10);
            e.enableAutoResize();
            e.enableScrollWheelZoom()
        }
    };
    this.getPoints = function () {
        return g
    };
    this.addCurrentPageHotel = function (j) {
        if (c.length > 0) {
            e.clearOverlays()
        }
        c = [];
        d.clear();
        points = [];
        var r = j.length, o = 0;
        for (; o < r; o++) {
            var v = o + 1, l = j[o], p = l.id, u = l.name, s = l.lng, q = l.lat, n = [];
            if (s && q && s != "" && q != "") {
                d.put(p, l);
                n.push('<a class="maps_mark map_mark_hotel" id="marker' + p + '" href="javascript:;" title="' + u + '" data-latlng="' + q + "," + s + '">');
                n.push("   <i>" + v + "</i>");
                n.push('   <em class="ellipsis">' + u + "</em>");
                n.push("</a>");
                var m = {id: p, lng: s, lat: q, markerHtml: n.join("")};
                h.addHotel(m);
                points.push(new BMap.Point(s, q))
            }
        }
        g = points;
        var w = e.getViewport(points);
        var t = w.zoom;
        var k = w.center;
        e.centerAndZoom(k, t);
        e.setZoom()
    };
    this.infoWindow = null;
    this.showInfowWindow = function (j, m) {
        var k = j.attr("id");
        $(".map_marker").removeClass("current");
        var l = d.get(k);
        a.getInfoHtml(l, function (n) {
            if (n == null || n == undefined) {
                return
            }
            j.addClass("current");
            e.removeOverlay(h.infoWindow);
            h.infoWindow = new BMap.Label(n, {position: m, offset: {width: -265, height: -190}});
            h.infoWindow.setZIndex(99999);
            e.addOverlay(h.infoWindow);
            $(document).find(".btn_close").click(function (o) {
                e.removeOverlay(h.infoWindow);
                j.removeClass("current");
                h.fireEvent("closeInfo", k);
                o.stopPropagation()
            })
        })
    };
    this.addHotel = function (j) {
        c.push(j.id);
        var m = new BMap.Point(j.lng, j.lat);
        var l = new BMap.Label(j.markerHtml, {position: m});
        l.setStyle({border: "0", padding: "0"});
        l.addEventListener("click", function (o) {
            var p = $(o.target.content).attr("id");
            var n = $("#" + p);
            h.showInfowWindow(n, m)
        });
        e.addOverlay(l);
        var k = j.id;
        $("#" + k).on("mouseenter", function () {
            var n = $("#marker" + k);
            n.addClass("active");
            new MarkerAnimate(n)
        }).on("mouseleave", function () {
            var n = $("#marker" + k);
            n.removeClass("active")
        })
    };
    this.openInfo = function (j) {
        $("#marker" + j).trigger("click.open-info")
    };
    this.markerMouseenter = function (k) {
        var j = $("#marker" + k);
        j.addClass("active");
        new MarkerAnimate(j)
    };
    this.markerMouseleave = function (k) {
        var j = $("#marker" + k);
        j.removeClass("active")
    };
    this.clearPolygon = function () {
        b = false
    }
};
var ItemPanel = function () {
    var f = this;
    var g = null;
    var a = $(".map_side");
    var d = a.find(".nearby_box");
    var b = a.find(".listbox");
    var c = b.find(".nearby_pager");
    var e = [];
    $.extend(this, new GS.Event());
    this.addEvents(["doPage", "itemMouseenter", "itemMouseleave", "itemClick"]);
    this.addItemEvent = function (h) {
        var i = h.attr("data-id");
        h.on("mouseenter", function () {
            f.fireEvent("itemMouseenter", i)
        }).on("mouseleave", function () {
            f.fireEvent("itemMouseleave", i)
        });
        h.on("click", function (j) {
            if (!$(j.target).is("a")) {
                b.find(".item").removeClass("current");
                $(this).addClass("current");
                f.fireEvent("itemClick", i)
            }
        })
    };
    this.checkedItem = function (h) {
        b.find(".item").removeClass("current");
        b.find("a[data-id=" + h + "]").addClass("current")
    };
    this.lossItem = function (h) {
        b.find("a[data-id=" + h + "]").removeClass("current")
    };
    this.itemMouseenter = function (h) {
        b.find("a[data-id=" + h + "]").addClass("active")
    };
    this.itemMouseleave = function (h) {
        b.find("a[data-id=" + h + "]").removeClass("active")
    };
    this.addEmptyItem = function () {
        b.append("<a class='empty'>啊哦，这附近没有发现酒店。</a>")
    };
    this.addItem = function (j, l) {
        var k = [];
        var h = null;
        var m = j.url;
        var i = j.commentCount;
        if (i) {
            i = i + "条点评"
        } else {
            i = "暂无点评"
        }
        k.push("<div class='item_dev'>");
        k.push(" <a href='" + m + "' target='_blank' data-id=" + j.id + " id=" + j.id + " class='item cf' title='" + j.name + "'>");
        k.push("     <i class='icon_marker marker_number_hotel'>" + l + "</i>");
        k.push("     <dl>");
        k.push("         <dt>" + j.name + "</dt>");
        k.push("         <dd>");
        if (j.score && j.score != "0") {
            k.push('         <span class="score">' + j.score + "分</span>")
        }
        k.push('             <span class="distance">' + i + "</span>");
        k.push("         </dd>");
        k.push("         <dd>");
        if (j.price > 0) {
            k.push('         <span class="price">¥<strong>' + j.price + "</strong>起</span>")
        } else {
            k.push('         <span class="price">实时计价</span>')
        }
        k.push("         </dd>");
        k.push("     </dl>");
        k.push(" </li>");
        k.push("</div>");
        h = $(k.join(""));
        b.append(h);
        f.addItemEvent(h)
    };
    this.addItems = function (h) {
        var k = h.length;
        var j = 0;
        if (k === 0) {
            f.addEmptyItem()
        } else {
            for (; j < k; j++) {
                f.addItem(h[j], j + 1)
            }
        }
    };
    this.addCurrentPageItem = function (h) {
        e = h;
        f.addItems(h)
    };
    this.addPagingListener = function () {
        g.addEventListener("paging", function (h, i) {
            f.loading();
            f.fireEvent("doPage", h)
        })
    };
    this.getCurrentPageData = function () {
        return e
    };
    this.clear = function () {
        b.html("").show()
    };
    this.loading = function () {
        b.html("").show()
    };
    this.loadData = function (h) {
        e = h.result;
        f.clear();
        var j = parseInt(h.total, 10);
        var i = 5;
        g = new Pager({total: j, perPageNum: i});
        f.addPagingListener();
        this.addItems(e)
    }
};
var TabPanel = function () {
    var c = this, b = 0, a = $(".links");
    $.extend(c, new GS.Event());
    this.addEvents(["changeArea"]);
    this.changeArea = function () {
        a.find("a").on("click", function () {
            var d = $(this);
            var e = d.attr("data-id");
            if (e != c.curId) {
                a.find("a.cur").removeClass("cur");
                $(this).addClass("cur");
                c.curId = e;
                c.fireEvent("changeArea", d.index(), d.data(), false)
            }
        })
    };
    this.getCurrentAreaParam = function () {
        var d = a.find("a.cur");
        return d.data()
    };
    this.firstChangeArea = function () {
        var d = a.find("a.cur");
        c.fireEvent("changeArea", d.index(), d.data(), true)
    };
    this.init = function () {
        this.changeArea()
    };
    this.init()
};
(function (a) {
    var b = this;
    a = b[a] = (b && b[a]) || {};
    a.HashMap = function () {
        var d = 0, c = new Object();
        this.put = function (e, f) {
            if (!this.containsKey(e)) {
                c[e] = f;
                d++
            }
        };
        this.get = function (e) {
            return this.containsKey(e) ? c[e] : null
        };
        this.remove = function (e) {
            if (this.containsKey(e) && (delete c[e])) {
                d--
            }
        };
        this.containsKey = function (e) {
            return (e in c)
        };
        this.containsValue = function (f) {
            for (var e in c) {
                if (c[e] == f) {
                    return true
                }
            }
            return false
        };
        this.values = function () {
            var f = [];
            for (var e in c) {
                f.push(c[e])
            }
            return f
        };
        this.keys = function () {
            var e = [];
            for (var f in c) {
                e.push(f)
            }
            return e
        };
        this.size = function () {
            return d
        };
        this.clear = function () {
            d = 0;
            c = new Object()
        }
    };
    a.Event = function () {
        var i = function (m, o) {
            if (isNaN(o) || o > m.length) {
                return false
            }
            for (var p = 0, q = 0; p < m.length; p++) {
                if (m[p] != m[o]) {
                    m[q++] = m[p]
                }
            }
            m.length -= 1
        };
        var h = function (n, m) {
            return function () {
                n.apply(null, m)
            }
        };
        var j = function (m, q) {
            var n = -1;
            for (var p = 0; p < m.length; p++) {
                var o = m[p];
                if (o.id == q) {
                    n = p;
                    break
                }
            }
            if (n > -1) {
                i(m, n)
            }
            return m
        };
        var g = this;
        var l = new a.HashMap();
        var d = new a.HashMap();
        var c = 0;
        var k = 0;
        var e = [];
        var f = function (m) {
            for (var n = 0; n < e.length; n++) {
                if (m == e[n]) {
                    return true
                }
            }
            return false
        };
        this.addEvents = function (m) {
            if (m instanceof Array) {
                var p = m.length, o = 0;
                for (; o < p; o++) {
                    var n = m[o];
                    if (!f(n)) {
                        e.push(n)
                    }
                }
            } else {
                if (!f(m)) {
                    e.push(m)
                }
            }
        };
        this.removeEvent = function (n) {
            var m = -1;
            for (var p = 0; p < e.length; p++) {
                var o = e[p];
                if (o == n) {
                    m = p;
                    break
                }
            }
            if (m > -1) {
                i(e, m);
                i(d, n);
                i(l, n)
            }
        };
        this.on = function (n, o, q, p) {
            var p = p;
            if (f(n)) {
                var r;
                var m = {fn: o};
                if (q) {
                    r = d.get(n);
                    if (r) {
                        m.id = p ? p : n + "_async_" + (++c);
                        r.push(m)
                    } else {
                        m.id = p ? p : n + "_async_0";
                        r = [m]
                    }
                    d.put(n, r)
                } else {
                    r = l.get(n);
                    if (r) {
                        m.id = p ? p : n + "_sync_" + (++k);
                        r.push(m)
                    } else {
                        m.id = p ? p : n + "_sync_0";
                        r = [m]
                    }
                    l.put(n, r)
                }
                p = m.id
            }
            return p
        };
        this.addEventListener = this.on;
        this.un = function (n, o) {
            if (!f(n)) {
                return
            }
            var p = l.get(n);
            var m = d.get(n);
            if (m) {
                l.put(n, j(m, o))
            }
            if (p) {
                l.put(n, j(p, o))
            }
        };
        this.removeEventListener = this.un;
        this.fireEvent = function () {
            var p = arguments[0];
            var m = [].slice.call(arguments, 1);
            if (!f(p)) {
                return
            }
            var r = l.get(p);
            var n = d.get(p);
            if (n) {
                for (var q = 0; q < n.length; q++) {
                    var o = n[q];
                    setTimeout(h(o.fn, m), 0)
                }
            }
            if (r) {
                for (var q = 0; q < r.length; q++) {
                    var o = r[q];
                    o.fn.apply(null, m)
                }
            }
        }
    }
})("GS");

function MarkerAnimate(a) {
    var c = [-30, 0], f = [160, 160], b = c.length, d = 0;

    function e() {
        var g = c[d], h = f[d];
        a.animate({top: g}, h, function () {
            ++d;
            if (d < b) {
                e(a)
            }
        })
    }

    e()
};var Pager = function (b) {
    var d = this;
    var h = 1;
    var c = {perPageNum: 5, total: 0, pageNum: 1};
    var a = $(".map_side .nearby_box .nearby_pager");
    b = $.extend(c, b);
    var e = b.pageNum;
    var f = b.perPageNum;
    var g = b.total;
    $.extend(this, new GS.Event());
    this.addEvents(["paging"]);
    this.arrowControl = function () {
        if (e === 1) {
            a.find(".page_prev").addClass("gray");
            a.find(".page_next").removeClass("gray")
        } else {
            if (e === h) {
                a.find(".page_next").addClass("gray");
                a.find(".page_prev").removeClass("gray")
            } else {
                a.find(".page_prev").removeClass("gray");
                a.find(".page_next").removeClass("gray")
            }
        }
    };
    this.addPageEvent = function () {
        a.find(".page_num").on("click", function () {
            var i = $(this);
            if (!i.hasClass("active")) {
                e = parseInt(i.text(), 10);
                a.find(".page_num.active").removeClass("active");
                a.find(".page_num").eq(e - 1).addClass("active");
                d.fireEvent("paging", e, f);
                d.arrowControl()
            }
        });
        a.find(".page_next").on("click", function () {
            var k = $(this);
            if (!k.hasClass("gray")) {
                var i = a.find(".page_num.active");
                var j = i.next(".page_num");
                e++;
                if (a.find(".page_num").eq(e - 6).length > 0) {
                    a.find(".page_num").eq(e - 6).hide()
                }
                i.removeClass("active");
                j.addClass("active").show();
                if (j.next(".page_num").length === 0) {
                    k.addClass("gray")
                }
                d.fireEvent("paging", e, f);
                d.arrowControl()
            }
        });
        a.find(".page_prev").on("click", function () {
            var k = $(this);
            if (!k.hasClass("gray")) {
                var i = a.find(".page_num.active");
                var j = i.prev(".page_num");
                e--;
                if (a.find(".page_num").eq(e + 4).length > 0) {
                    a.find(".page_num").eq(e + 4).hide()
                }
                i.removeClass("active");
                j.addClass("active").show();
                if (j.prev(".page_num").length === 0) {
                    k.addClass("gray")
                }
                d.fireEvent("paging", e, f);
                d.arrowControl()
            }
        })
    };
    this.clear = function () {
        a.html("")
    };
    this.createPage = function () {
        var j = [];
        var l = "";
        for (var k = 0; k < h; k++) {
            if (k === 0) {
                j.push('<a class="page_num active" href="javascript:;">' + (k + 1) + "</a>")
            } else {
                if (k < 5) {
                    j.push('<a class="page_num" href="javascript:;">' + (k + 1) + "</a>")
                } else {
                    j.push('<a class="page_num" style="display:none;" href="javascript:;">' + (k + 1) + "</a>")
                }
            }
        }
        l = j.join("");
        if (h > 5) {
            l = '<a class="page_prev gray" href="javascript:;"><</a>' + l + '<a class="page_next" href="javascript:;">></a>'
        }
        a.append(l)
    };
    this.pagingToFirst = function () {
        d.fireEvent("paging", 1, f)
    };
    this.init = function () {
        h = Math.ceil(g / f);
        d.clear();
        var i = $(".map_side .sidebox");
        var j = $(window).height() - $(".map_header").outerHeight() - $(".map_tab").outerHeight() - $(".map_nav").outerHeight() - 60;
        if (h > 1) {
            var k = j - a.height();
            i.height(k);
            d.createPage();
            d.addPageEvent();
            a.show()
        } else {
            i.height(j);
            a.hide()
        }
    };
    this.init()
};