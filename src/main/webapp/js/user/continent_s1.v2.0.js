/* 2015-07-28 13:49:26 fangluo */
(function (b) {
    b.pageEventBind = function () {
        function a(a, e, g) {
            "" == a || "0" == a || a > e || /\D/g.test(a) ? (g.val(""), c(g)) : b.pageLinkJump && b.pageLinkJump(a, g)
        }

        function c(a) {
            var b = a.clone(), c = a.offset(), f = 0;
            a.css("visibility", "hidden");
            b.css({
                position: "absolute",
                top: c.top + "px",
                left: c.left + "px",
                width: "18px",
                height: "16px",
                border: "1px solid #ccc"
            }).appendTo("body");
            var h = setInterval(function () {
                f++;
                b.css({top: c.top + 2 * Math.sin(f) + "px", left: c.left + 1 * Math.cos(f) + "px"});
                15 == f && (clearInterval(h), a.css("visibility", "visible"),
                    b.remove())
            }, 30)
        }

        b(".pager_v1").each(function () {
            var c = parseInt(b(this).find(".numpage").text()), e = b(this).find("span input");
            e.on("keyup", function (g) {
                var f = b(this).val();
                /\D/g.test(f) && b(this).val("");
                13 == g.keyCode && a(f, c, e)
            }).parent("span").siblings(".gopage").on("click", function () {
                var b = e.val();
                a(b, c, e)
            })
        })
    };
    b.pageEventBind()
})(jQuery);
var CarouselSlide = function (b, a) {
    var c = $(b);
    this.$element = c;
    this.options = a;
    var d = this, e = c.find("[data-indicators]"), g = a.eventType;
    e.find("[data-slip-to]").bind(g, function () {
        d.slide($(this).index())
    });
    this.options.interval && (d.cycle(), e.add(c.find("[data-inner]")).on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this)))
};
CarouselSlide.prototype = {
    cycle: function (b) {
        function a() {
            c.slide(e)
        }

        b || (this.paused = !1);
        this.cycleTimer && clearInterval(this.cycleTimer);
        var c = this;
        b = this.$element.find("[data-indicators]:visible").find("[data-slip-to]");
        var d = b.length, e = b.siblings(".current").index(), e = e === d - 1 ? 0 : ++e;
        this.options.interval && !this.paused && (this.cycleTimer = setInterval(a, this.options.interval));
        return this
    }, pause: function (b) {
        b || (this.paused = !0);
        this.cycle(!0);
        clearInterval(this.cycleTimer);
        this.cycleTimer = null;
        return this
    },
    slide: function (b) {
        var a = this.$element.find("[data-indicators]:visible"), c = this.$element.find("[data-inner]"),
            d = a.find("[data-slip-to]").eq(b), e = this.cycleTimer;
        if (!d.hasClass("current")) return e && this.pause(), c.each(function () {
            var c = $(this), e = c.find("[data-item]").eq(b), h = c.find(".current");
            0 !== e.length && 0 !== d.length && (a.find(".current").removeClass("current"), d.addClass("current"), h.stop(!0, !0), e.stop(!0, !0), h.fadeOut({
                duration: 400,
                easing: "linear",
                complete: function () {
                    h.removeClass("current")
                }
            }),
                e.fadeIn({
                    duration: 400, easing: "linear", complete: function () {
                        c.find(".current").css({display: "none"});
                        c.find(".current").removeClass("current");
                        e.addClass("current")
                    }
                }))
        }), e && this.cycle(), this
    }
};
$.fn.carouselSlide = function (b) {
    $.fn.carouselSlide.defaults = {eventType: "mouseover", interval: 3E3};
    return this.each(function () {
        b = $.extend({}, $.fn.carouselSlide.defaults, b);
        new CarouselSlide(this, b)
    })
};

function ShowWantWentCommAjax() {
    ShowGowant()
}

