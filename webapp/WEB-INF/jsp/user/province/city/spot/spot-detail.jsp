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
    <title>${cityVo.cityName}${spotVo.spotName}攻略,${cityVo.cityName}${spotVo.spotName}门票/游玩攻略/地址/图片/门票价格</title>
    <meta name="keywords" content="桂林漓江,桂林漓江门票,漓江攻略,漓江地址,漓江图片,漓江门票价格">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/common.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/fed.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/sight_detail.v2.0.css">
    <link href="css/user/login_popup_new.css" rel="stylesheet" type="text/css">
    <link href="css/user/bdsstyle.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="css/user/pc_flaot.css">
</head>
<body style="position: relative;">

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
    <!--详情页样式-->
    <div class="dest_toptitle detail_tt">
        <div class="cf">
            <div class="f_left">
                <h1><a href="http://you.ctrip.com/sight/guilin28/2888.html">${spotVo.spotName}</a></h1>
                <p>
                    &nbsp;
                </p>
            </div>
            <div class="f_right">
                <ul>
                    <li class="des_icon_been" id="wentClick">
                        <a href="javascript:void(0)" data-cat="2888" dataresource-cat="2888" data_type="Sight"
                           class="a_popup_login" rel="nofollow" id="wentClickID"></a>
                        <p><span id="spanwentId" class="textcolor">去过</span><span><em
                                id="emWentValueID">15199</em></span></p>
                    </li>
                    <li class="des_icon_want" id="wantClick">
                        <a href="javascript:void(0)" rel="nofollow" data-cat="2888" dataresource-cat="2888"
                           data_type="Sight" class="a_popup_login" id="wantClickID"></a>
                        <p><span id="spanwantId" class="textcolor">想去</span><span><em
                                id="emWantValueID">15501</em></span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="ttd2_background">
    <div class="content cf dest_details">
        <div class="des_wide f_left">
            <div class="detailtop cf normalbox">
                <!--轮播效果-统一为线上首页渐隐展现形式-->
                <div class="carousel " id="detailCarousel">
                    <div class="carousel-inner">
                        <div class="item" style="display: block;">
                            <img width="350" height="230"
                                 src="${spotVo.headPicUrl}">
                        </div>
                    </div>
                </div>
                <!-- todo 点评信息 -->
                <ul class="detailtop_r_info">
                    <li><span class="score"><b>${spotVo.score}</b>分</span></li>
                    <li>
                        <span class="comment_ring_16"><span style="width: ${spotVo.scoreCss}%"></span></span>
                        <span class="pl_num">
                        <dfn id="hrefyyDp"><span class="f_orange">${spotVo.totalComment}</span>条点评</dfn>
                    <span>|</span><span class="c_tipswrap">
                    <a href="province/city/spot-comment/${spotVo.spotId}"
                       class="b_orange_m"><span><i></i>写点评</span></a>
                    </span>
                </span>
                    </li>
                    <li class="infotext">你也游览过这个景点吗？<br>快来留下你精彩的点评吧～不仅可以帮助到万千游友，首条点评额外奖励50积分<p></p></li>
                </ul>
            </div>

            <div class="normalbox boxsight_v1">
                <div class="detailcon bright_spot">
                    <span class="subscript"></span>
                    <ul>
                        <li><i>•</i>${spotVo.brightPoint}</li>
                    </ul>
                </div>
                <!--概览-->
                <div class="detailcon detailbox_dashed">
                    <h2>
                        <a id="jieshao" target="_blank"></a>
                    </h2>
                    <div class="toggle_s" style="display: block;">
                        <div itemprop="description" class="text_style">
                            ${spotVo.introduce}
                        </div>
                    </div>
                </div>
                <!--START 新增实用贴士-->
                <div class="detailcon detailbox_dashed">
                    <h2><a id="tieshi" target="_blank"></a></h2>
                    <div class="toggle_s" style="display: block;">
                        <div itemprop="description" class="text_style">
                            ${spotVo.specialHint}
                        </div>
                    </div>
                </div>
                <!--END 新增实用贴士-->
            </div>
        </div>

        <div class="des_narrow f_right">
            <!--景点信息-->
            <div class="s_sight_infor">
                <div class="narrow_title cf">
                    <h3>景点信息</h3>
                    <div class="sight_weather">
                    </div>
                </div>
                <div class="s_sight_check_infor">
                    <div class="s_sight_map">
                        <a target="_blank"
                           href="https://www.amap.com/search?query=${spotVo.address}${spotVo.spotName}&zoom=10">
                            <img src="images/user/100r0j000000a3frmD2CB.png" height="140" width="260">
                        </a>
                    </div>
                    <div class="s_sight_check_mask"></div>
                    <div class="s_sight_check">
                        <a target="_blank" href="javascript:void(0)">大图</a><span
                            style="">|</span><a id="sightstreeturl" style="" target="_blank"
                                                href="javascript:void(0)">街景</a>
                    </div>
                </div>
                <p class="s_sight_addr">地址：${spotVo.address}</p>
            </div>
        </div>
    </div>
</div>

<div class="footgray" style="margin-top: 10px;">
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
    $("p.toggle_btn").click(function () {
        if ($(this).prev("div").css("display") == "block") {
            $(this).prev("div").css("display", "none");
            $(this).prev("div").prev("div").css("display", "block");
        } else {
            $(this).prev("div").css("display", "block");
            $(this).prev("div").prev("div").css("display", "none");
        }
    });
</script>
</html>