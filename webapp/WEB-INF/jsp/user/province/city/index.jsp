<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/";
%>
<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=1024">
    <meta http-equiv="Cache-Control" content="no-siteapp ">
    <title>${cityVo.cityName}</title>
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/common.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/fed.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/city.v2.0.css">
    <link href="css/user/login_popup_new.css" rel="stylesheet" type="text/css">
    <link href="css/user/bdsstyle.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="css/user/pc_flaot.css">
</head>
<body>

<div>
    <div class="gs-header cf">
        <div class="content">
            <div class="gs-nav">
                <ul>
                    <li id="gs_nav_0"><a href="http://localhost:8080/secd/province/index"><i class="icon_home"></i></a>
                    </li>
                    <li id="my_home"><a href="http://localhost:8080/secd/user/home">我的主页</a></li>
                </ul>
            </div>
            <div class="gs-search-2"><input id="gsSearch" type="text" placeholder="搜索城市/景点/游记/问答/住宿/用户" class="sgtgray">
                <button type="button" class="btn-search"></button>
            </div>
        </div>
    </div>
</div>

<div class="content cf ">
    <div class="dest_toptitle">
        <div class="cf">
            <div class="f_left">
                <h1>
                    <a title="${cityVo.cityName}" href="http://you.ctrip.com/place/guilin28.html">${cityVo.cityName}</a>
                </h1>
            </div>
            <div class="f_right">
                <ul>
                    <li class="des_icon_been" id="wentClick">
                        <a href="javascript:void(0)" data-cat="28" dataresource-cat="28" data_type="Place"
                           class="a_popup_login" rel="nofollow" id="wentClickID"></a>
                        <p>
                            <span id="spanwentId" class="textcolor">去过</span><span><em
                                id="emWentValueID">266639</em></span>
                        </p>
                    </li>
                    <li class="des_icon_want" id="wantClick">
                        <a href="javascript:void(0)" rel="nofollow" data-cat="28" dataresource-cat="28"
                           data_type="Place" class="a_popup_login" id="wantClickID"></a>
                        <p>
                            <span id="spanwantId" class="textcolor">想去</span><span><em
                                id="emWantValueID">84654</em></span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sec_line cf">
            <p class="c_text_left ellipsis">
                欢迎您访问${cityVo.cityName} </p>
        </div>
    </div>
</div>

<div class="ttd_topnav_box">
    <div class="ttd_topnav"
         style="position: relative; overflow: visible; top: 0px; left: 0px; right: 0px; width: 100%; height: 39px;">
        <div class="innerbox">
            <ul class="cf">
                <li class="ttd_first_nav current"><a
                        href="http://localhost:8080/secd/province/city/index/${cityVo.cityId}">主页</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/city/spot/${cityVo.cityId}/1">景点</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/city/shopping/${cityVo.cityId}">购物</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/city/travel/${cityVo.cityId}">游记</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<!--二级导航-->
