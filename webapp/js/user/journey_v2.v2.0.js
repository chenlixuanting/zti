/* 2015-07-24 16:04:03 fangluo */
(function (c) {
    c.pageEventBind = function () {
        function b(d, e, b) {
            "" == d || "0" == d || d > e || /\D/g.test(d) ? (b.val(""), a(b)) : c.pageLinkJump && c.pageLinkJump(d, b)
        }

        function a(a) {
            var e = a.clone(), b = a.offset(), g = 0;
            a.css("visibility", "hidden");
            e.css({
                position: "absolute",
                top: b.top + "px",
                left: b.left + "px",
                width: "18px",
                height: "16px",
                border: "1px solid #ccc"
            }).appendTo("body");
            var c = setInterval(function () {
                g++;
                e.css({top: b.top + 2 * Math.sin(g) + "px", left: b.left + 1 * Math.cos(g) + "px"});
                15 == g && (clearInterval(c), a.css("visibility", "visible"),
                    e.remove())
            }, 30)
        }

        c(".pager_v1").each(function () {
            var a = parseInt(c(this).find(".numpage").text()), e = c(this).find("span input");
            e.on("keyup", function (f) {
                var g = c(this).val();
                /\D/g.test(g) && c(this).val("");
                13 == f.keyCode && b(g, a, e)
            }).parent("span").siblings(".gopage").on("click", function () {
                var c = e.val();
                b(c, a, e)
            })
        })
    };
    c.pageEventBind()
})(jQuery);
var cQuery = {};
$(function () {
    var c = $("<div></div>");
    $(document.body).append(c);
    var b = function (a, d) {
        var e = this, b = $(a);
        this.$element = b;
        this.oldValue = "";
        this.alignRight = d.alignRight || !1;
        this.title = d.title || "\u652f\u6301\u4e2d\u6587/\u62fc\u97f3/\u7b80\u62fc\u8f93";
        this.drawHtml = d.drawHtml;
        this.eventControl = d.eventControl || function () {
        };
        this.addBox();
        b.keyup(function () {
            $(this).val() != e.oldValue && e.blur()
        });
        b.click(function (a) {
            e.focus();
            e.$element.select();
            a.stopPropagation()
        });
        $(document).click(function () {
            e.blur()
        });
        $(window).resize(function () {
            e.blur()
        })
    };
    b.prototype = {
        container: "",
        tabContainer: "",
        hasHtml: !1,
        selectHtml: '<div class="city_select_popup"><a class="close" href="javascript:;">\u00d7</a><p class="title"></p><ul class="tab_box"></ul></div>',
        addBox: function () {
            this.container = $(this.selectHtml);
            this.tabContainer = this.container.find(".tab_box");
            c.append(this.container);
            this.container.find(".title").text(this.title)
        },
        focus: function () {
            this.$element.focus();
            $(".city_select_popup").hide();
            $(".city_suggest_popup").hide();
            this.oldValue = this.$element.val();
            this.hasHtml ? (this.setOffset(), this.container.show()) : this.displayPopup()
        },
        blur: function () {
            this.container.hide()
        },
        setOffset: function () {
            var a = this.$element.offset(), d = this.$element.outerHeight() - 1, e = a.left;
            this.alignRight && (e = e + this.$element.outerWidth() - this.container.outerWidth());
            this.container.css({top: a.top + d, left: e})
        },
        displayPopup: function () {
            var a = this;
            this.drawHtml(function (d) {
                a.container.find(".city_item").remove();
                a.tabContainer.empty();
                a.container.append(d.html);
                a.tabContainer.append(d.tabHtml);
                a.setOffset();
                a.addEventListener();
                a.eventControl(a);
                a.container.show();
                a.hasHtml = !0
            }, a)
        },
        addEventListener: function () {
            var a = this, d = this.tabContainer, e = this.container.find(".city_item");
            this.container.click(function (a) {
                a.stopPropagation()
            });
            this.container.find(".close").click(function (d) {
                a.blur();
                d.stopPropagation()
            });
            d.find("li").on("click", function (a) {
                var b = $(this).index();
                d.find("li").removeClass("current");
                $(this).addClass("current");
                e.removeClass("current");
                e.eq(b).addClass("current");
                a.stopPropagation()
            })
        }
    };
    $.fn.citySelect = function (a) {
        return this.each(function () {
            new b(this, a)
        })
    }
});
cQuery = {};
$(function () {
    var c = $("<div></div>");
    $(document.body).append(c);
    var b = function (a, d) {
        var e = this, b = $(a);
        this.$element = b;
        this.container = "";
        this.firstData = null;
        this.placeholder = d.placeholder || "";
        this.formatData = d.formatData;
        this.eventControl = d.eventControl || function () {
        };
        this.cannotToCache = d.cannotToCache || !1;
        this.gos = 0;
        this.oldValue = b.val();
        this.pageNum = 0;
        this.totlePage = 1;
        this.cache = {};
        this.addBox();
        this.timer = null;
        b.keyup(function (a) {
            e.onKeyup(a)
        });
        b.click(function (a) {
            e.oldValue = e.$element.val();
            a.stopPropagation()
        });
        $(document).click(function () {
            e.hidePopup()
        });
        $(window).resize(function () {
            e.hidePopup()
        })
    };
    b.prototype = {
        kCode: {ENTER: 13, UP: 38, DOWN: 40, ESC: 27},
        perPageNum: 10,
        suggestHtml: '<div class="city_suggest_popup"></div>',
        addBox: function () {
            var a = this;
            this.container = $(this.suggestHtml);
            c.append(this.container);
            this.container.click(function (d) {
                a.$element.focus();
                d.stopPropagation()
            })
        },
        addToCache: function (a, d) {
            !this.cannotToCache && 0 < d.length && (this.cache[a] = [], this.cache[a] = d)
        },
        checkCache: function (a) {
            return this.cache[a] ?
                !0 : !1
        },
        setOffset: function () {
            var a = this.$element.offset(), d = this.$element.outerHeight() - 1;
            this.container.css({top: a.top + d, left: a.left})
        },
        checkValue: function () {
            "" != this.$element.val() && this.$element.val() != this.placeholder || this.hidePopup();
            if (this.$element.val() != this.oldValue) {
                var a = this, d = function () {
                    a.showPopup();
                    clearTimeout(a.timer);
                    a.timer = null
                };
                a.timer || (a.timer = setTimeout(d, 200))
            }
            this.oldValue = this.$element.val()
        },
        onKeyup: function (a) {
            switch (a.keyCode) {
                case this.kCode.UP:
                    a = this.container.find(".city_suggest_item");
                    1 < a.length ? (this.gos--, -1 == this.gos && (this.gos = a.length - 1), this.selected(a.eq(this.gos))) : 1 == a.length && this.selected(a.eq(0));
                    break;
                case this.kCode.DOWN:
                    a = this.container.find(".city_suggest_item");
                    1 < a.length ? (this.gos++, 1 != this.gos || a.hasClass("current") || (this.gos = 0), this.gos == a.length && (this.gos = 0), this.selected(a.eq(this.gos))) : 1 == a.length && this.selected(a.eq(0));
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
        selected: function (a) {
            this.container.find(".city_suggest_item").removeClass("current");
            a.addClass("current")
        },
        hidePopup: function () {
            clearTimeout(this.timer);
            this.timer = null;
            this.container.hide()
        },
        showPopup: function (a) {
            var d = this;
            (a = this.$element.val()) && (this.checkCache(a) ? this.displayPopup(this.cache[a]) : d.formatData(a, function (e) {
                d.addToCache(a, e);
                d.displayPopup(e)
            }))
        },
        displayPopup: function (a) {
            this.pageNum = 0;
            this.drawHtml(a);
            this.drawPageHtml();
            this.setOffset();
            this.eventControl(this);
            this.container.show();
            this.pageControl(a)
        },
        drawHtml: function (a) {
            this.container.find("div").not(".city_suggest_pager").remove();
            this.gos = 0;
            var d = "", e = a.length, b = Math.ceil(e / this.perPageNum), g = this.pageNum * this.perPageNum,
                c = (this.pageNum + 1) * this.perPageNum, c = c > e ? e : c;
            this.totlePage = b;
            if (0 < e) for (this.firstData = a[0]; g < c; g++) if (e = a[g], e.showRight) d += '<div class="city_suggest_item" data="' + e.data + '"><span class="fl">' + e.text + '</span><span class="fr">' + e.right + "</span></div>"; else {
                if (d =
                        e.noAirPort ? d + ('<div class="city_suggest_noAir" data="' + e.data + '">' + e.text + '<span class="orange">&nbsp;-\u8be5\u57ce\u5e02\u6ca1\u6709\u673a\u573a</span></div>') : d + ('<div class="city_suggest_item" data="' + e.data + '">' + e.text + "</div>"), e.airPort && 0 < e.airPort.length) for (var b = 0, k = e.airPort.length; b < k; b++) d += '<div class="city_suggest_item gray" data="' + e.data + '" data-airPort="' + e.airPort[b] + '">' + e.airPortText[b] + "</div>"
            } else this.firstData = "", d += '<div class="city_suggest_null">\u5bf9\u4e0d\u8d77\uff0c\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u5173\u952e\u5b57</div>';
            this.container.prepend(d)
        },
        drawPageHtml: function () {
            this.container.find(".city_suggest_pager").remove();
            var a = "", d = this.totlePage, e = 0;
            if (1 < d) {
                for (; e < d; e++) a = 0 === e ? a + '<a class="page_num active" href="javascript:;">1</a>' : 3 > e ? a + ('<a class="page_num" href="javascript:;">' + (e + 1) + "</a>") : a + ('<a class="page_num" href="javascript:;" style="display: none;">' + (e + 1) + "</a>");
                a = '<div class="city_suggest_pager">' + ('<a class="gray page_prev" href="javascript:;">&lt;</a>' + a + '<a class="page_next" href="javascript:;">&gt;</a>') +
                    "</div>"
            }
            this.container.append(a)
        },
        pageControl: function (a) {
            var d = this, e = this.container.find(".city_suggest_pager");
            e.find("a").click(function (b) {
                b = $(this);
                var c = e.find(".page_prev"), l = e.find(".page_next"), k = e.find(".page_num"), n = d.pageNum,
                    p = d.totlePage;
                if (!b.hasClass("gray") && !b.hasClass("active")) {
                    b.hasClass("page_prev") ? (n -= 1, l.removeClass("gray")) : b.hasClass("page_next") ? (n += 1, c.removeClass("gray")) : n = parseInt(b.text(), 10) - 1;
                    var h = n - 1, m = n + 1;
                    0 >= h && (m = 2);
                    m >= p && (h = p - 3);
                    k.each(function (a) {
                        a >= h && a <=
                        m ? $(this).show() : $(this).hide()
                    });
                    0 === n ? (c.addClass("gray"), l.removeClass("gray")) : n === p - 1 ? (l.addClass("gray"), c.removeClass("gray")) : (c.removeClass("gray"), l.removeClass("gray"));
                    e.find("a.page_num").removeClass("active").eq(n).addClass("active");
                    d.pageNum = n;
                    d.drawHtml(a);
                    d.eventControl(d)
                }
            })
        }
    };
    $.fn.citySuggest = function (a) {
        return this.each(function () {
            new b(this, a)
        })
    }
});
var CitySuggestFilter = function (c) {
    this._init(c)
};
CitySuggestFilter.prototype = {
    sort: "^0$ ^1$ ^3+$ ^0 ^1 ^3+ 0 1 3+".split(" "),
    _colsHash: null,
    _displayHash: {left: 0, right: 1, text: 1},
    message: {sort: []},
    _init: function (c) {
        c = c || {};
        var b = $.type(c.sort);
        if (c.sort && "array" == b || "function" == b) this.sort = c.sort, this._sortReString = null;
        this.sortFunction = c.sortFunction || this.sortFunction;
        c.message && (this.message = $.extend(!0, {}, this.message, c.message));
        this._colsHash = c._colsHash || this._colsHash;
        c._displayHash && (this._displayHash = $.extend(!0, {}, this._displayHash, c._displayHash))
    },
    sortFunction: function (c, b) {
        return c.left > b.left ? 1 : c.left == b.left ? 0 : -1
    },
    _initSort: function () {
        if (!this._sortReString) {
            var c = this._sortReString = {accurate: [], vague: []}, b = 0, a = 0;
            switch ($.type(this.sort)) {
                case "array":
                    for (var d = 0, e = this.sort.length; d < e; d++) {
                        var f = this.sort[d].match(/^(\^?)([^\^\$\|@\r\n\+]+)(\+?)(\$?)$/);
                        if (f) {
                            if (/^\d$/.test(f[2])) f[2] = parseInt(f[2], 10); else if (f[2] in this._colsHash) f[2] = this._colsHash[f[2]]; else continue;
                            var g = +f[2] || f[3] ? "([^\\|@]*\\|){" + f[2] + (f[3] ? "," : "") + "}" : "";
                            c.accurate[b++] =
                                ["@(" + g, "", "(\\|[^@]*)?)(?=@)"];
                            c.vague[a++] = ["@(" + g + (f[1] ? "" : "[^\\|@]*"), "", (f[4] ? "(\\|[^@]*)?" : "[^@]*") + ")(?=@)"]
                        }
                    }
            }
        }
    },
    getfilterData: function (c, b, a, d) {
        this._initSort();
        var e = this, f = [], g = 0, l = c;
        switch ($.type(this.sort)) {
            case "array":
                c = this._sortReString[a ? "accurate" : "vague"];
                a = "array" == $.type(this.message.sort) ? this.message.sort : [];
                for (var k = 0, n = c.length; k < n; k++) {
                    c[k][1] = b;
                    var p = RegExp(c[k].join(""), "gi"), h = [], m = 0, l = l.replace(p, function (a, d) {
                        var b = d.split("|"), b = {
                            left: b[e._displayHash.left] || "", right: b[e._displayHash.right] ||
                            "", text: b[e._displayHash.text] || "", data: d
                        };
                        h[m++] = b;
                        return ""
                    });
                    if (m) {
                        h.sort(this.sortFunction);
                        if (d) return h[0].data;
                        a[k] && h.unshift($.tmpl.render(a[k], {val: b, items: h}));
                        f[g++] = h
                    }
                }
                if (d) return !1;
                break;
            case "function":
                h = this.sort(c, b, a, d);
                if (d) return h.length ? h[0].data : !1;
                f[g++] = h;
                break;
            default:
                return !1
        }
        return f = Array.prototype.concat.apply([], f)
    }
};

function ShowWantWentCommAjax() {
    ShowGowant()
}

function ShowGowant() {
    var c = jQuery("#wantClickID").attr("data_type"), b = jQuery("#wantClickID").attr("dataresource-cat");
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowGowant",
        type: "POST",
        async: !0,
        data: {Resource: b, pageType: c, rank: Math.random()},
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
    var c = jQuery("#wentClickID").attr("data_type"), b = jQuery("#wentClickID").attr("dataresource-cat"),
        a = jQuery("#putDistrictId").val(), c = {type: 1, pageType: c, resource: b, district: a, rank: Math.random()};
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAddDistrictWent",
        type: "POST",
        async: !0,
        data: c,
        success: function (a) {
            ShowGowant();
            $("#emWentValueID").html(Number($("#emWentValueID").html()) + 1)
        },
        error: function () {
        }
    })
}