function ShowGowant() {
    var b = jQuery("#wantClickID").attr("data_type"), a = jQuery("#wantClickID").attr("dataresource-cat");
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowGowant",
        type: "POST",
        async: !0,
        data: {Resource: a, pageType: b, rank: Math.random()},
        success: function (a) {
            a.HasWented && $("#wentClickID").addClass("current");
            a.HasWanted && $("#wantClickID").addClass("current");
            a.WentTimes && $("#emWentValueID").text(a.WentTimes.toString());
            a.WantTimes && $("#emWantValueID").text(a.WantTimes.toString())
        },
        error: function () {
        }
    })
}

function ClickWent() {
    var b = jQuery("#wentClickID").attr("data_type"), a = jQuery("#wentClickID").attr("dataresource-cat"),
        c = jQuery("#putDistrictId").val(), b = {type: 1, pageType: b, resource: a, district: c, rank: Math.random()};
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAddDistrictWent",
        type: "POST",
        async: !0,
        data: b,
        success: function (a) {
            ShowGowant();
            $("#emWentValueID").html(Number($("#emWentValueID").html()) + 1)
        },
        error: function () {
        }
    })
}

function ClickWant() {
    var b = jQuery("#wantClickID").attr("data_type"), a = jQuery("#wantClickID").attr("dataresource-cat"),
        c = jQuery("#putDistrictId").val(), b = {type: 2, pageType: b, resource: a, district: c, rank: Math.random()};
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAddDistrictWent",
        type: "POST",
        async: !0,
        data: b,
        success: function (a) {
            ShowGowant();
            $("#emWantValueID").html(Number($("#emWantValueID").html()) + 1)
        },
        error: function () {
        }
    })
}

function ShowGuideBook() {
    var b = $("#pdfDistrictId").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowGuideBook",
        type: "POST",
        async: !0,
        data: {districtId: b, topNum: "5", type: 1, rank: Math.random()},
        success: function (a) {
            if (0 < a.length) {
                var b = [], d = [], e = 0;
                $.each(a, function (a, f) {
                    f && (0 == a ? (b.push(' <li data-target="#myCarousel" data-slide-to="' + a + '" class="active"></li>'), d.push(' <div class="item active">')) : (b.push(' <li data-target="#myCarousel" data-slide-to="' + a + '" ></li>'), d.push(' <div class="item">')),
                        e += 1, d.push('<h4 class="ellipsis"><a target="_blank" title="' + f.Name + '\u653b\u7565" href="' + f.pdfurl + '"> ' + f.SubName + "\u653b\u7565</a></h4>"), d.push('<a href="' + f.pdfurl + '" target="_blank" class="guidepic"><img width=\'55\' height=\'83\' src="' + f.CoverPicUrl + '"></a>'), d.push('  <dl class="info">'), d.push("   <dd>\u66f4\u65b0\uff1a" + f.updateTime + "</dd>"), d.push("    <dd>\u4e0b\u8f7d\uff1a" + f.DownloadCount + "</dd>"), d.push('    <dd><a href="' + f.pdfurl + '" target="_blank" class="gsn-btn-20">\u514d\u8d39\u4e0b\u8f7d</a></dd></dl></div>'))
                });
                "" == b ? $("#myCarousel").hide() : ($("#myCarousel").show(), $("#carousel-indicatorsID").html(b.join("")), $("#carousel-innerID").html(d.join("")), $("#myCarousel").carousel(), a = $("#carousel-indicatorsID").width() / 2, $("#carousel-indicatorsID").css({"margin-left": -a}));
                1 >= e && $("#carousel-indicatorsID").hide();
                5 > e && $(".smore_btn").hide()
            } else $("#myCarousel").hide()
        },
        error: function () {
            $("#myCarousel").hide()
        }
    })
}

function ShowGuideWeather() {
    ShowGuideWeatherAjax($("#putDistrictId").val())
}

function ShowGuideWeatherAjax(b) {
    $.ajax({
        url: "/Destinationsite/SharedComm/GetGuideWeather",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {districtId: b, rank: Math.random()},
        success: function (a) {
            "" != a ? ($(".lastday").html(a), $("#weathertabId").show(), $("#gs_tianqiId").show()) : ($("#weathertabId").hide(), $("#gs_tianqiId").hide())
        },
        error: function () {
        }
    })
}

