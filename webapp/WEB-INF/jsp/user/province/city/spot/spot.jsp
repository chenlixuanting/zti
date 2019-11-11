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
    <title>${cityVo.cityName}旅游景点推荐,${cityVo.cityName}旅游必去景点,${cityVo.cityName}景点大全/排名</title>
    <link charset="utf-8" type="text/css" rel="stylesheet"
          href="css/user/common.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet"
          href="css/user/fed.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet"
          href="css/user/city_sight.v2.0.css">
    <link href="css/user/login_popup_new.css" rel="stylesheet"
          type="text/css">
    <link href="css/user/bdsstyle.css" rel="stylesheet"
          type="text/css">
    <link type="text/css" rel="stylesheet"
          href="css/user/pc_flaot.css">
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
                欢迎您访问${cityVo.cityName}</p>
        </div>
    </div>
</div>

<div class="ttd_topnav_box">
    <div class="ttd_topnav"
         style="position: relative; overflow: visible; top: 0px; left: 0px; right: 0px; width: 100%; height: 39px;">
        <div class="innerbox">
            <ul class="cf">
                <li class="ttd_first_nav"><a
                        href="http://localhost:8080/secd/province/city/index/${cityVo.cityId}">主页</a>
                </li>
                <li class="current"><a href="http://localhost:8080/secd/province/city/spot">景点</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/city/shopping">购物</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/city/travel">游记</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="ttd2_background">
    <div class="content cf">
        <div class="des_narrow f_left">
            <div class="country_xclist">
                <h3>旅行口碑榜2017</h3>
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

            <div class="normalbox">
                <div class="normaltitle cf" id="sightname">
                    <h1>${cityVo.cityName}<span>景点</span></h1>
                </div>

                <div class="list_wide_mod2">
                    <c:forEach var="spotVo" items="${spotVos}">
                        <div class="list_mod2">
                            <div class="leftimg">
                                <a target="_blank"
                                   href="http://localhost:8080/secd/province/city/spot-detail/${spotVo.spotId}">
                                    <img src="${spotVo.headPicUrl}"
                                         width="220" height="140" img-id="23519528">
                                </a>
                            </div>
                            <div class="rdetailbox">
                                <dl>
                                    <dt>
                                        <i class="sight"></i>
                                        <a target="_blank"
                                           href="http://localhost:8080/secd/province/city/spot-detail/${spotVo.spotId}"
                                           title="${spotVo.spotName}">${spotVo.spotName}</a>
                                        <s>第${spotVo.spotRank}名</s>
                                    </dt>
                                    <dd class="ellipsis">
                                            ${spotVo.address}
                                    </dd>
                                </dl>
                                <ul class="r_comment">
                                    <li><a class="score"
                                           href="province/city/index/${cityVo.cityId}"><strong>${spotVo.score}</strong>&nbsp;分</a>
                                    </li>
                                    <li><span class="starlist"><span style="width: ${spotVo.scoreCss}%;">
                                                       <!--星星算法，内层span写入宽度，20%为一颗星,默认一颗星-->
                                                   </span></span></li>
                                    <li><a rel="nofollow" target="_blank"
                                           href="province/city/index/${cityVo.cityId}"
                                           class="recomment">
                                        (${spotVo.totalComment}条点评)</a></li>
                                </ul>
                            </div>
                            <p class="bottomcomment ellipsis open_popupbox_a">
                            <span class="sightc">
                                <a rel="nofollow" target="_blank"
                                   href="javascript:void(0)">广西壮瑶文化信息采集和分类系统</a>点评：</span>${spotVo.textdetail}
                            </p>
                        </div>
                    </c:forEach>

                    <%--<div class="ttd_pager cf"><p>1-15 / 937条</p>--%>
                    <%--<div class="pager_v1"><a class="prevpage disabled">上一页</a><a class="current">1</a><a--%>
                    <%--href="http://you.ctrip.com/sight/guilin28/s0-p2.html">2</a><a--%>
                    <%--href="http://you.ctrip.com/sight/guilin28/s0-p3.html">3</a><a--%>
                    <%--href="http://you.ctrip.com/sight/guilin28/s0-p4.html">4</a><a--%>
                    <%--href="http://you.ctrip.com/sight/guilin28/s0-p5.html">5</a><a class="nextpage"--%>
                    <%--href="http://you.ctrip.com/sight/guilin28/s0-p2.html">下一页</a><span>到 <input--%>
                    <%--id="gopagetext" value="" type="text"> 页 / <b class="numpage">63</b>页</span><a--%>
                    <%--class="gopage" href="javascript:;">确定</a></div>--%>
                    <%--</div>--%>

                    <div class="ttd_pager cf"><p>${pageVo.start}-${pageVo.end} / ${pageVo.total}条</p>
                        <div class="pager_v1">
                            <c:if test="${pageVo.currentPage == 1}">
                                <a class="prevpage disabled">上一页</a>
                            </c:if>
                            <c:if test="${pageVo.currentPage != 1}">
                                <c:if test="${pageVo.currentPage != 0}">
                                    <a class="prevpage" href="${pageVo.previousPageUrl}">上一页</a>
                                </c:if>
                            </c:if>

                            <c:if test="${pageVo.currentPage == pageVo.finalPage}">
                                <a class="nextpage disabled">下一页</a>
                            </c:if>
                            <c:if test="${pageVo.currentPage != pageVo.finalPage}">
                                <a class="nextpage"
                                   href="${pageVo.nextPageUrl}">下一页</a>
                            </c:if>

                            <span>到 <input id="gopagetext" value="" type="text"> 页 / <b
                                    class="numpage">${pageVo.finalPage}</b>页</span>
                            <a class="gopage" href="javascript:;" id="gotoPgae">确定</a>
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
    $(function () {
        $("#gotoPgae").click(function () {
            window.location.href = "http://localhost:8080/secd/province/city/spot/${cityVo.cityId}/" + $("#gopagetext").val();
        });
    });
</script>
</html>