<div class="ttd2_background">
    <div class="content cf dest_city">

        <div class="des_narrow f_left">
            <div class="country_xclist">
                <h3>携程旅行口碑榜2017</h3>
                <dl>
                    <dt><a target="_blank" href="http://localhost:8080/secd/destinationsite/top"
                           title="2017十佳自驾游目的地">2017十佳自驾游目的地</a></dt>
                    <dd><i></i><a target="_blank" href="javascript:void(0)" title="贺州">贺州</a>
                    </dd>
                </dl>
                <dl>
                    <dt><a target="_blank" href="http://localhost:8080/secd/destinationsite/top"
                           title="2017年度十大摄影目的地">2017年度十大摄影目的地</a></dt>
                    <dd><i></i><a target="_blank" href="javascript:void(0)" title="桂林">桂林</a></dd>
                </dl>
                <dl>
                    <dt><a target="_blank" href="http://localhost:8080/secd/destinationsite/top"
                           title="2017亚洲十大旅行目的地">2017亚洲十大旅行目的地</a></dt>
                    <dd><i></i><a target="_blank" href="javascript:void(0)" title="桂林">桂林</a></dd>
                </dl>
            </div>
        </div>

        <div class="des_wide f_right">
            <!--首页热门照片-->
            <div class="slide_show">
                <div data-inner="" class="imgbackgbox">
                    <c:forEach var="city" items="${cityVo.photos}" varStatus="status">
                        <c:if test="${status.index == 0}">
                            <img data-item="${status.index}" src="${city}" width="880"
                                 height="350" alt="" class="none current" style="display: inline;">
                        </c:if>
                        <c:if test="${status.index != 0}">
                            <img data-item="${status.index}" src="${city}" width="880"
                                 height="350" alt="" class="none" style="display: none;">
                        </c:if>
                    </c:forEach>
                </div>
                <div class="tabcover">
                </div>
                <ul class="tabpicbox" data-indicators="">
                    <c:forEach var="city" items="${cityVo.photos}" varStatus="status">
                        <c:if test="${status.index == 0}">
                            <li data-slip-to="0" class="none current">
                                <img src="${city}" width="80" height="50"
                                     alt=""><i></i>
                            </li>
                        </c:if>
                        <c:if test="${status.index != 0}">
                            <li data-slip-to="0" class="none">
                                <img src="${city}" width="80" height="50"
                                     alt=""><i></i>
                            </li>
                        </c:if>
                    </c:forEach>
                </ul>
            </div>
            <!--度假End-->
            <!--poitab切换-->
            <ul id="otherSuggest" class="suggest_poitab cf">
                <li class="current" data-id="#poi_0"><a class="sight" href="javascript:;" data-id="#poi_0"><i
                        class="sight"></i>必游</a></li>
                <li class="" data-id="#poi_3"><a class="shopping" href="javascript:;" data-id="#poi_3"><i
                        class="shopping"></i>必逛</a></li>
            </ul>

            <div class="card_list">
                <div id="poi_0" style="display: block;">
                    <ul>
                        <c:forEach var="spotVo" items="${spotVos}">
                            <li class="">
                            <span class="ttd_nopic220">
                            <img width="270" height="170"
                                 src="${spotVo.headPicUrl}"
                                 data-original="${spotVo.headPicUrl}"
                                 style="display: block;">
                        </span>
                                <dl>
                                    <dt>
                                        <s>第${spotVo.spotRank}名</s>
                                        <i class="sight"></i>
                                        <span class="ellipsis">${spotVo.spotName}</span>
                                    </dt>
                                    <dd>
                                <span class="starlist"><span style="width: ${spotVo.scoreCss}%;">
                                                       </span></span><span
                                            class="score"><strong>${spotVo.score}</strong>分 </span><span
                                            class="comment_text">(${spotVo.totalComment}条点评)</span>
                                    </dd>
                                    <%--<dd class="textdetail">${spotVo.textdetail}...</dd>--%>
                                </dl>
                                <a href="province/city/spot-detail/${spotVo.spotId}" class="all_link"
                                   target="_blank"></a>
                            </li>
                        </c:forEach>
                    </ul>
                    <p class="nolinemore">
                        <a href="province/city/spot/${cityVo.cityId}/1" target="_blank">更多景点<i
                                class="f14_more_arror"></i></a></p>
                </div>

                <div class="undis" id="poi_3" style="display: none;">
                    <ul>
                        <li class="">
                        <span class="ttd_nopic220">
                            <img width="270" height="170"
                                 src="images/user/15e05f74165d4066af963f0be6c4b39a_C_270_170.jpg"
                                 data-original="https://dimg06.c-ctrip.com/images/tg/640/105/106/15e05f74165d4066af963f0be6c4b39a_C_270_170.jpg">
                        </span>
                            <div class="abiconbox" data-id="108714">
                            </div>
                            <dl>
                                <dt>
                                    <s>第1名</s>
                                    <i class="shopping"></i>
                                    <span class="ellipsis">西城步行街</span>
                                </dt>
                                <dd>
                                <span class="starlist">
                                    <span style="width:80%;">
                                    </span>
                                </span><span class="score"><strong>4.1</strong>分 </span><span class="comment_text">(358条点评)</span>
                                </dd>
                                <dd class="textdetail">
                                    西城步行街有仿古的街面建筑、休闲的花岗岩石路，风格独...
                                </dd>
                            </dl>
                            <a href="http://you.ctrip.com/shopping/guilin28/108714.html" class="all_link"
                               target="_blank" title="西城步行街 分数：4.1 点评数：358"></a>
                        </li>
                    </ul>
                    <p class="nolinemore">
                        <a href="http://you.ctrip.com/shopping/guilin28.html" target="_blank">更多购物点<i
                                class="f14_more_arror"></i></a>
                    </p>
                </div>
            </div>

            <!--主题内容 游玩-->
            <div class="normalbox">
                <div class="normaltitle cf">
                    <h1>桂林游记</h1><span class="t_archives"><i></i><a
                        href="http://you.ctrip.com/travels/youyouctripstar10000/1756062.html" target="_blank">什么是优质游记？申请必入！</a></span>
                    <span class="rbox"><a class="b_orange_m" href="http://you.ctrip.com/add-travel/Guide.html"
                                          target="_blank">
                <span><i class="write_journal"></i>写游记</span> </a></span>
                </div>
                <ul class="journaltab cf">
                    <li class=""><a rel="nofollow" href="javascript:void(0)">热门</a>
                        <span class="poptip-arrow poptip-arrow-bottom"><em>◆</em></span>|
                    </li>
                    <li class="current"><a rel="nofollow" href="javascript:void(0)">最新</a>
                        <span class="poptip-arrow poptip-arrow-bottom"><em>◆</em></span>
                    </li>
                </ul>
                <div class="journalslist cf" style="display: none;">


                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/2060057.html">
                        <div class="iteminner">
                             <span class="item-photo item-nopic">
                                     <span class="pic-tagico-3"></span>
                                 <img style=" display:block;" width="210" height="140"
                                      src="images/user/e57a7e7912d84cc1a084089b995a39a6_C_240_140.jpg"
                                      writing="19419391" alt="">
                             </span>
                            <dl>
                                <dt class="ellipsis">12日深度游桂林——龙脊，资源，桂林，阳朔（信息量真的太大）</dt>
                                <dd class="item-user">9181艾尔娃发表于&nbsp;2014-09-27
                                    <span class="lastreply">