function showSoaHotelLocationZone(b) {
    b = {City: b, rank: Math.random()};
    jQuery.ajax({
        url: "/Destinationsite/SharedComm/SoaHotelLocationZone",
        type: "POST",
        dataType: "text",
        data: b,
        error: function (a) {
        },
        success: function (a) {
            $(".keyword_search").html(a);
            $(".address_hot_abb2 li").click(function () {
                var a = $(this).index(".address_hot_abb2 > li");
                $(this).addClass("hot_selected2").siblings().removeClass("hot_selected2");
                $(".area_list").find("dd").hide().eq(a).show()
            });
            $("#hotel_position").click(function () {
                var a = $(".keyword_search");
                $(this);
                a.show();
                $(document).click(function (b) {
                    b = b || window.event;
                    "BODY" != b.target.nodeName && "FROM" != b.target.nodeName || a.hide()
                })
            });
            $(".keyword_search dl.area_list").on("click", "a", function (a) {
                a = $(this).attr("data") || $(this).attr("metrodata");
                "" != a && (a = a.split("|"), $("#hotel_position").val(a[1]), $("#txthideLocationZoneType").val(a[3]), $("#txthidenID").val(a[2]));
                $(".keyword_search").hide()
            })
        }
    })
}

function ajaxSearchHotelList() {
    if ("" == jQuery("#txtCheckIn").val()) return alert("\u8bf7\u8f93\u5165\u5165\u4f4f\u65e5\u671f"), !1;
    if ("" == jQuery("#txtCheckOut").val()) return alert("\u8bf7\u8f93\u5165\u9000\u623f\u65e5\u671f"), !1;
    var b = new Date(Date.parse(jQuery("#txtCheckIn").val())), a = new Date(Date.parse(jQuery("#txtCheckOut").val()));
    if (b >= a) return alert("\u9000\u623f\u65e5\u671f\u5e94\u5927\u4e8e\u5165\u4f4f\u65e5\u671f"), !1;
    b = 0;
    "" == jQuery(".select-txt").html() && (b = 0);
    "\u4e0d\u9650" == jQuery(".select-txt").html() &&
    (b = 0);
    "\u4e94\u661f\u7ea7/\u8c6a\u534e" == jQuery(".select-txt").html() && (b = 5);
    "\u56db\u661f\u7ea7/\u9ad8\u6863" == jQuery(".select-txt").html() && (b = 4);
    "\u4e09\u661f\u7ea7/\u8212\u9002" == jQuery(".select-txt").html() && (b = 3);
    "\u4e8c\u661f\u7ea7\u53ca\u4ee5\u4e0b" == jQuery(".select-txt").html() && (b = 2);
    var c = jQuery("#txthidencityid").val(), a = jQuery("#txthideLocationZoneType").val(),
        d = jQuery("#txthidenID").val(), e = jQuery("#txtKeyword").val();
    jQuery("#txtCheckIn").val();
    jQuery("#txtCheckOut").val();
    var g = jQuery("#txthideninchina").val(),
        f = jQuery("#txthidenename").val().toLowerCase(),
        f = f ? f.replace(/.*[\u4e00-\u9fa5]+.*$/gm, "lists").replace(/\s/gm, "").replace(/[^a-z0-9]*/gmi, "") : "ename";
    0 < c ? (c = g ? "http://hotels.ctrip.com/hotel/" + f + "" + c + "/" : "http://hotels.ctrip.com/international/" + f + "" + c + "/", "" != e ? (0 != b && (c += "star" + b), c += "/k1" + e) : ("" != a && (c += a + d), 0 != b && (c += "star" + b)), document.forms[0].action = c, document.forms[0].target = "_blank", document.forms[0].method = "post", document.forms[0].submit()) : window.open("http://hotels.ctrip.com/")
}

function viewCtripHotelMap(b, a) {
    0 == b ? window.open("http://hotels.ctrip.com/") : jQuery("#txthideninchina").val() ? window.open("http://hotels.ctrip.com/hotel/" + a + "" + b + "/map") : window.open("http://hotels.ctrip.com/international/maplist/" + a + "" + b + "")
}