function ClickWant() {
    var c = jQuery("#wantClickID").attr("data_type"), b = jQuery("#wantClickID").attr("dataresource-cat"),
        a = jQuery("#putDistrictId").val(), c = {type: 2, pageType: c, resource: b, district: a, rank: Math.random()};
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAddDistrictWent",
        type: "POST",
        async: !0,
        data: c,
        success: function (a) {
            ShowGowant();
            $("#emWantValueID").html(Number($("#emWantValueID").html()) + 1)
        },
        error: function () {
        }
    })
}

function ShowGuideBook() {
    var c = $("#pdfDistrictId").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowGuideBook",
        type: "POST",
        async: !0,
        data: {districtId: c, topNum: "5", type: 1, rank: Math.random()},
        success: function (b) {
            if (0 < b.length) {
                var a = [], d = [], e = 0;
                $.each(b, function (b, c) {
                    c && (0 == b ? (a.push(' <li data-target="#myCarousel" data-slide-to="' + b + '" class="active"></li>'), d.push(' <div class="item active">')) : (a.push(' <li data-target="#myCarousel" data-slide-to="' + b + '" ></li>'), d.push(' <div class="item">')),
                        e += 1, d.push('<h4 class="ellipsis"><a target="_blank" title="' + c.Name + '\u653b\u7565" href="' + c.pdfurl + '"> ' + c.SubName + "\u653b\u7565</a></h4>"), d.push('<a href="' + c.pdfurl + '" target="_blank" class="guidepic"><img width=\'55\' height=\'83\' src="' + c.CoverPicUrl + '"></a>'), d.push('  <dl class="info">'), d.push("   <dd>\u66f4\u65b0\uff1a" + c.updateTime + "</dd>"), d.push("    <dd>\u4e0b\u8f7d\uff1a" + c.DownloadCount + "</dd>"), d.push('    <dd><a href="' + c.pdfurl + '" target="_blank" class="gsn-btn-20">\u514d\u8d39\u4e0b\u8f7d</a></dd></dl></div>'))
                });
                "" == a ? $("#myCarousel").hide() : ($("#myCarousel").show(), $("#carousel-indicatorsID").html(a.join("")), $("#carousel-innerID").html(d.join("")), $("#myCarousel").carousel(), b = $("#carousel-indicatorsID").width() / 2, $("#carousel-indicatorsID").css({"margin-left": -b}));
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

function ShowGuideWeatherAjax(c) {
    $.ajax({
        url: "/Destinationsite/SharedComm/GetGuideWeather",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {districtId: c, rank: Math.random()},
        success: function (b) {
            "" != b ? ($(".lastday").html(b), $("#weathertabId").show(), $("#gs_tianqiId").show()) : ($("#weathertabId").hide(), $("#gs_tianqiId").hide())
        },
        error: function () {
        }
    })
}

function showSoaHotelLocationZone(c) {
    c = {City: c, rank: Math.random()};
    jQuery.ajax({
        url: "/Destinationsite/SharedComm/SoaHotelLocationZone",
        type: "POST",
        dataType: "text",
        data: c,
        error: function (b) {
        },
        success: function (b) {
            $(".keyword_search").html(b);
            $(".address_hot_abb2 li").click(function () {
                var a = $(this).index(".address_hot_abb2 > li");
                $(this).addClass("hot_selected2").siblings().removeClass("hot_selected2");
                $(".area_list").find("dd").hide().eq(a).show()
            });
            $("#hotel_position").click(function () {
                var a = $(".keyword_search");
                $(this);
                a.show();
                $(document).click(function (d) {
                    d = d || window.event;
                    "BODY" != d.target.nodeName && "FROM" != d.target.nodeName || a.hide()
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
    var c = new Date(Date.parse(jQuery("#txtCheckIn").val())), b = new Date(Date.parse(jQuery("#txtCheckOut").val()));
    if (c >= b) return alert("\u9000\u623f\u65e5\u671f\u5e94\u5927\u4e8e\u5165\u4f4f\u65e5\u671f"), !1;
    c = 0;
    "" == jQuery(".select-txt").html() && (c = 0);
    "\u4e0d\u9650" == jQuery(".select-txt").html() &&
    (c = 0);
    "\u4e94\u661f\u7ea7/\u8c6a\u534e" == jQuery(".select-txt").html() && (c = 5);
    "\u56db\u661f\u7ea7/\u9ad8\u6863" == jQuery(".select-txt").html() && (c = 4);
    "\u4e09\u661f\u7ea7/\u8212\u9002" == jQuery(".select-txt").html() && (c = 3);
    "\u4e8c\u661f\u7ea7\u53ca\u4ee5\u4e0b" == jQuery(".select-txt").html() && (c = 2);
    var a = jQuery("#txthidencityid").val(), b = jQuery("#txthideLocationZoneType").val(),
        d = jQuery("#txthidenID").val(), e = jQuery("#txtKeyword").val();
    jQuery("#txtCheckIn").val();
    jQuery("#txtCheckOut").val();
    var f = jQuery("#txthideninchina").val(),
        g = jQuery("#txthidenename").val().toLowerCase(),
        g = g ? g.replace(/.*[\u4e00-\u9fa5]+.*$/gm, "lists").replace(/\s/gm, "").replace(/[^a-z0-9]*/gmi, "") : "ename";
    0 < a ? (a = f ? "http://hotels.ctrip.com/hotel/" + g + "" + a + "/" : "http://hotels.ctrip.com/international/" + g + "" + a + "/", "" != e ? (0 != c && (a += "star" + c), a += "/k1" + e) : ("" != b && (a += b + d), 0 != c && (a += "star" + c)), document.forms[0].action = a, document.forms[0].target = "_blank", document.forms[0].method = "post", document.forms[0].submit()) : window.open("http://hotels.ctrip.com/")
}

function viewCtripHotelMap(c, b) {
    0 == c ? window.open("http://hotels.ctrip.com/") : jQuery("#txthideninchina").val() ? window.open("http://hotels.ctrip.com/hotel/" + b + "" + c + "/map") : window.open("http://hotels.ctrip.com/international/maplist/" + b + "" + c + "")
}

function ShowNearHotel() {
    var c = $("#CityID").val(), b = $("#putDistrictId").val(), a = $("#Lat").val(), d = $("#Lon").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/GetNearHotel",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {City: c, District: b, Lat: a, Lon: d, rank: Math.random()},
        success: function (a) {
            "" == a ? $("#dest_NearHotel").hide() : $("#dest_NearHotel").html(a)
        },
        error: function () {
            $("#dest_NearHotel").hide()
        }
    })
}

function ShowCityHotelList() {
    var c = $("#txthidencityid").val(), b = $("#txthidendistrictid").val(), a = $("#txthideninchina").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowCityHotelList",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {City: c, District: b, InChina: a, rank: Math.random()},
        success: function (a) {
            "" == a ? $("#cityHotelListID").hide() : $("#cityHotelListID").html(a)
        },
        error: function () {
            $("#cityHotelListID").hide()
        }
    })
}

function GetExpertPartialView() {
    var c = $("#txtDistrictId").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/GetExpertPartialView",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {district: c, rank: Math.random()},
        success: function (b) {
            "" == b ? $("#destexpertId").hide() : $("#destexpertId").html(b)
        },
        error: function () {
            $("#destexpertId").hide()
        }
    })
}

function ShowAroundList() {
    var c = $("#putDistrictId").val();
    $("#JourUrl").val();
    $.ajax({
        url: "/Destinationsite/SharedComm/ShowAroundList",
        type: "POST",
        async: !0,
        dataType: "text",
        data: {district: c, rank: Math.random()},
        success: function (b) {
            "" != b ? ($("#tourListId").html(b), $("#aroundSpanId").show()) : $("#tourListId").html('<div class="gs_list_load"><i class="listface"></i>\u8fd9\u91cc\u6682\u65f6\u6ca1\u6709\u5468\u8fb9\u6e38\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5<a target="_blank" href="http://vacations.ctrip.com/domestic/">\u67e5\u770b\u66f4\u591a</a></p></div>')
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
        var b = $(this);
        b.hasClass("current") || b.hasClass("a_popup_login") || ($(this).siblings("p").find(".textcolor").html("\u6211\u60f3\u53bb"), b = wantBeen(this), INTERFACE.wantRequestFn(b))
    });
    $(".dest_toptitle .des_icon_been a").hover(function () {
        $(this).hasClass("current") || $(this).siblings("p").find(".textcolor").html("\u6211\u53bb\u8fc7")
    }, function () {
        $(this).hasClass("current") ||
        $(this).siblings("p").find(".textcolor").html("\u53bb\u8fc7")
    });
    $(".dest_toptitle .des_icon_been a").click(function () {
        var b = $(this);
        b.hasClass("current") || b.hasClass("a_popup_login") || ($(this).siblings("p").find(".textcolor").html("\u6211\u53bb\u8fc7"), b = wantBeen(this), INTERFACE.beenRequestFn(b))
    });
    0 !== $("#myCarousel").length && $("#myCarousel").carousel();
    0 !== $("#detailCarousel").length && $("#detailCarousel").carousel();
    GS.ismoblie ? $(".hoverweather span.arrow").remove() : ($("#WeaTher").mouseenter(function () {
        var b =
            $(this), a = b.offset().top - 11, b = b.offset().left - 47;
        $(".hoverweather").css({position: "absolute", top: a, left: b, display: "block", "z-index": "22"})
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
    var c = $(".ttd_guide_nav").height();
    $(".ttd_topnav ul li.ttd_guide_nav").hover(function () {
        $(this).addClass("ttd_nav_cur");
        $(this).find(".ttd_guide_link").addClass("ttd_guide_cur");
        $(this).find(".corner_down_icon").addClass("corner_down_cur");
        $(this).find(".ttd_guide_uplayer").css("top", c).show()
    }, function () {
        $(this).removeClass("ttd_nav_cur");
        $(this).find(".ttd_guide_link").removeClass("ttd_guide_cur");
        $(this).find(".corner_down_icon").removeClass("corner_down_cur");
        $(this).find(".ttd_guide_uplayer").hide()
    })
});

function wantBeen(c) {
    c = $(c);
    var b = c.siblings("p").find("em"), a = c.offset(), d = a.top, a = a.left + 40, b = parseInt(b.text(), 10), e = 1,
        b = isNaN(b) ? 0 : b, b = 0 > b ? 0 : b;
    0 === $("#gs_addone_1").length && $("body").append($('<div id="gs_addone_1" class="gs_addone_1">+1</div>'));
    c.hasClass("current") ? (b--, e = -1, c.removeClass("current"), $("#gs_addone_1").text("-1")) : (b++, e = 1, c.addClass("current"), $("#gs_addone_1").text("+1"));
    $("#gs_addone_1").css({opacity: 1, top: d, left: a, display: "block", "font-size": "18px"}).animate({
            top: d - 30,
            opacity: 0
        },
        "slow", function () {
            $("#gs_addone_1").text("+1")
        });
    return e
}

function $tabs(c, b, a) {
    $(c).click(function () {
        if ($(this).parent().hasClass("scroll-top")) {
            var d = $(".journalbtn_t").offset().top;
            $("body,html").animate({scrollTop: d}, 500)
        }
        $(this).addClass("current").siblings().removeClass("current");
        $(b).hide().eq($(c).index(this)).show();
        "function" == typeof a && a($(this))
    });
    $(".journalslistv1 .journal-item").hover(function () {
        $(this).addClass("itemhover")
    }, function () {
        $(this).removeClass("itemhover")
    })
}

$(function () {
    $(".deschange .changelink").click(function () {
        var b = $(this), a = b.prev(), b = b.next(), d = a.val();
        a.val(b.val());
        b.val(d);
        return !1
    });
    $(".special_ticket li:last").css("border-bottom", "none");
    $("#textAskSearch").placeholder();
    $("#btnAskSearch").click(function () {
        var b = $.trim($("#textAskSearch").val());
        "" != b && "\u8f93\u5165\u60a8\u7684\u95ee\u9898" != b && window.open(INTERFACE.askSearchUrl + encodeURIComponent(b))
    });
    $(".check_kdgl .b_blue_s, .check_kdgl a.guidepic, .check_kdgl dt.ellipsis a").on("click",
        function (b) {
            b.preventDefault();
            $(".scan_kdglbox").show()
        });
    var c = function () {
        var b = document.createElement("canvas");
        return !(!b.getContext || !b.getContext("2d"))
    };
    INTERFACE.gs_kdgl_url && $("#glcode_share").qrcode({
        width: 110,
        height: 110,
        correctLevel: 0,
        render: c() ? "canvas" : "table",
        text: INTERFACE.gs_kdgl_url
    })
});
(function (c) {
    function b() {
        var a = 7, d = 8;
        INTERFACE.isChina || (a = 10, d = 15);
        $("#hotelStartDate").val(getDateStr(a));
        $("#hotelEndDate").val(getDateStr(d));
        $("#hotelStartDate,#hotelEndDate").calendar({
            callback: function (a, d) {
                var b = a.match(/-[\d]{1}\b/g), c = d.attr("id"), k = $("#hotelStartDate"), n = $("#hotelEndDate");
                if (null != b) for (var p = 0; p < b.length; p++) {
                    var h = b[p].replace("-", "-0");
                    a = a.replace(/-[\d]{1}\b/, h)
                }
                switch (c) {
                    case "hotelEndDate":
                        n = k.val();
                        checkDate(n, a) || (a = getDateStr(1, n));
                        break;
                    case "hotelStartDate":
                        b =
                            n.val(), checkDate(a, b) || (n.val(getDateStr(1, a)), n.focus())
                }
                d.val(a)
            }
        });
        $("#hotelKeyword").placeholder();
        $("#cate_hotel .b_blue_s").click(function () {
            var a = $.trim($("#hotelTo").val());
            if ("" == a) return $("#hotelTo").focus(), !1;
            "\u9152\u5e97\u540d/\u5730\u6807/\u5546\u5708" == $("#hotelKeyword").val() && $("#hotelKeyword").val("");
            a = {
                destination: GS.xssFilter(a),
                destinationData: $("#hotelTo").attr("data") || "",
                startDate: $("#hotelStartDate").val(),
                endDate: $("#hotelEndDate").val(),
                hotelLevel: $("#cate_hotel .select-txt").attr("data-value") ||
                0,
                keyword: GS.xssFilter($.trim($("#hotelKeyword").val()))
            };
            INTERFACE.searchHotelFn(a)
        })
    }

    c = this[c] = this && this[c] || {};
    c.initHotel = function () {
        $(".tabitem .gsn-select").on("click", function (a) {
            var b = $(this);
            "none" == b.children("ul").css("display") ? (b.children("ul").show(), b.children("span").addClass("arrow-cur")) : (b.children("ul").hide(), b.children("span").removeClass("arrow-cur"));
            a.stopPropagation()
        });
        $(document).on("click", function () {
            var a = $(".tabitem .gsn-select");
            a.children("ul").hide();
            a.children("span").removeClass("arrow-cur")
        });
        $(".tabitem .gsn-select a").click(function (a) {
            var b = $(this), c = b.attr("data-value");
            b.parents(".gsn-select").find(".select-txt").html(b.html()).addClass("select-txt-cur").attr("data-value", c);
            b.parents("ul").hide();
            b.parents(".gsn-select").children("span").removeClass("arrow-cur");
            a.stopPropagation()
        });
        var a = $("#hotelTo").val();
        b();
        $("#hotelTo").citySelect({
            drawHtml: function (a) {
                $.getScript("http://hotels.ctrip.com/Domestic/Tool/AjaxGetCitySuggestion.aspx", function () {
                    var b = cQuery.jsonpResponse.suggestion,
                        c = [], g = [], l;
                    for (l in b) {
                        var k = [], n = {}, p = b[l], h = p.length, m = 0, q = 0;
                        if ("\u70ed\u95e8" != l) {
                            for (g.push("<li><span>" + l + "</span></li>"); m < h; m++) {
                                var r = p[m];
                                (q = r.group || "") && (n[q] = n[q] ? n[q] + ('<a href="javascript:void(0);" data="' + r.data + '">' + r.display + "</a>") : '<div class="city_item_in cf"><span class="city_item_letter">' + q + '</span><a href="javascript:void(0);" data="' + r.data + '">' + r.display + "</a>")
                            }
                            k.push('<div class="city_item">');
                            for (var s in n) n[s] += "</div>", k.push(n[s]);
                            k.push("</div>")
                        } else {
                            g.push('<li class="current"><span>' +
                                l + "</span></li>");
                            for (k.push('<div class="city_item current"><div>'); q < h; q++) r = p[q], k.push('<a href="javascript:void(0);" data="' + r.data + '">' + r.display + "</a>");
                            k.push("</div></div>")
                        }
                        c.push(k.join(""))
                    }
                    a({html: c.join(""), tabHtml: g.join("")})
                })
            }, eventControl: function (b) {
                var c = b.$element;
                b.container.find(".city_item a").click(function () {
                    var f = $.trim($(this).text());
                    a != f && ($("#hotelKeyword").val(""), c.val(f), c.attr("data", $(this).attr("data")), a = f);
                    b.blur()
                })
            }
        });
        $("#hotelTo").citySuggest({
            formatData: function (a,
                                  b) {
                var c = "http://hotels.ctrip.com/Domestic/Tool/AjaxIndexCityNew.aspx?keyword=" + escape(a);
                $.getScript(c, function () {
                    var a = cQuery.jsonpResponse;
                    if (a && a.data) {
                        for (var a = a.data.split("@"), d = a.length, c = 0, f = []; c < d; c++) if (0 != c && c != d - 1) {
                            var p = a[c], h = p.split("|"), m = {};
                            0 < h.length && (m.text = h[7] + "" + h[5], m.data = p, m.keyword = h[4], f.push(m))
                        }
                        b(f)
                    }
                })
            }, eventControl: function (b) {
                var c = b.container, f = b.$element;
                c.find(".city_suggest_item").click(function () {
                    var c = $(this).attr("data"), e = c.split("|"), k = e[1], e = e[4];
                    k == e &&
                    (e = "");
                    $("#hotelTo").val(k);
                    $("#hotelTo").attr("data", c);
                    a != k && ($("#hotelKeyword").val(e), a = k);
                    b.hidePopup();
                    b.firstData = null
                });
                $(document).one("click", function () {
                    var a = b.firstData;
                    a ? a.keyword && c.find(".city_suggest_item").eq(0).trigger("click") : "" === a && (f.val(""), f.attr("data", ""));
                    b.firstData = null
                })
            }
        })
    };
    c.initForeignHotel = function () {
        var a = $("#hotelTo").val();
        b();
        $("#hotelTo").citySelect({
            drawHtml: function (a) {
                $.getScript("http://hotels.ctrip.com/international/Tool/citySource_J.aspx?charset=gb2312",
                    function () {
                        var b = cQuery.jsonpResponse.suggestion.cities, c = [], g = [], l;
                        for (l in b) {
                            var k = [], n = b[l], p = n.length, h = 0;
                            "\u70ed\u95e8" != l ? (g.push("<li><span>" + l + "</span></li>"), k.push('<div class="city_item"><div></div>')) : (g.push('<li class="current"><span>' + l + "</span></li>"), k.push('<div class="city_item current"><div>'));
                            for (; h < p; h++) {
                                var m = n[h];
                                k.push('<a href="javascript:void(0);" data="' + m.data + '">' + m.display + "</a>")
                            }
                            k.push("</div></div>");
                            c.push(k.join(""))
                        }
                        a({html: c.join(""), tabHtml: g.join("")})
                    })
            },
            eventControl: function (b) {
                var c = b.$element;
                b.container.find(".city_item a").click(function () {
                    var f = $.trim($(this).text()), g = $(this).attr("data").split("|"), l = g[2];
                    g[2] = g[3];
                    g[3] = l;
                    a != f && ($("#hotelKeyword").val(""), c.val(f), c.attr("data", g.join("|")), a = f);
                    b.blur()
                })
            }
        });
        $("#hotelTo").citySuggest({
            formatData: function (a, b) {
                var c = "http://hotels.ctrip.com/international/Tool/cityFilter.aspx?charset=gb2312&IsUseNewStyle=T&keyword=" + escape(a);
                $.getScript(c, function () {
                    var a = cQuery.jsonpResponse;
                    if (a && a.data) {
                        for (var a =
                            a.data.split("@"), d = a.length, c = 0, f = []; c < d; c++) if (0 != c && c != d - 1) {
                            var p = a[c], h = p.split("|"), m = {};
                            0 < h.length && (m.text = h[1], m.data = p, f.push(m))
                        }
                        b(f)
                    }
                })
            }, eventControl: function (b) {
                var c = b.container, f = b.$element;
                c.find(".city_suggest_item").click(function () {
                    var c = $(this).attr("data"), e = c.split("|")[1];
                    $("#hotelTo").val(e);
                    $("#hotelTo").attr("data", c);
                    a != e && ($("#hotelKeyword").val(""), a = e);
                    b.hidePopup();
                    b.firstData = null
                });
                $(document).one("click", function () {
                    var a = b.firstData;
                    a ? c.find(".city_suggest_item").eq(0).trigger("click") :
                        "" === a && (f.val(""), f.attr("data", ""));
                    b.firstData = null
                })
            }
        })
    }
})("SearchControl");
(function (c) {
    function b() {
        $("#flightOneWay")[0].checked = !0;
        $("#flightBackForth")[0].checked = !1;
        $("input[name='flyType']").change(function () {
            0 == $("input[name='flyType']:checked").val() ? $("#cate_flight .sformline").eq(4).addClass("gray") : $("#cate_flight .sformline").eq(4).removeClass("gray")
        });
        $("#flightStartDate").val("yyyy-mm-dd");
        $("#flightEndDate").val("yyyy-mm-dd");
        $("#flightStartDate,#flightEndDate").calendar({
            callback: function (a, b) {
                var c = a.match(/-[\d]{1}\b/g), f = b.attr("id"), g = $("#flightStartDate"),
                    l = $("#flightEndDate");
                if (null != c) for (var k = 0; k < c.length; k++) {
                    var n = c[k].replace("-", "-0");
                    a = a.replace(/-[\d]{1}\b/, n)
                }
                switch (f) {
                    case "flightStartDate":
                        1 == $("input[name='flyType']:checked").val() && (c = l.val(), "yyyy-mm-dd" == c ? (l.val(getDateStr(1, a)), l.focus()) : checkDate(a, c) || (l.val(getDateStr(1, a)), l.focus()));
                        break;
                    case "flightEndDate":
                        c = g.val(), "yyyy-mm-dd" == c || checkDate(c, a) || (a = getDateStr(1, c)), l.parents(".sformline").removeClass("gray"), $("input[name='flyType']").attr("checked", "1")
                }
                b.val(a)
            }
        });
        $("#cate_flight .changeinput a").click(function () {
            var a = $("#flightFrom"), b = $("#flightTo"), c = a.val();
            a.val(b.val());
            b.val(c);
            c = a.attr("data");
            a.attr("data", b.attr("data"));
            b.attr("data", c)
        });
        $("#cate_flight .radiobox").click(function (a) {
            "flyType" != a.target.name && ($(this).find("input[type='radio']").attr("checked", !0), 0 == $("input[name='flyType']:checked").val() ? $("#cate_flight .sformline").eq(4).addClass("gray") : $("#cate_flight .sformline").eq(4).removeClass("gray"))
        });
        $("#cate_flight .b_blue_s").click(function () {
            if ("" ==
                $.trim($("#flightFrom").val())) return $("#flightFrom").focus(), !1;
            if ("" == $.trim($("#flightTo").val())) return $("#flightTo").focus(), !1;
            if ("yyyy-mm-dd" == $.trim($("#flightStartDate").val())) return $("#flightStartDate").focus(), !1;
            var a = {
                type: $("#cate_flight input[type='radio']:checked").val(),
                from: GS.xssFilter($.trim($("#flightFrom").val())),
                fromData: $("#flightFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#flightTo").val())),
                destinationData: $("#flightTo").attr("data") || "",
                startDate: $("#flightStartDate").val(),
                endDate: $("#flightEndDate").val()
            };
            INTERFACE.searchFlightFn(a)
        })
    }

    c = this[c] = this && this[c] || {};
    c.initFlight = function () {
        function a(a) {
            var b = [], c = [], d;
            for (d in a) {
                var e = [];
                if ("\u70ed\u95e8" != d) {
                    c.push("<li><span>" + d + "</span></li>");
                    e.push('<div class="city_item">');
                    var f = a[d], m;
                    for (m in f) {
                        var q = f[m], r = q.length, s = 0;
                        for (e.push('<div class="city_item_in cf"><span class="city_item_letter">' + m + "</span>"); s < r; s++) {
                            var t = q[s];
                            e.push('<a href="javascript:void(0);" data="' + t.data + '">' + t.display + "</a>")
                        }
                        e.push("</div>")
                    }
                    e.push("</div>")
                } else {
                    q =
                        a[d];
                    r = q.length;
                    f = 0;
                    c.push('<li class="current"><span>' + d + "</span></li>");
                    e.push('<div class="city_item current"><div>');
                    for (f = 0; f < r; f++) t = q[f], e.push('<a href="javascript:void(0);" data="' + t.data + '">' + t.display + "</a>");
                    e.push("</div></div>")
                }
                b.push(e.join(""))
            }
            return {html: b.join(""), tabHtml: c.join("")}
        }

        var c = null, e = null;
        b();
        $("#flightFrom,#flightTo").citySelect({
            drawHtml: function (b) {
                c ? b(a(c)) : $.ajax({
                    dataType: "script",
                    scriptCharset: "gb2312",
                    url: "http://webresource.c-ctrip.com/code/cquery/resource/address/flight/flight_new_gb2312.js",
                    success: function () {
                        c = cQuery.jsonpResponse.suggestion;
                        e = cQuery.jsonpResponse.data;
                        b(a(c))
                    }
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_item a").click(function () {
                    b.val() != $(this).text() && (b.val($(this).text()), b.attr("data", $(this).attr("data")));
                    "flightFrom" == b.attr("id") && $("#flightTo").trigger("click");
                    a.blur()
                })
            }
        });
        var f = new CitySuggestFilter({
            sort: function (a, b, c, d) {
                var e = [], f = 0, m = RegExp("@" + b + ".+", "i"), q = RegExp("@.+\\|([a-z]{3},)*" + b + ".+", "i"),
                    r = /[a-z]/i;
                a.replace(RegExp("@([^@]*" +
                    b + "[^@]*)", "gi"), function (a, c) {
                    var g = 0, k = !1, u = c.split("|");
                    d ? u[1] == b && (e[f++] = {
                        left: u[0],
                        right: u[1],
                        text: u[1],
                        data: c,
                        sortPrioity: g
                    }) : ("" != u[6] && (g -= 200), 0 < u[1].indexOf("(") && (g -= 1), -1 < u[0].indexOf("Shanhaiguan") && (g -= 5), 1 == b.length ? r.test(b) ? (k = m.test(a), g += 100) : (k = q.test(a), g += 50) : 1 < b.length && (m.test(a) && (g += 100, k = !0), q.test(a) && (0 == u[4].indexOf(b.toUpperCase()) && (g += 50), 0 == u[2].indexOf(b.toUpperCase()) && (g += 10), k = !0)), k && isNaN(b) && (e[f++] = {
                        left: u[0],
                        right: u[1],
                        text: u[1],
                        data: c,
                        priority: g
                    }))
                });
                d ||
                e.sort(function (a, b) {
                    return a.priority == b.priority ? a.data < b.data ? -1 : a.data > b.data ? 1 : 0 : a.priority > b.priority ? -1 : 1
                });
                return e
            }
        });
        $("#flightFrom,#flightTo").citySuggest({
            formatData: function (a, b) {
                var c = [];
                e && (c = f.getfilterData(e, a, !1, !1));
                if (c && 0 < c.length) for (var d = c.length, p = 0; p < d; p++) {
                    var h = c[p];
                    str = h.data;
                    arr = str.split("|");
                    airPort = arr[5];
                    distance = arr[6];
                    if ("-" != airPort) {
                        h.noAirPort = !0;
                        airPort = airPort.split("#");
                        distance = distance.split("#");
                        h.airPort = [];
                        h.airPortText = [];
                        for (var m = 0; m < airPort.length; m++) {
                            var q =
                                airPort[m].replace("-", "");
                            h.airPortText.push("-\u90bb\u8fd1\u673a\u573a\uff1a" + q + "-" + distance[m] + "");
                            h.airPort.push(q)
                        }
                    }
                }
                b(c)
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_suggest_item").click(function (c) {
                    var d = $(this).attr("data").split("|"), e = d[1], d = d[2];
                    $(this).attr("data-airPort") ? (e = $(this).attr("data-airPort"), b.val(e), b.trigger("keyup")) : (b.val(e), a.hidePopup(), b.attr("data", "|" + e + "|" + d), "flightFrom" == b.attr("id") && $("#flightTo").trigger("click"));
                    a.firstData = null;
                    c.stopPropagation()
                });
                $(document).one("click", function () {
                    var c = a.firstData;
                    c ? c.noAirPort && 0 < c.airPort.length ? (b.val(""), b.attr("data", "")) : (b.val(c.text), c = c.data.split("|"), b.attr("data", "|" + c[1] + "|" + c[2])) : "" === c && (b.val(""), b.attr("data", ""));
                    a.firstData = null
                })
            }
        })
    };
    c.initForeignFlight = function () {
        b();
        $("#flightFrom,#flightTo").citySelect({
            drawHtml: function (a, b) {
                var c = "",
                    c = "flightFrom" == b.$element.attr("id") ? "http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/flightintl_start_new_gb2312.js" : "http://webresource.c-ctrip.com/code/cquery/resource/address/flightintl/flightintl_dest_new_gb2312.js";
                $.ajax({
                    dataType: "script", scriptCharset: "gb2312", url: c, success: function () {
                        var b = cQuery.jsonpResponse.suggestion, c = [], d = [], e = 0, n;
                        for (n in b) {
                            var p = [], h = b[n], m = h.length, q = 0;
                            0 !== e ? (d.push("<li><span>" + n + "</span></li>"), p.push('<div class="city_item"><div>')) : (d.push('<li class="current"><span>' + n + "</span></li>"), p.push('<div class="city_item current"><div>'));
                            for (q = 0; q < m; q++) {
                                var r = h[q];
                                p.push('<a href="javascript:void(0);" data="' + r.data + '">' + r.display + "</a>")
                            }
                            p.push("</div></div>");
                            c.push(p.join(""));
                            e++
                        }
                        a({html: c.join(""), tabHtml: d.join("")})
                    }
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_item a").click(function () {
                    if (b.val() != $(this).text()) {
                        var c = escape($(this).text());
                        $.ajax({
                            dataType: "script",
                            scriptCharset: "gb2312",
                            url: "http://flights.ctrip.com/international/tools/GetCities.ashx?s=" + c + "&a=0&t=0",
                            success: function () {
                                var a = cQuery.jsonpResponse, g = a.data;
                                a.data && 1 < a.data.split("|").length && (c = g.split("|")[1], a = c.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"), b.val(c), b.attr("data",
                                    a))
                            }
                        })
                    }
                    "flightFrom" == b.attr("id") && $("#flightTo").trigger("click");
                    a.blur()
                })
            }
        });
        $("#flightFrom,#flightTo").citySuggest({
            formatData: function (a, b) {
                var c = "http://flights.ctrip.com/international/tools/GetCities.ashx?s=" + escape(a) + "&a=0&t=0";
                $.getScript(c, function () {
                    var a = cQuery.jsonpResponse;
                    if (a && a.data) {
                        for (var a = a.data.split("@"), c = a.length, e = 0, k = []; e < c; e++) if (a[e]) {
                            var n = a[e], p = n.split("|"), h = {};
                            0 < p.length && (h.text = p[3], h.data = n, h.value = p[1], k.push(h))
                        }
                        b(k)
                    } else b([])
                })
            }, eventControl: function (a) {
                var b =
                    a.$element;
                a.container.find(".city_suggest_item").click(function (c) {
                    var f = $(this).attr("data").split("|")[1];
                    b.val(f);
                    b.attr("data", f.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"));
                    a.hidePopup();
                    "flightFrom" == b.attr("id") && $("#flightTo").trigger("click");
                    a.firstData = null;
                    c.stopPropagation()
                });
                $(document).one("click", function () {
                    var c = a.firstData;
                    c ? (b.val(c.value), b.attr("data", c.value.replace(/(.*?)\(([a-z]*?)\)/ig, "|$1|$2"))) : "" === c && (b.val(""), b.attr("data", ""));
                    a.firstData = null
                })
            }
        })
    }
})("SearchControl");
var Cmd = {};
(function (c) {
    function b() {
        $("#cate_travel .radiobox").click(function () {
            $(this).find("input[type='radio']").attr("checked", !0);
            $(this).parents(".checkul").find(".radiobox").not(this).find("input[type='radio']").attr("checked", !1)
        });
        $("#cate_travel .b_blue_s").click(function () {
            if ("" == $.trim($("#travelTo").val())) return $("#travelTo").focus(), !1;
            var a = {
                from: $.trim($("#travelFrom").val()),
                fromData: $("#travelFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#travelTo").val())),
                destinationData: $("#travelTo").attr("data") || ""
            };
            INTERFACE.searchTravelFn(a)
        })
    }

    c = this[c] = this && this[c] || {};
    c.initTravel = function () {
        b();
        var a = $("#travelFrom").attr("data") || 2, c = {}, e = {
            "\u70ed\u95e8\u57ce\u5e02": [{display: "\u5317\u4eac", data: "1"}, {
                display: "\u4e0a\u6d77",
                data: "2"
            }, {display: "\u5929\u6d25", data: "3"}, {
                display: "\u91cd\u5e86",
                data: "4"
            }, {display: "\u54c8\u5c14\u6ee8", data: "5"}, {
                display: "\u5927\u8fde",
                data: "6"
            }, {display: "\u9752\u5c9b", data: "7"}, {display: "\u897f\u5b89", data: "10"}, {
                display: "\u6566\u714c",
                data: "11"
            }, {display: "\u5357\u4eac", data: "12"}],
            ABCD: {
                B: [{display: "\u5317\u4eac", data: "1"}, {display: "\u5305\u5934", data: "141"}],
                C: [{display: "\u91cd\u5e86", data: "4"}, {
                    display: "\u6210\u90fd",
                    data: "28"
                }, {display: "\u957f\u6625", data: "158"}, {
                    display: "\u957f\u6c99",
                    data: "206"
                }, {display: "\u5e38\u5dde", data: "213"}],
                D: [{display: "\u5927\u8fde", data: "6"}, {display: "\u4e1c\u839e", data: "223"}]
            },
            EFGH: {
                F: [{display: "\u4f5b\u5c71", data: "251"}, {display: "\u798f\u5dde", data: "258"}],
                G: [{display: "\u5e7f\u5dde", data: "32"}, {display: "\u8d35\u9633", data: "38"}],
                H: [{
                    display: "\u54c8\u5c14\u6ee8",
                    data: "5"
                }, {display: "\u676d\u5dde", data: "17"}, {
                    display: "\u6d77\u53e3",
                    data: "42"
                }, {display: "\u547c\u548c\u6d69\u7279", data: "103"}, {
                    display: "\u6d77\u62c9\u5c14",
                    data: "142"
                }, {display: "\u5408\u80a5", data: "278"}]
            },
            JKLM: {
                J: [{display: "\u6d4e\u5357", data: "144"}, {display: "\u6c5f\u95e8", data: "316"}],
                K: [{display: "\u6606\u660e", data: "34"}, {display: "\u5580\u4ec0\u5e02", data: "109"}],
                L: [{display: "\u4e3d\u6c5f", data: "37"}, {
                    display: "\u62c9\u8428",
                    data: "41"
                }, {display: "\u5170\u5dde", data: "100"}],
                M: [{
                    display: "\u7ef5\u9633",
                    data: "370"
                }]
            },
            NOPQRS: {
                N: [{display: "\u5357\u4eac", data: "12"}, {
                    display: "\u5357\u901a",
                    data: "82"
                }, {display: "\u5b81\u6ce2", data: "375"}, {
                    display: "\u5357\u660c",
                    data: "376"
                }, {display: "\u5357\u5b81", data: "380"}],
                Q: [{display: "\u9752\u5c9b", data: "7"}, {display: "\u6cc9\u5dde", data: "406"}],
                S: [{display: "\u4e0a\u6d77", data: "2"}, {
                    display: "\u82cf\u5dde",
                    data: "14"
                }, {display: "\u6df1\u5733", data: "30"}, {
                    display: "\u4e09\u4e9a",
                    data: "43"
                }, {display: "\u77f3\u5bb6\u5e84", data: "428"}, {display: "\u6c55\u5934", data: "447"}, {
                    display: "\u6c88\u9633",
                    data: "451"
                }]
            },
            TUVWX: {
                T: [{display: "\u5929\u6d25", data: "3"}, {
                    display: "\u592a\u539f",
                    data: "105"
                }, {display: "\u53f0\u5dde", data: "578"}],
                W: [{display: "\u65e0\u9521", data: "13"}, {
                    display: "\u4e4c\u9c81\u6728\u9f50",
                    data: "39"
                }, {display: "\u6b66\u6c49", data: "477"}, {
                    display: "\u5a01\u6d77",
                    data: "47"
                }, {display: "\u6e29\u5dde", data: "491"}],
                X: [{display: "\u897f\u5b89", data: "10"}, {
                    display: "\u53a6\u95e8",
                    data: "25"
                }, {display: "\u897f\u5b81", data: "124"}, {
                    display: "\u897f\u660c",
                    data: "494"
                }, {display: "\u5f90\u5dde", data: "512"}]
            },
            YZ: {
                Y: [{display: "\u94f6\u5ddd", data: "99"}, {
                    display: "\u8fd0\u57ce",
                    data: "140"
                }, {display: "\u5ef6\u5409", data: "523"}, {display: "\u6986\u6797", data: "527"}, {
                    display: "\u70df\u53f0",
                    data: "533"
                }, {display: "\u4e49\u4e4c", data: "536"}],
                Z: [{display: "\u73e0\u6d77", data: "31"}, {
                    display: "\u4e2d\u5c71",
                    data: "553"
                }, {display: "\u90d1\u5dde", data: "559"}]
            }
        };
        $("#travelFrom,#travelPlayFrom").citySelect({
            drawHtml: function (a) {
                var b = [], c = [], d;
                for (d in e) {
                    var f = [];
                    if ("\u70ed\u95e8\u57ce\u5e02" != d) {
                        c.push("<li><span>" + d + "</span></li>");
                        f.push('<div class="city_item">');
                        var h = e[d], m;
                        for (m in h) {
                            var q = h[m], r = q.length, s = 0;
                            for (f.push('<div class="city_item_in cf"><span class="city_item_letter">' + m + "</span>"); s < r; s++) {
                                var t = q[s];
                                f.push('<a href="javascript:void(0);" data="' + t.data + '">' + t.display + "</a>")
                            }
                            f.push("</div>")
                        }
                        f.push("</div>")
                    } else {
                        q = e[d];
                        r = q.length;
                        h = 0;
                        c.push('<li class="current"><span>' + d + "</span></li>");
                        f.push('<div class="city_item current"><div>');
                        for (h = 0; h < r; h++) t = q[h], f.push('<a href="javascript:void(0);" data="' + t.data +
                            '">' + t.display + "</a>");
                        f.push("</div></div>")
                    }
                    b.push(f.join(""))
                }
                a({html: b.join(""), tabHtml: c.join("")})
            }, eventControl: function (b) {
                var c = b.$element;
                b.container.find(".city_item a").click(function () {
                    c.val() != $(this).text() && (c.val($(this).text()), c.attr("data", $(this).attr("data")));
                    if ("travelFrom" == c.attr("id")) a = $(this).attr("data") || 2; else if ("travelPlayFrom" == c.attr("id")) {
                        var d = $(this).attr("data") || 2;
                        INTERFACE.travelPlaySearch(d)
                    }
                    b.blur()
                })
            }
        });
        var f = new CitySuggestFilter;
        $("#travelTo").citySuggest({
            cannotToCache: !0,
            formatData: function (b, e) {
                c[a] ? (data = c[a], e(f.getfilterData(data, b, !1, !1))) : $.getScript("http://vacations.ctrip.com/booking/PageTools/HomeStatic/DestSelector2013.ashx?startCity=" + a, function () {
                    var k = Cmd.JsonPData;
                    k && (c[a] = k, e(f.getfilterData(k, b, !1, !1)))
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_suggest_item").click(function () {
                    var c = $(this).attr("data").split("|")[1];
                    b.val(c);
                    a.hidePopup()
                })
            }
        })
    }
})("SearchControl");
(function (c) {
    c = this[c] = this && this[c] || {};
    c.initTicket = function () {
        $("#ticketText").placeholder();
        new CitySuggestFilter;
        $("#ticketText").citySuggest({
            formatData: function (b, a) {
                $.ajax({
                    type: "GET",
                    url: "http://piao.ctrip.com/thingstodo-booking-bookingwebsite/api/AutoComplete?keyWords=" + b + "&pageIndex=1&count=10",
                    dataType: "jsonp",
                    success: function (b) {
                        b = b.SearchList;
                        for (var c = 0, f = b.length, g = []; c < f; c++) {
                            var l = b[c];
                            dataStr = l.ID + "|" + l.Name + "|" + l.ParentName + "|" + l.Type;
                            g.push({
                                data: dataStr, left: l.Name, right: l.ParentName,
                                text: l.Name, showRight: !0
                            })
                        }
                        a(g, !0)
                    }
                })
            }, eventControl: function (b) {
                var a = b.$element;
                b.container.find(".city_suggest_item").click(function () {
                    var c = $(this).attr("data"), e = c.split("|")[1];
                    a.val(e).attr("data", c);
                    b.hidePopup()
                })
            }
        })
    };
    $("#cate_ticket .b_blue_s").click(function () {
        var b = $("#ticketText"), a = b.attr("data"), b = $.trim(b.val());
        if ("" == b || "\u8bf7\u8f93\u5165\u666f\u70b9\u540d\u79f0" == b) return $("#ticketText").focus(), !1;
        var a = a.split("|"), c = a[0], e = "", e = "4" === a[3] ? "http://piao.ctrip.com/dest/t" + c + ".html" :
            "http://piao.ctrip.com/piao.html?keyword=" + encodeURIComponent(b);
        window.open(e)
    })
})("SearchControl");
(function (c) {
    function b() {
        var a = 7;
        INTERFACE.isChina || (a = 10);
        $("#trainStartDate").val(getDateStr(a));
        $("#trainStartDate").calendar({
            callback: function (a, b) {
                var c = a.match(/-[\d]{1}\b/g);
                if (null != c) for (var g = 0; g < c.length; g++) {
                    var l = c[g].replace("-", "-0");
                    a = a.replace(/-[\d]{1}\b/, l)
                }
                b.val(a)
            }
        });
        $("#cate_train .radiobox").click(function () {
            $(this).find("input[type='radio']").attr("checked", !0);
            $(this).siblings(".radiobox").find("input[type='radio']").attr("checked", !1)
        });
        $("#cate_train .changeinput a").click(function () {
            var a =
                $("#trainFrom"), b = $("#trainTo"), c = a.val();
            a.val(b.val());
            b.val(c);
            c = a.attr("data");
            a.attr("data", b.attr("data"));
            b.attr("data", c)
        });
        $("#cate_train .b_blue_s").click(function () {
            if ("" == $.trim($("#trainFrom").val())) return $("#trainFrom").focus(), !1;
            if ("" == $.trim($("#trainTo").val())) return $("#trainTo").focus(), !1;
            var a = {
                from: GS.xssFilter($.trim($("#trainFrom").val())),
                fromData: $("#trainFrom").attr("data") || "",
                destination: GS.xssFilter($.trim($("#trainTo").val())),
                destinationData: $("#trainTo").attr("data") ||
                "",
                startDate: $("#trainStartDate").val()
            };
            INTERFACE.searchTrainFn(a)
        })
    }

    c = this[c] = this && this[c] || {};
    c.initTrain = function () {
        function a(a) {
            var b = [], c = [], d;
            for (d in a) {
                var e = [], f = {}, m = a[d], q = m.length, r = 0, s = 0;
                if ("\u70ed\u95e8" != d) {
                    for (c.push("<li><span>" + d + "</span></li>"); r < q; r++) {
                        var t = m[r];
                        (s = t.data.split("|")[2].substring(0, 1).toUpperCase()) && (f[s] = f[s] ? f[s] + ('<a href="javascript:void(0);" data="' + t.data + '">' + t.display + "</a>") : '<div class="city_item_in cf"><span class="city_item_letter">' + s + '</span><a href="javascript:void(0);" data="' +
                            t.data + '">' + t.display + "</a>")
                    }
                    e.push('<div class="city_item">');
                    for (var v in f) f[v] += "</div>", e.push(f[v]);
                    e.push("</div>")
                } else {
                    c.push('<li class="current"><span>' + d + "</span></li>");
                    for (e.push('<div class="city_item current"><div>'); s < q; s++) t = m[s], e.push('<a href="javascript:void(0);" data="' + t.data + '">' + t.display + "</a>");
                    e.push("</div></div>")
                }
                b.push(e.join(""))
            }
            return {html: b.join(""), tabHtml: c.join("")}
        }

        b();
        var c = null, e = null;
        $("#trainFrom,#trainTo").citySelect({
            drawHtml: function (b) {
                c ? b(a(c)) : $.ajax({
                    dataType: "script",
                    scriptCharset: "gb2312",
                    url: "http://webresource.ctrip.com/code/cquery/resource/address/train_new/station_gb2312.js",
                    success: function () {
                        c = cQuery.jsonpResponse.suggestion;
                        e = cQuery.jsonpResponse.data;
                        b(a(c))
                    }
                })
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_item a").click(function () {
                    b.val() != $(this).text() && (b.val($(this).text()), b.attr("data", $(this).attr("data")));
                    "trainFrom" == b.attr("id") && $("#trainTo").trigger("click");
                    a.blur()
                })
            }
        });
        var f = new CitySuggestFilter({sort: "^0$ ^1$ ^3+$ ^0 ^1 ^3+".split(" ")});
        $("#trainFrom,#trainTo").citySuggest({
            formatData: function (a, b) {
                b(f.getfilterData(e, a, !1, !1))
            }, eventControl: function (a) {
                var b = a.$element;
                a.container.find(".city_suggest_item").click(function (c) {
                    var d = $(this).attr("data").split("|"), e = d[1], d = $.trim(d[0]), d = "|" + e + "|" + d;
                    b.val(e);
                    b.attr("data", d);
                    a.hidePopup();
                    "trainFrom" == b.attr("id") && $("#trainTo").trigger("click");
                    a.firstData = null;
                    c.stopPropagation()
                });
                $(document).one("click", function () {
                    var c = a.firstData;
                    if (c) {
                        var d = c.data.split("|"), e = d[1], d = $.trim(d[0]),
                            e = "|" + e + "|" + d;
                        b.val(c.text);
                        b.attr("data", e)
                    } else "" === c && (b.val(""), b.attr("data", ""));
                    a.firstData = null
                })
            }
        })
    }
})("SearchControl");
$(function () {
    var c = INTERFACE.isChina;
    $("#cateSTab li a").click(function () {
        var b = $(this);
        if (!b.parent().hasClass("active")) {
            b.parent().siblings("li").removeClass("active");
            b.parent().addClass("active");
            var a = b.attr("href");
            $(a).siblings(".tabitem").removeClass("active");
            $(a).addClass("active");
            $(".city_select_popup").hide();
            $(".city_suggest_popup").hide();
            if (!b.data("withoutFn")) switch (a) {
                case "#cate_flight":
                    c ? SearchControl.initFlight() : SearchControl.initForeignFlight();
                    b.data("withoutFn", !0);
                    break;
                case "#cate_ticket":
                    SearchControl.initTicket();
                    b.data("withoutFn", !0);
                    break;
                case "#cate_train":
                    SearchControl.initTrain(), b.data("withoutFn", !0)
            }
        }
        return !1
    });
    c ? SearchControl.initHotel() : SearchControl.initForeignHotel();
    SearchControl.initTravel()
});

