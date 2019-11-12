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
    <title>广西特产,买什么,广西购物攻略/指南</title>
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/common.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/fed.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/country_shopping.v2.0.css">
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
                    <li id="my_home"><a href="http://localhost:8080/secd/user/userhome">我的主页</a></li>
                </ul>
            </div>
            <div class="gs-search-2"><input id="gsSearch" type="text" placeholder="搜索城市/景点/游记/问答/住宿/用户" class="sgtgray">
                <button type="button" class="btn-search"></button>
                <div class="gs-notice" id="gsNotice"></div>
                <a class="gs_write_link" id="gsWriteLink" href="http://you.ctrip.com/add-travel/Guide.html"><i></i></a>
            </div>
        </div>
    </div>
</div>

<div class="content cf ">
    <div class="dest_toptitle">
        <div class="cf">
            <div class="f_left">
                <h1>
                    <a title="广西" href="http://you.ctrip.com/place/guangxi100052.html">广西</a>
                </h1>
                <p>Guangxi</p>
            </div>
            <div class="f_right">
                <ul>
                    <li class="des_icon_been" id="wentClick">
                        <a href="javascript:void(0)" data-cat="100052" dataresource-cat="100052" data_type="Place"
                           class="a_popup_login" rel="nofollow" id="wentClickID"></a>
                        <p>
                            <span id="spanwentId" class="textcolor">去过</span><span><em
                                id="emWentValueID">5645</em></span>
                        </p>
                    </li>
                    <li class="des_icon_want" id="wantClick">
                        <a href="javascript:void(0)" rel="nofollow" data-cat="100052" dataresource-cat="100052"
                           data_type="Place" class="a_popup_login" id="wantClickID"></a>
                        <p>
                            <span id="spanwantId" class="textcolor">想去</span><span><em
                                id="emWantValueID">10300</em></span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sec_line cf">
            <p class="c_text_left ellipsis">
                欢迎您访问广西 </p>
            <a class="c_map_link" href="http://you.ctrip.com/map/guangxi100052.html" target="_blank"><i></i>地图</a>
        </div>
    </div>
</div>