function ShowNearHotel() {
    var b = $("#CityID").val(), a = $("#putDistrictId").val(), c = $("#Lat").val(), d = $("#Lon").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/GetNearHotel",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {City: b, District: a, Lat: c, Lon: d, rank: Math.random()},
        success: function (a) {
            "" == a ? $("#dest_NearHotel").hide() : $("#dest_NearHotel").html(a)
        },
        error: function () {
            $("#dest_NearHotel").hide()
        }
    })
}

function ShowCityHotelList() {
    var b = $("#txthidencityid").val(), a = $("#txthidendistrictid").val(), c = $("#txthideninchina").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowCityHotelList",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {City: b, District: a, InChina: c, rank: Math.random()},
        success: function (a) {
            "" == a ? $("#cityHotelListID").hide() : $("#cityHotelListID").html(a)
        },
        error: function () {
            $("#cityHotelListID").hide()
        }
    })
}

function GetExpertPartialView() {
    var b = $("#txtDistrictId").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/GetExpertPartialView",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {district: b, rank: Math.random()},
        success: function (a) {
            "" == a ? $("#destexpertId").hide() : $("#destexpertId").html(a)
        },
        error: function () {
            $("#destexpertId").hide()
        }
    })
}

function ShowAroundList() {
    var b = $("#putDistrictId").val();
    $("#JourUrl").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAroundList",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {district: b, rank: Math.random()},
        success: function (a) {
            "" != a ? ($("#tourListId").html(a), $("#aroundSpanId").show()) : $("#tourListId").html('<div class="gs_list_load"><i class="listface"></i>\u8fd9\u91cc\u6682\u65f6\u6ca1\u6709\u5468\u8fb9\u6e38\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5<a target="_blank" href="http://vacations.ctrip.com/domestic/">\u67e5\u770b\u66f4\u591a</a></p></div>')
        },
        error: function () {
            $("#tourListId").html('<div class="gs_list_load"><i class="listface"></i>\u8fd9\u91cc\u6682\u65f6\u6ca1\u6709\u5468\u8fb9\u6e38\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5<a target="_blank" href="http://vacations.ctrip.com/domestic/">\u67e5\u770b\u66f4\u591a</a></p></div>')
        }
    })
}

$(function () {
    $(".ttd_topnav").setfixed({top: "-5px", width: "100%"});
    0 < $(".link_share").length && $(".link_share").gsbaseshare({requestFn: INTERFACE.shareRequestFn});
    0 !== $(".city_sfind input[type='text']").length && $(".city_sfind input[type='text']").placeholder();
    0 !== $(".sightsearch input[type='text']").length && $(".sightsearch input[type='text']").placeholder();
    $(".dest_toptitle .des_icon_want a").hover(function () {
            $(this).hasClass("current") || $(this).siblings("p").find(".textcolor").html("\u6211\u60f3\u53bb")
        },
        function () {
            $(this).hasClass("current") || $(this).siblings("p").find(".textcolor").html("\u60f3\u53bb")
        });
    $(".dest_toptitle .des_icon_want a").click(function () {
        var a = $(this);
        a.hasClass("current") || a.hasClass("a_popup_login") || ($(this).siblings("p").find(".textcolor").html("\u6211\u60f3\u53bb"), a = wantBeen(this), INTERFACE.wantRequestFn(a))
    });
    $(".dest_toptitle .des_icon_been a").hover(function () {
        $(this).hasClass("current") || $(this).siblings("p").find(".textcolor").html("\u6211\u53bb\u8fc7")
    }, function () {
        $(this).hasClass("current") ||
        $(this).siblings("p").find(".textcolor").html("\u53bb\u8fc7")
    });
    $(".dest_toptitle .des_icon_been a").click(function () {
        var a = $(this);
        a.hasClass("current") || a.hasClass("a_popup_login") || ($(this).siblings("p").find(".textcolor").html("\u6211\u53bb\u8fc7"), a = wantBeen(this), INTERFACE.beenRequestFn(a))
    });
    0 !== $("#myCarousel").length && $("#myCarousel").carousel();
    0 !== $("#detailCarousel").length && $("#detailCarousel").carousel();
    GS.ismoblie ? $(".hoverweather span.arrow").remove() : ($("#WeaTher").mouseenter(function () {
        var a =
            $(this), b = a.offset().top - 11, a = a.offset().left - 47;
        $(".hoverweather").css({position: "absolute", top: b, left: a, display: "block", "z-index": "22"})
    }), $(".hoverweather").mouseleave(function () {
        $(".hoverweather").hide()
    }));
    $(".ttd_topnav .gs_newicon").parent().css("z-index", "1");
    $(".cityseojs .fr").toggle(function () {
        $(this).html("-\u6536\u8d77");
        $(this).parent().next().css("height", "auto")
    }, function () {
        $(this).html("+\u66f4\u591a");
        $(this).parent().next().css("height", "44px")
    });
    var b = $(".ttd_guide_nav").height();
    $(".ttd_topnav ul li.ttd_guide_nav").hover(function () {
        $(this).addClass("ttd_nav_cur");
        $(this).find(".ttd_guide_link").addClass("ttd_guide_cur");
        $(this).find(".corner_down_icon").addClass("corner_down_cur");
        $(this).find(".ttd_guide_uplayer").css("top", b).show()
    }, function () {
        $(this).removeClass("ttd_nav_cur");
        $(this).find(".ttd_guide_link").removeClass("ttd_guide_cur");
        $(this).find(".corner_down_icon").removeClass("corner_down_cur");
        $(this).find(".ttd_guide_uplayer").hide()
    })
});