最新回复&nbsp;2018-07-23                                     </span>
                                </dd>
                                <dd class="item-short">每次旅行回来总是会迫不及待地写游记。于我而言，写游记主要是一种延续。一来延续旅行的快乐......</dd>
                                <dd class="item-prac">
                                     <span class="tips_a">
                                        12天
                                        2014-09-09 00:00:00
                                        ，￥4700
                                        ，一个人
                                     </span>
                                    <span class="tips_b">
</span>
                                </dd>

                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">34.5万</i></li>
                                <li><i title="喜欢" class="want">1065</i></li>
                                <li><i title="回复" class="numreply">197</i></li>
                            </ul>
                        </div>
                    </a>
                    <div class="ttd_pager" data-type="3">
                        <p>1-1052 / 10512篇游记</p>
                        <div class="pager_v1"><a class="prevpage disabled"><i></i>上一页</a><a class="current"
                                                                                            href="http://you.ctrip.com/travels/guilin28/s3-p1.html">1</a><a
                                href="http://you.ctrip.com/travels/guilin28/s3-p2.html">2</a><a
                                href="http://you.ctrip.com/travels/guilin28/s3-p3.html">3</a><a
                                href="http://you.ctrip.com/travels/guilin28/s3-p4.html">4</a><a
                                href="http://you.ctrip.com/travels/guilin28/s3-p5.html">5</a><a class="nextpage"
                                                                                                href="http://you.ctrip.com/travels/guilin28/s3-p2.html">下一页<i></i></a><span>到 <input
                                lt="0" type="text" value=""> 页 / <em class="numpage">1052</em>页</span><a class="gopage"
                                                                                                         href="javascript:;">确定</a>
                        </div>
                    </div>
                </div>
                <div class="journalslist undis" style="display: block;">


                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guangxi100052/3756643.html">
                        <div class="iteminner">
                             <span class="item-photo item-nopic">
                                 <img style=" display:block;" width="210" height="140"
                                      src="images/user/10090z000000mlwju20A1_C_240_140.jpg" writing="299452730" alt="">
                             </span>
                            <dl>
                                <dt class="ellipsis">游记那些事儿~~~活出青春态度</dt>
                                <dd class="item-user">慢悠悠时光发表于&nbsp;2018-12-03
                                    <span class="lastreply">