<div class="ttd_topnav_box">
    <div class="ttd_topnav"
         style="top: 0px; left: 0px; width: 100%; height: 39px; overflow: visible; position: relative; right: 0px;">
        <div class="innerbox">
            <ul class="cf">
                <li class="ttd_first_nav"><a href="http://localhost:8080/secd/province/index">主页</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/spot">景点</a>
                </li>
                <li class="current"><a href="http://localhost:8080/secd/province/shopping">购物</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/travel">游记</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="ttd2_background">
    <div class="content cf">
        <div class="des_narrow f_left">
            <!--START新增榜单块-->
            <div class="country_xclist">
                <h3>携程旅行口碑榜2017</h3>
                <dl>
                    <dt><a target="_blank" href="http://top.ctrip.com/2017/place/zijiayou.html" title="2017十佳自驾游目的地">2017十佳自驾游目的地</a>
                    </dt>
                    <dd><i></i><a target="_blank" href="http://you.ctrip.com/place/hezhou707.html" title="贺州">贺州</a>
                    </dd>
                </dl>
                <dl>
                    <dt><a target="_blank" href="http://top.ctrip.com/2017/place/niandusheying.html"
                           title="2017年度十大摄影目的地">2017年度十大摄影目的地</a></dt>
                    <dd><i></i><a target="_blank" href="http://you.ctrip.com/place/guilin28.html" title="桂林">桂林</a></dd>
                </dl>
                <dl>
                    <dt><a target="_blank" href="http://top.ctrip.com/2017/place/yazhoulvxing.html"
                           title="2017亚洲十大旅行目的地">2017亚洲十大旅行目的地</a></dt>
                    <dd><i></i><a target="_blank" href="http://you.ctrip.com/place/guilin28.html" title="桂林">桂林</a></dd>
                </dl>
            </div>
        </div>
        <div class="des_wide f_right">
            <!--购物速览，带收缩展开换div-->
            <!--各地购物-->
            <div class="normalbox">
                <div class="normaltitle cf">
                    <h1>广西<span>各地购物点</span></h1>
                </div>
                <div class="list_wide_mod1">
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/guilin28.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/CghzfVWwtayAcRE2ABaIuxjYffE235_C_100_100.jpg" width="100"
                                    height="100" writing="23519528" data-id="28" alt=""></a> <i></i><span>桂林</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/guilin28.html" target="_blank">桂林</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/guilin28/108714.html" target="_blank"
                                   title="西城步行街">西城步行街</a>、
                                <a href="http://you.ctrip.com/shopping/guilin28/108723.html" target="_blank"
                                   title="中心广场">中心广场</a>、
                                <a href="http://you.ctrip.com/shopping/guilin28/108721.html" target="_blank"
                                   title="正阳步行街">正阳步行街</a>、
                                <a href="http://you.ctrip.com/shopping/guilin28/108710.html" target="_blank"
                                   title="微笑堂商厦">微笑堂商厦</a>、
                                <a href="http://you.ctrip.com/shopping/guilin28/108688.html" target="_blank"
                                   title="联达商业购物广场">联达商业购物广场</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/guilin28.html" target="_blank">桂林购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/beihai140.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/100p0e00000076fm26A57_C_100_100.jpg" width="100" height="100"
                                    writing="112772388" data-id="140" alt=""></a> <i></i><span>北海</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/beihai140.html" target="_blank">北海</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/beihai140/1356633.html" target="_blank"
                                   title="北海市水产市场">北海市水产市场</a>、
                                <a href="http://you.ctrip.com/shopping/beihai140/1356646.html" target="_blank"
                                   title="大润发">大润发</a>、
                                <a href="http://you.ctrip.com/shopping/beihai140/1356638.html" target="_blank"
                                   title="南珠宫(北部湾中路店)">南珠宫(北部湾中路店)</a>、
                                <a href="http://you.ctrip.com/shopping/beihai140/1356641.html" target="_blank"
                                   title="好好佳东都购物中心">好好佳东都购物中心</a>、
                                <a href="http://you.ctrip.com/shopping/beihai140/1356650.html" target="_blank"
                                   title="本地人越南特产">本地人越南特产</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/beihai140.html" target="_blank">北海购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/nanning166.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/10020t000000iwjol8F2F_C_100_100.jpg" width="100" height="100"
                                    writing="274132496" data-id="166" alt=""></a> <i></i><span>南宁</span>
                        </div>
                        <dl>
                            <dt>·
                                <a href="http://you.ctrip.com/place/nanning166.html" target="_blank">南宁</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/nanning166/1356439.html" target="_blank"
                                   title="万象城">万象城</a>、
                                <a href="http://you.ctrip.com/shopping/nanning166/1356447.html" target="_blank"
                                   title="朝阳路">朝阳路</a>、
                                <a href="http://you.ctrip.com/shopping/nanning166/1356441.html" target="_blank"
                                   title="南宁百货大楼">南宁百货大楼</a>、
                                <a href="http://you.ctrip.com/shopping/nanning166/1356452.html" target="_blank"
                                   title="西关路夜市">西关路夜市</a>、
                                <a href="http://you.ctrip.com/shopping/nanning166/1356459.html" target="_blank"
                                   title="园林花卉市场">园林花卉市场</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/nanning166.html" target="_blank">南宁购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/yangshuo702.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/100m0i0000009ldzo6986_C_100_100.jpg" width="100" height="100"
                                    writing="123041776" data-id="702" alt=""></a> <i></i><span>阳朔</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/yangshuo702.html" target="_blank">阳朔</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/yangshuo702/22079.html" target="_blank"
                                   title="西街">西街</a>、
                                <a href="http://you.ctrip.com/shopping/yangshuo702/137463.html" target="_blank"
                                   title="万客隆购物广场">万客隆购物广场</a>、
                                <a href="http://you.ctrip.com/shopping/yangshuo702/1356382.html" target="_blank"
                                   title="闷葫芦创意工作室">闷葫芦创意工作室</a>、
                                <a href="http://you.ctrip.com/shopping/yangshuo702/108648.html" target="_blank"
                                   title="99自选商场">99自选商场</a>、
                                <a href="http://you.ctrip.com/shopping/yangshuo702/1356385.html" target="_blank"
                                   title="洛七时光书店">洛七时光书店</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/yangshuo702.html" target="_blank">阳朔购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/liuzhou143.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/1008070000002qm8h5F33_C_100_100.jpg" width="100" height="100"
                                    writing="80625387" data-id="143" alt=""></a> <i></i><span>柳州</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/liuzhou143.html" target="_blank">柳州</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/liuzhou143/1449696.html" target="_blank"
                                   title="五星商业步行街">五星商业步行街</a>、
                                <a href="http://you.ctrip.com/shopping/liuzhou143/1449680.html" target="_blank"
                                   title="柳州万达广场">柳州万达广场</a>、
                                <a href="http://you.ctrip.com/shopping/liuzhou143/1449675.html" target="_blank"
                                   title="步步高广场">步步高广场</a>、
                                <a href="http://you.ctrip.com/shopping/liuzhou143/2097725.html" target="_blank"
                                   title="阳光100城市广场">阳光100城市广场</a>、
                                <a href="http://you.ctrip.com/shopping/liuzhou143/1721048.html" target="_blank"
                                   title="世纪联华超市(解放店)">世纪联华超市(解放店)</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/liuzhou143.html" target="_blank">柳州购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/longsheng1445120.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/CggYHlZC0AiAedNMACKFFDgxDsk808_C_100_100.jpg" width="100"
                                    height="100" writing="56822996" data-id="1445120" alt=""></a> <i></i><span>龙胜</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/longsheng1445120.html" target="_blank">龙胜</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/longsheng1445120/1714025.html" target="_blank"
                                   title="七天优品进口超市(第1116分店)">七天优品进口超市(第1116分店)</a>、
                                <a href="http://you.ctrip.com/shopping/longsheng1445120/1720400.html" target="_blank"
                                   title="东方酸店">东方酸店</a>、
                                <a href="http://you.ctrip.com/shopping/longsheng1445120/1847537.html" target="_blank"
                                   title="小代副食批发部">小代副食批发部</a>、
                                <a href="http://you.ctrip.com/shopping/longsheng1445120/1844842.html" target="_blank"
                                   title="小卖部(春雨楼旁)">小卖部(春雨楼旁)</a>、
                                <a href="http://you.ctrip.com/shopping/longsheng1445120/1867578.html" target="_blank"
                                   title="心连心服装超市">心连心服装超市</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/longsheng1445120.html" target="_blank">龙胜购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/hezhou707.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/1007090000003q38g67E9_C_100_100.jpg" width="100" height="100"
                                    writing="83477128" data-id="707" alt=""></a> <i></i><span>贺州</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/hezhou707.html" target="_blank">贺州</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/hezhou707/1454692.html" target="_blank"
                                   title="南宁百货大楼">南宁百货大楼</a>、
                                <a href="http://you.ctrip.com/shopping/hezhou707/2095649.html" target="_blank"
                                   title="众利百货商场">众利百货商场</a>、
                                <a href="http://you.ctrip.com/shopping/hezhou707/1832947.html" target="_blank"
                                   title="姑婆山九铺香酒厂">姑婆山九铺香酒厂</a>、
                                <a href="http://you.ctrip.com/shopping/hezhou707/2095490.html" target="_blank"
                                   title="泰兴购物广场">泰兴购物广场</a>、
                                <a href="http://you.ctrip.com/shopping/hezhou707/1932850.html" target="_blank"
                                   title="泰兴超市(灵峰广场店)">泰兴超市(灵峰广场店)</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/hezhou707.html" target="_blank">贺州购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/baise524.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/CggYHFX7tJ-APZ4SAAvDwVf8iWs425_C_100_100.jpg" width="100"
                                    height="100" writing="53826508" data-id="524" alt=""></a> <i></i><span>百色</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/baise524.html" target="_blank">百色</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/baise524/1765733.html" target="_blank"
                                   title="凌云商贸城">凌云商贸城</a>、
                                <a href="http://you.ctrip.com/shopping/baise524/2094658.html" target="_blank"
                                   title="华润万家">华润万家</a>、
                                <a href="http://you.ctrip.com/shopping/baise524/2094892.html" target="_blank"
                                   title="金世纪">金世纪</a>、
                                <a href="http://you.ctrip.com/shopping/baise524/2098543.html" target="_blank"
                                   title="流行前线商场">流行前线商场</a>、
                                <a href="http://you.ctrip.com/shopping/baise524/2101286.html" target="_blank"
                                   title="环城购物中心">环城购物中心</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/baise524.html" target="_blank">百色购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/chongzuo837.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/CghzfFWw1F2AZfvNABkoTBTBroI265_C_100_100.jpg" width="100"
                                    height="100" writing="27299143" data-id="837" alt=""></a> <i></i><span>崇左</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/chongzuo837.html" target="_blank">崇左</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/chongzuo837/2094524.html" target="_blank"
                                   title="北京华联(崇左店)">北京华联(崇左店)</a>、
                                <a href="http://you.ctrip.com/shopping/chongzuo837/2027692.html" target="_blank"
                                   title="赢家集团(—东阿亿信广西分公司)">赢家集团(—东阿亿信广西分公司)</a>、
                                <a href="http://you.ctrip.com/shopping/chongzuo837/1723815.html" target="_blank"
                                   title="东阿亿信营业厅">东阿亿信营业厅</a>、
                                <a href="http://you.ctrip.com/shopping/chongzuo837/1776712.html" target="_blank"
                                   title="华强冷冻食品经营部">华强冷冻食品经营部</a>、
                                <a href="http://you.ctrip.com/shopping/chongzuo837/1782165.html" target="_blank"
                                   title="双虎家私城">双虎家私城</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/chongzuo837.html" target="_blank">崇左购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="list_mod1">
                        <div class="cityimg">
                            <a href="http://you.ctrip.com/place/wuzhou142.html" name="shopdistrict_img"
                               class="ttd_nopic100" target="_blank"><img
                                    src="images/user/100u0g0000007t2gwB5FC_C_100_100.jpg" width="100" height="100"
                                    writing="116532878" data-id="142" alt=""></a> <i></i><span>梧州</span>
                        </div>
                        <dl>
                            <dt>
                                <a href="http://you.ctrip.com/place/wuzhou142.html" target="_blank">梧州</a>
                            </dt>
                            <dd class="ellipsis">
                                推荐购物点：
                                <a href="http://you.ctrip.com/shopping/wuzhou142/1450808.html" target="_blank"
                                   title="周大福（梧州大学路旺城广场珠宝店）">周大福（梧州大学路旺城广场珠宝店）</a>、
                                <a href="http://you.ctrip.com/shopping/wuzhou142/1735803.html" target="_blank"
                                   title="乐乐果园(市民广场店)">乐乐果园(市民广场店)</a>、
                                <a href="http://you.ctrip.com/shopping/wuzhou142/1762517.html" target="_blank"
                                   title="兴贤水果店">兴贤水果店</a>、
                                <a href="http://you.ctrip.com/shopping/wuzhou142/1863604.html" target="_blank"
                                   title="建伟水管消防器材经营部">建伟水管消防器材经营部</a>、
                                <a href="http://you.ctrip.com/shopping/wuzhou142/1783087.html" target="_blank"
                                   title="南城百货">南城百货</a>
                            </dd>
                            <dd>
                                <a href="http://you.ctrip.com/shopping/wuzhou142.html" target="_blank">梧州购物速览<i
                                        class="gs2_more_arror"></i></a>
                            </dd>
                        </dl>
                    </div>
                    <div class="ttd_pager"><span class="f_right"><a
                            href="http://localhost:8080/secd/province/more-shopping" class="f_14">更多广西购物地<i
                            class="f14_more_arror"></i></a></span></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="gsn-layer food_popbox" id="foodPopbox" style="display: none;">
    <a rel="nofollow" href="javascript:$.popupbox.close();" class="close"></a>
    <div class="carousel" id="foodCarousel">
        <ol class="carousel-indicators" style="margin-left: 0px; display: block;">
        </ol>
        <div class="carousel-inner">
        </div>
        <a data-slide="prev" href="http://you.ctrip.com/shopping/guangxi100052.html#foodCarousel"
           class="carousel-control left">‹</a>
        <a data-slide="next" href="http://you.ctrip.com/shopping/guangxi100052.html#foodCarousel"
           class="carousel-control right">›</a>
    </div>
    <h3 class="boxtitle">
        <span class="f_left"></span><span class="f_right"><a rel="nofollow" href="javascript:;" class="icon_slike"
                                                             data-id="0"><i></i><span></span></a></span>
    </h3>
    <ul class="toplinedl">
        <li></li>
        <li class="topline"><strong>哪里买：</strong></li>
        <li class="ellipsis"></li>
    </ul>
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
</html>