function wantBeen(b) {
    b = $(b);
    var a = b.siblings("p").find("em"), c = b.offset(), d = c.top, c = c.left + 40, a = parseInt(a.text(), 10), e = 1,
        a = isNaN(a) ? 0 : a, a = 0 > a ? 0 : a;
    0 === $("#gs_addone_1").length && $("body").append($('<div id="gs_addone_1" class="gs_addone_1">+1</div>'));
    b.hasClass("current") ? (a--, e = -1, b.removeClass("current"), $("#gs_addone_1").text("-1")) : (a++, e = 1, b.addClass("current"), $("#gs_addone_1").text("+1"));
    $("#gs_addone_1").css({opacity: 1, top: d, left: c, display: "block", "font-size": "18px"}).animate({
            top: d - 30,
            opacity: 0
        },
        "slow", function () {
            $("#gs_addone_1").text("+1")
        });
    return e
}

function $tabs(b, a, c) {
    $(b).click(function () {
        if ($(this).parent().hasClass("scroll-top")) {
            var d = $(".journalbtn_t").offset().top;
            $("body,html").animate({scrollTop: d}, 500)
        }
        $(this).addClass("current").siblings().removeClass("current");
        $(a).hide().eq($(b).index(this)).show();
        "function" == typeof c && c($(this))
    });
    $(".journalslistv1 .journal-item").hover(function () {
        $(this).addClass("itemhover")
    }, function () {
        $(this).removeClass("itemhover")
    })
}

$(".practicaltab li").each(function () {
    $(this).height() < $(this).find("dd").height() && $(this).find(".seeline").show().toggle(function () {
        $(this).html("\u6536\u8d77<span></span>");
        $(this).addClass("seeall");
        $(this).parents("li").css("height", "auto")
    }, function () {
        $(this).parents("li").css("height", "30px");
        $(this).removeClass("seeall");
        $(this).html("\u66f4\u591a<span></span>")
    })
});
$(".practicaltab li").each(function () {
    var b = $(this), a = b.find("dd a.current");
    if (0 !== a.length) {
        var b = b.find(".seeline"), c = a.outerHeight();
        positionTop = a.position().top;
        positionTop > c && b.trigger("click")
    }
});
$(function () {
    $(".gs-like-box a").click(function () {
        var b = null, a = $(this);
        if (a.hasClass("click_like")) {
            var c = a.find("span");
            if ("\u5df2\u559c\u6b22" != c.text()) {
                var d = parseInt(c.text(), 10), d = isNaN(d) ? 0 : d;
                c.text("\u5df2\u559c\u6b22");
                b = setTimeout(function () {
                    c.text(d);
                    clearTimeout(b)
                }, 2E3)
            }
        }
    });
    $(".gs-like-box a").gsbaselike({
        requestFn: INTERFACE.likeRequestFn, callback: function (b) {
        }
    })
});
$.pageLinkJump = function (b, a) {
    var c = a.parents(".ttd_pager").attr("data-type");
    c ? INTERFACE.pageLinkJump(c, b) : INTERFACE.pageLinkJump(b)
};
$(function () {
    $tabs(".journaltab li", ".journalslist");
    $(".journaltab a").click(function () {
        var b = $(this).parents(".normalbox").offset().top - $(".ttd_topnav").height();
        $("body,html").animate({scrollTop: b}, 800)
    })
});