function submitForm(c) {
    if (c.action) {
        var b = document.createElement("FORM"), a = c.charset || "utf-8", d = c.method || "post", e = c.target || "",
            f = [], g = c.action;
        c = c.param || {};
        for (var l in c) f.push('<input type="hidden" name="' + l + '" value="' + c[l] + '" />');
        b.setAttribute("accept-charset", a);
        b.target = e;
        b.method = d;
        b.action = g;
        b.innerHTML = f.join("");
        document.body.appendChild(b);
        document.charset = "gb2312";
        jQuery(window).on("beforeunload", function () {
            document.charset = "UTF-8";
            jQuery(window).off("beforeunload")
        });
        b.submit()
    }
}

function getDateStr(c, b) {
    var a = new Date;
    if (b) var a = b.split("-"), d = parseInt(a[0], 10), e = parseInt(a[1], 10) - 1, a = parseInt(a[2], 10),
        a = new Date(d, e, a);
    a.setDate(a.getDate() + c);
    d = a.getFullYear();
    e = 10 > a.getMonth() + 1 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1;
    a = 10 > a.getDate() ? "0" + a.getDate() : a.getDate();
    return d + "-" + e + "-" + a
}

function checkDate(c, b) {
    var a = c.split("-"), d = b.split("-"), e = parseInt(a[0], 10), f = parseInt(d[0], 10), g = parseInt(a[1], 10),
        l = parseInt(d[1], 10), a = parseInt(a[2], 10), d = parseInt(d[2], 10);
    return e < f || e == f && g < l || e == f && g == l && a < d ? !0 : !1
}