最新回复&nbsp;2018-12-03                                     </span>
                                </dd>
                                <dd class="item-short">有人曾说过，旅行不是为了抵达目的地，而是为了享受旅途中的种种乐趣。在时间允许情况下，......</dd>
                                <dd class="item-prac">
                                     <span class="tips_a">
                                        5天
                                        2017-11-01 00:00:00
                                        ，￥2500
                                        ，和朋友
                                     </span>
                                    <span class="tips_b">
</span>
                                </dd>

                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">4087</i></li>
                                <li><i title="喜欢" class="want">23</i></li>
                                <li><i title="回复" class="numreply">10</i></li>
                            </ul>
                        </div>
                    </a>
                    <div class="ttd_pager" data-type="2">
                        <p>1-1052 / 10512篇游记</p>
                        <div class="pager_v1"><a class="prevpage disabled"><i></i>上一页</a><a class="current"
                                                                                            href="http://you.ctrip.com/travels/guilin28/s2-p1.html">1</a><a
                                href="http://you.ctrip.com/travels/guilin28/s2-p2.html">2</a><a
                                href="http://you.ctrip.com/travels/guilin28/s2-p3.html">3</a><a
                                href="http://you.ctrip.com/travels/guilin28/s2-p4.html">4</a><a
                                href="http://you.ctrip.com/travels/guilin28/s2-p5.html">5</a><a class="nextpage"
                                                                                                href="http://you.ctrip.com/travels/guilin28/s2-p2.html">下一页<i></i></a><span>到 <input
                                lt="0" type="text" value=""> 页 / <em class="numpage">1052</em>页</span><a class="gopage"
                                                                                                         href="javascript:;">确定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="footgray">
    <div class="footinner cf">
        <dl>
            <dt>社区必读</dt>
            <dd><a href="" target="_blank">用户协议</a></dd>
            <dd><a href="" target="_blank">社区指南</a></dd>
            <dd><a href="" target="_blank">经验与等级</a></dd>
            <dd><a href="" target="_blank">新手导航</a></dd>
            <dd><a href="" target="_blank">网络信息侵权保障</a></dd>
        </dl>
        <dl>
            <dt>发现你的旅行</dt>
            <dd><a href="" target="_blank">了解目的地</a></dd>
            <dd><a href="" target="_blank">阅读精彩游记</a></dd>
            <dd><a href="" target="_blank">下载精品攻略</a></dd>
            <dd><a href="" target="_blank">请教旅行达人</a></dd>
            <dd><a href="" target="_blank">发起结伴</a></dd>
        </dl>
        <dl>
            <dt>分享你的旅行</dt>
            <dd><a href="" target="_blank">发表游记大作</a></dd>
            <dd><a href="" target="_blank">点评去过的景点</a></dd>
        </dl>
        <dl class="ftabout">
            <dt>关于我们</dt>
            <dd><a href="" target="_blank">社区简介</a></dd>
            <dd><a href="" target="_blank">联系我们</a></dd>
            <dd><a href="" target="_blank">加入我们</a></dd>
            <dd><a href="" target="_blank">智慧旅游</a></dd>
        </dl>
        <dl class="ftguanzhu">
            <dt>关注攻略社区</dt>
            <dd class="youguanzhu cf"><span class="ftweixin"></span></dd>
        </dl>
    </div>
</div>
</body>

<script src="js/user/jquery-3.3.1.js"></script>
<script>
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

    $(function () {

        /*
            轮播特效
        */
        $(".slide_show").carouselSlide();

        /*
            必吃，必游，必逛图片特效
        */
        $(".card_list").on("mouseenter", ".all_link", function () {
            $(this).parent().addClass("current")
        }).on("mouseleave", ".all_link", function () {
            $(this).parent().removeClass("current")
        });

        /*
            酒店榜单推荐特效
        */
        $(".piclist").hover(function () {
            $(this).addClass("sinhoverbg")
        }, function () {
            $(this).removeClass("sinhoverbg")
        });

        $(".suggest_poitab li").mouseenter(function () {
            $(this).siblings(".current").removeClass("current");
            $(this).addClass("current");
            $(".card_list").children().hide();
            var f = $(this).attr("data-id");
            $(f).show();
            setTimeout(e, 300)
        });

    });

    /*
    * 游记列表特效
    * */
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
</script>

</html>