function $tabs(b, a, c) {
    $(b).click(function () {
        if ($(this).parent().hasClass("scroll-top")) {
            var d = $(".journalbtn_t").offset().top;
            $("body,html").animate({scrollTop: d}, 500)
        }
        $(this).addClass("current").siblings().removeClass("current");
        $(a).hide().eq($(b).index(this)).show();
        "function" == typeof c && c($(this))
    });
    $(".journalslistv1 .journal-item").hover(function () {
        $(this).addClass("itemhover")
    }, function () {
        $(this).removeClass("itemhover")
    })
}

$(function () {
    $(".slide_show").carouselSlide();
    $("#imMark").click(function () {
        $(this).next(".undis").show()
    });
    $(".im_notice .btn_close").click(function () {
        $(this).parents(".undis").hide()
    });
    $("#Telephone,#asktop_ssinput").placeholder();
    $(".hot_destlist li").hover(function () {
        $(this).find(".liner_bg").css("height", "100%");
        $(this).find(".liner_bg dl").css({top: "auto", bottom: "0"})
    }, function () {
        $(this).find(".liner_bg").css("height", "40");
        $(this).find(".liner_bg dl").css({top: "0", bottom: "auto"})
    });
    $("#SugCity").gs_tabs({
        title: ">li",
        active: "current", content: "#SugCityL > ul", findid: "data-id", callback: function (a, b) {
            $(b).find("img").lazyload()
        }, delayTIME: 300, event: "click"
    });
    $("#SugCityL > ul").eq(0).find("img").lazyload();
    $(function () {
        $(".fed_select_box").click(function (a) {
            a.stopPropagation();
            $(".fed_select_box").removeClass("fed_sel_cur");
            $(this).find(".fed_option").toggle();
            $(this).find(".fed_option").is(":visible") ? $(this).addClass("fed_sel_cur") : $(this).removeClass("fed_sel_cur");
            $(this).parent().siblings().find(".fed_option").hide()
        });
        $(document).click(function (a) {
            a = $(a.target);
            $(".fed_select_box").removeClass("fed_sel_cur");
            $(".fed_select_box").is(":visible") && ("fed_option" != a.attr("class") && !a.parent(".fed_option").length) && $(".fed_option").hide()
        });
        $(".airline_box .fed_option a").click(function () {
            var a = $(this).text(), b = $(this).attr("href").replace("#", "");
            $(this).parents(".fed_option").siblings(".fed_select_txt").text(a);
            $(".goback_content").hide();
            $("." + b).show()
        })
    });
    $("#otherSuggest").gs_tabs({
        title: "li > a", active: "current",
        content: ".card_list > div", findid: "data-id", callback: function (a, b) {
            $(b).find("img").lazyload()
        }, delayTIME: 300, event: "hover"
    });
    (function () {
        var a = $(".rollbox ul");
        3 < a.find("li").length && setInterval(function () {
            var b = a.find("li:eq(0)");
            b.slideUp("600", function () {
                b.appendTo(a).show()
            })
        }, 2E3)
    })();
    $(".check_kdgl .b_blue_s, .check_kdgl a.guidepic, .check_kdgl dt.ellipsis a").on("click", function (a) {
        a.preventDefault();
        $(".scan_kdglbox").show()
    });
    var b = function () {
        var a = document.createElement("canvas");
        return !(!a.getContext ||
            !a.getContext("2d"))
    };
    INTERFACE.gs_kdgl_url && $("#glcode_share").qrcode({
        width: 110,
        height: 110,
        correctLevel: 0,
        render: b() ? "canvas" : "table",
        text: INTERFACE.gs_kdgl_url
    })
});