function GetDateDiff(c) {
    var b = new Date;
    c = new Date(Date.parse(c.replace(/-/g, "/")));
    return Math.ceil(parseFloat((c - b) / 864E5, 10))
}

$(function () {
    $(".cate_search li:last").css("border", "none");
    $(".cate_search").on("change", ".mchkbox input[type='checkbox']", function () {
        $(this).parent().index() ? $(this).parents("p").find("input[type='checkbox']").eq(0).attr("checked", !1) : ($(this).parents("p").find("input[type='checkbox']").attr("checked", !1), $(this).attr("checked", !0))
    });
    var c = null;
    $(".cate_search .morecheck").click(function () {
        c && 0 < c.length && c.find(".btn_cancel").trigger("click");
        var b = $(this).parents("li"), a = b.attr("data-type");
        b.hide();
        if (b.next().hasClass("mchkbox")) b.next("li.mchkbox").show(); else {
            var d = [], e = b.find("dt a").attr("data-id") || "";
            d.push('<li class="mchkbox" data-type="' + a + '">');
            d.push("\t<span>" + b.find("dt span").text() + "</span>");
            d.push("\t<p>");
            d.push('\t\t<label class="base_label">');
            d.push('\t\t\t<input type="checkbox" data-id="' + e + '" value=""');
            b.find("dt a").hasClass("current") && d.push('\t\tchecked="checked"');
            d.push("\t\t>");
            d.push("\t\t\t\u4e0d\u9650");
            d.push(" \t</label>");
            b.find("dd a").each(function () {
                var a =
                    $(this).text(), b = $(this).attr("data-id") || "";
                d.push('\t<label class="base_label">');
                d.push('\t\t\t<input type="checkbox" value="" data-id="' + b + '"');
                $(this).hasClass("current") && d.push('\t\tchecked="checked"');
                d.push("\t\t>");
                d.push(a);
                d.push(" </label>")
            });
            d.push("\t</p>");
            d.push("\t<p>");
            d.push('\t\t<a class="btn_submit" href="javascript:;">\u786e\u5b9a</a>');
            d.push('\t\t<a class="btn_cancel" href="javascript:;">\u53d6\u6d88</a>');
            d.push("\t</p>");
            d.push("</li>");
            b.after(d.join(""))
        }
        c = b.next("li.mchkbox")
    });
    $(".cate_search").on("click", ".mchkbox .btn_cancel", function () {
        $(this).parents("li.mchkbox").hide();
        $(this).parents("li.mchkbox").prev().show();
        c = null
    });
    $(".cate_search li").each(function () {
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
    $(".cate_search li").each(function () {
        var b = $(this), a = b.find("dd a.current");
        if (0 !== a.length) {
            var b = b.find(".seeline"), c = a.outerHeight();
            positionTop = a.position().top;
            positionTop > c && b.trigger("click")
        }
    });
    $(".journeyswrap .journeys_v2box").hover(function () {
        $(this).addClass("jv2boxborder")
    }, function () {
        $(this).removeClass("jv2boxborder")
    });
    $.pageLinkJump = function (b, a) {
        INTERFACE.pageLinkJump(b)
    };
    $(".journeyswrap img").lazyload();
    $("#myCarousel img").lazyload();
    (function (b) {
        b.find("img").each(function (a) {
            a =
                $(this).attr("data-original");
            void 0 != a && $(this).attr("src", a)
        })
    })($("#myCarousel"))
});
