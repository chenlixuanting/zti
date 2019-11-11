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
    <title>桂林旅游游记,桂林游记攻略,桂林精品/热门/最新游记推荐【携程攻略】</title>
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/common.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/fed.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/city_journallist.v2.0.css">
    <link href="css/user/login_popup_new.css" rel="stylesheet" type="text/css">
    <link href="css/user/bdsstyle.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="css/user/pc_flaot.css">
</head>
<body>
<div class="gs-header cf">
    <div class="content">
        <div class="gs-nav">
            <ul>
                <li id="gs_nav_0"><a href="http://you.ctrip.com/"><i class="icon_home"></i></a></li>
                <li id="my_home"><a href="http://you.ctrip.com/members/">我的主页</a></li>
            </ul>
        </div>
        <div class="gs-search-2"><input id="gsSearch" type="text" placeholder="搜索城市/景点/游记/问答/住宿/用户" class="sgtgray">
            <button type="button" class="btn-search"></button>
            <div class="gs-notice" id="gsNotice"></div>
            <a class="gs_write_link" id="gsWriteLink" href="http://you.ctrip.com/add-travel/Guide.html"><i></i></a>
        </div>
    </div>
</div>
<div class="content cf ">
    <div class="dest_toptitle">
        <div class="cf">
            <div class="f_left">
                <h1>
                    <a title="桂林" href="http://you.ctrip.com/place/guilin28.html">桂林</a>
                </h1>
                <p>Guilin</p>

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
                欢迎您访问桂林 </p>
            <a class="c_map_link" href="http://you.ctrip.com/map/guilin28.html" target="_blank"><i></i>地图</a>
        </div>
    </div>
</div>
<div class="ttd_topnav_box">
    <div class="ttd_topnav"
         style="position: relative; overflow: visible; top: 0px; left: 0px; right: 0px; width: 100%; height: 39px;">
        <div class="innerbox">
            <ul class="cf">
                <li class="ttd_first_nav"><a href="http://localhost:8080/secd/province/city/index">主页</a>
                </li>
                <li ><a href="http://localhost:8080/secd/province/city/spot">景点</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/city/shopping">购物</a>
                </li>
                <li class="current"><a href="http://localhost:8080/secd/province/city/travel">游记</a>
                </li>
                <li><a href="http://localhost:8080/secd/province/city/route">行程</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="ttd2_background">
    <div class="content cf">
        <div class="des_narrow f_left">
            <!--排行榜-->
            <div class="city_xclist">
                <h3>携程旅行口碑榜2017</h3>
                <ul>
                    <li><a target="_blank" href="http://top.ctrip.com/2017/place/yazhoulvxing.html">2017亚洲十大旅行目的地</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="des_wide f_right">
            <div class="normalbox">
                <div class="normaltitle cf">
                    <h1 class="blue">桂林<span>游记</span></h1><span class="t_archives"><i></i><a
                        href="http://you.ctrip.com/travels/youyouctripstar10000/1756062.html" target="_blank">什么是优质游记？申请必入！</a></span>
                    <span class="rbox"><a class="b_orange_m" href="http://you.ctrip.com/add-travel/Guide.html"><span><i
                            class="write_journal"></i>写游记</span></a></span>
                </div>
                <ul class="journaltab cf">
                    <li class="current"><a href="javascript:void(0)">热门</a>
                        <span class="poptip-arrow poptip-arrow-bottom"><em>◆</em></span>|
                    </li>
                    <li><a href="http://you.ctrip.com/travels/guilin28/s2-p1.html">最新</a>
                        <span class="poptip-arrow poptip-arrow-bottom"><em>◆</em></span></li>
                </ul>
                <div class="journalslist cf">
                    <div class="practicaltab">
                        <ul>
                            <li>
                                <dl>
                                    <dt><span>行程天数：</span><a data-id="0" class="current"
                                                             href="http://you.ctrip.com/travels/guilin28.html">全部</a>
                                    </dt>
                                    <dd>
                                        <a class="" data-id="1" href="http://you.ctrip.com/travels/guilin28/t3-d1.html">1-2天</a><a
                                            class="" data-id="2"
                                            href="http://you.ctrip.com/travels/guilin28/t3-d2.html">3-5天</a><a class=""
                                                                                                               data-id="3"
                                                                                                               href="http://you.ctrip.com/travels/guilin28/t3-d3.html">6-8天</a><a
                                            class="" data-id="4"
                                            href="http://you.ctrip.com/travels/guilin28/t3-d4.html">9-14天</a><a class=""
                                                                                                                data-id="5"
                                                                                                                href="http://you.ctrip.com/travels/guilin28/t3-d5.html">15天以上</a>
                                    </dd>
                                </dl>
                                <span class="r_select"><a href="javascript:;" class="seeline">更多<span></span></a></span>
                            </li>
                            <li>
                                <dl>
                                    <dt><span>出发时间：</span><a data-id="0" class="current"
                                                             href="http://you.ctrip.com/travels/guilin28.html">全部</a>
                                    </dt>
                                    <dd>
                                        <a class="" data-id="1" href="http://you.ctrip.com/travels/guilin28/t3-m1.html">3-5月</a><a
                                            class="" data-id="2"
                                            href="http://you.ctrip.com/travels/guilin28/t3-m2.html">6-8月</a><a class=""
                                                                                                               data-id="3"
                                                                                                               href="http://you.ctrip.com/travels/guilin28/t3-m3.html">9-11月</a><a
                                            class="" data-id="4"
                                            href="http://you.ctrip.com/travels/guilin28/t3-m4.html">12-2月</a>
                                    </dd>
                                </dl>
                                <span class="r_select"><a href="javascript:;" class="seeline">更多<span></span></a></span>
                            </li>

                            <li>
                                <dl>
                                    <dt><span>和谁出行：</span><a data-id="0" class="current"
                                                             href="http://you.ctrip.com/travels/guilin28.html">全部</a>
                                    </dt>
                                    <dd>
                                        <a class="" data-id="1" href="http://you.ctrip.com/travels/guilin28/t3-c1.html">亲子</a><a
                                            class="" data-id="2"
                                            href="http://you.ctrip.com/travels/guilin28/t3-c2.html">和父母</a><a class=""
                                                                                                              data-id="3"
                                                                                                              href="http://you.ctrip.com/travels/guilin28/t3-c3.html">和朋友</a><a
                                            class="" data-id="4"
                                            href="http://you.ctrip.com/travels/guilin28/t3-c4.html">一个人</a><a class=""
                                                                                                              data-id="5"
                                                                                                              href="http://you.ctrip.com/travels/guilin28/t3-c5.html">夫妻</a><a
                                            class="" data-id="6"
                                            href="http://you.ctrip.com/travels/guilin28/t3-c6.html">情侣</a>
                                    </dd>
                                </dl>
                                <span class="r_select"><a href="javascript:;" class="seeline">更多<span></span></a></span>
                            </li>
                            <li>
                                <dl>
                                    <dt><span>游记玩法：</span><a data-id="0" class="current"
                                                             href="http://you.ctrip.com/travels/guilin28.html">全部</a>
                                    </dt>
                                    <dd><a class="" data-id="1" href="http://you.ctrip.com/travels/guilin28/t3-g1.html">美食</a><a
                                            class="" data-id="2"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g2.html">购物</a><a class=""
                                                                                                             data-id="3"
                                                                                                             href="http://you.ctrip.com/travels/guilin28/t3-g3.html">摄影</a><a
                                            class="" data-id="8"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g8.html">自驾</a><a class=""
                                                                                                             data-id="11"
                                                                                                             href="http://you.ctrip.com/travels/guilin28/t3-g11.html">人文</a><a
                                            class="" data-id="17"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g17.html">自由行</a><a class=""
                                                                                                               data-id="18"
                                                                                                               href="http://you.ctrip.com/travels/guilin28/t3-g18.html">半自由行</a><a
                                            class="" data-id="19"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g19.html">跟团</a><a class=""
                                                                                                              data-id="20"
                                                                                                              href="http://you.ctrip.com/travels/guilin28/t3-g20.html">邮轮</a><a
                                            class="" data-id="21"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g21.html">火车</a><a class=""
                                                                                                              data-id="22"
                                                                                                              href="http://you.ctrip.com/travels/guilin28/t3-g22.html">徒步</a><a
                                            class="" data-id="23"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g23.html">骑行</a><a class=""
                                                                                                              data-id="24"
                                                                                                              href="http://you.ctrip.com/travels/guilin28/t3-g24.html">小资</a><a
                                            class="" data-id="25"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g25.html">奢侈</a><a class=""
                                                                                                              data-id="26"
                                                                                                              href="http://you.ctrip.com/travels/guilin28/t3-g26.html">穷游</a><a
                                            class="" data-id="27"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g27.html">省钱</a><a class=""
                                                                                                              data-id="29"
                                                                                                              href="http://you.ctrip.com/travels/guilin28/t3-g29.html">周末游</a><a
                                            class="" data-id="30"
                                            href="http://you.ctrip.com/travels/guilin28/t3-g30.html">美食林</a></dd>
                                </dl>
                                <span class="r_select"><a href="javascript:;" class="seeline" style="display: inline;">更多<span></span></a></span>
                            </li>
                        </ul>
                    </div>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/3721143.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-1"></span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/100t0v000000jzfvtC2A3_C_210_140.jpg" writing="278697293"
                                     alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">五年之约，重游桂林，再赏山水</dt>
                                <dd class="item-user">晚安sky浪子发表于&nbsp;2018-08-24
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-08-27
                                    </span>
                                </dd>
                                <dd class="item-short">【预告片】金江河穿寨而过的黄洛瑶寨，这里是红瑶族的聚集地，红瑶妇女自古就有蓄长发的习......</dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        4天
                                        2018-04-01 00:00:00
                                        ，￥3000
                                        ，和朋友
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">2.1万</i></li>
                                <li><i title="喜欢" class="want">98</i></li>
                                <li><i title="回复" class="numreply">5</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/3691124.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-1"></span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/100g0t000000imnik8613_C_210_140.jpg" writing="273879680"
                                     alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">女汉纸与青春的碰撞——桂林阳朔3天2夜+详细攻略</dt>
                                <dd class="item-user">彭博丫丫发表于&nbsp;2018-06-21
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-07-31
                                    </span>
                                </dd>
                                <dd class="item-short"> &amp;n......</dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        3天
                                        2018-06-01 00:00:00
                                        ，￥1500
                                        ，和朋友
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">12.5万</i></li>
                                <li><i title="喜欢" class="want">618</i></li>
                                <li><i title="回复" class="numreply">112</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/1490703.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-4"></span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/7a64a65b10ff4c5fbdd5b05fac3710d2_C_210_140.jpg"
                                     writing="6014749" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">2013毕业再游桂林，细细品味桂林的山水，详细攻略+游记</dt>
                                <dd class="item-user">轩轩的宣言发表于&nbsp;2013-08-20
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-07-27
                                    </span>
                                </dd>
                                <dd class="item-short">桂林山水自古就有甲天下的美誉，我相信，桂林山水的美丽肯定不需要我在此累述。趁着大学的最......</dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        5天
                                        
                                        
                                        ，和朋友
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">47.6万</i></li>
                                <li><i title="喜欢" class="want">4896</i></li>
                                <li><i title="回复" class="numreply">543</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/1735059.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-1"></span>
                                    <span class="text-tagico-1"><i></i><span>微游记</span> </span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/50cba8b101ea4a72a3efff8aa402cc39_C_210_140.jpg"
                                     writing="11736848" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">带着女儿游桂林！亲子自由行の杨堤到兴坪漓江竹筏漂流</dt>
                                <dd class="item-user">郝美丽发表于&nbsp;2014-03-27
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-07-27
                                    </span>
                                </dd>
                                <dd class="item-short">趁着老公休假决定带着女儿实现桂林之旅。鉴于前几次跟团旅游的不爽，与老公一致决定这次无论......</dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        3天
                                        2014-03-07 00:00:00
                                        ，￥1000
                                        ，亲子
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">64.3万</i></li>
                                <li><i title="喜欢" class="want">1248</i></li>
                                <li><i title="回复" class="numreply">207</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/1660577.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-4"></span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/e320e3c904bf4069a7a9eb81c3f0b26c_C_210_140.jpg"
                                     writing="9315183" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">阳朔：美得如此出乎意料</dt>
                                <dd class="item-user">瞎鼓捣发表于&nbsp;2013-12-30
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-06-21
                                    </span>
                                </dd>
                                <dd class="item-short">尼克松曾经说过：“我到过世界上80多个国家的100多个城市，没有一个像桂林这么美丽的。”我......</dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        2天
                                        2013-04-03 00:00:00
                                        ，￥1000
                                        ，情侣
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">52.4万</i></li>
                                <li><i title="喜欢" class="want">1543</i></li>
                                <li><i title="回复" class="numreply">167</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/1733144.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-4"></span>
                                    <span class="text-tagico-1"><i></i><span>微游记</span> </span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/CggYHFbFwJSAKLlBAARL3RkxFAo530_C_210_140.jpg"
                                     writing="11455233" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">爸爸去哪儿？の龙脊梯田和漓江竹筏漂流</dt>
                                <dd class="item-user">小文baby发表于&nbsp;2014-08-14
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-07-06
                                    </span>
                                </dd>
                                <dd class="item-short">这几天的行程安排是这样子滴：
                                    D1：下午到桂林→安顿住宿、赏夜景：两江四湖、日月双塔。
                                    ......
                                </dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        4天
                                        2013-09-27 00:00:00
                                        
                                        
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">41.3万</i></li>
                                <li><i title="喜欢" class="want">1427</i></li>
                                <li><i title="回复" class="numreply">332</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/luguhu105/1599153.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-1"></span>
                                    <span class="text-tagico-1"><i></i><span>微游记</span> </span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/b7c7b52236c645caa228cec7c706f8b1_C_210_140.jpg"
                                     writing="7661256" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">云南广西一起走の闺蜜同行</dt>
                                <dd class="item-user">HoHo大大人发表于&nbsp;2013-11-13
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-07-28
                                    </span>
                                </dd>
                                <dd class="item-short">整个旅程一共15天:
                                    成都\西昌\泸沽湖\丽江\大理双廊\昆明\南宁\北海\涠洲岛\桂林

                                    DAY1:重庆......
                                </dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        15天
                                        2013-06-01 00:00:00
                                        
                                        ，和朋友
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">49.9万</i></li>
                                <li><i title="喜欢" class="want">2472</i></li>
                                <li><i title="回复" class="numreply">166</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/1354027.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-4"></span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/33344af6d18d4edf86afe1999934b65e_C_210_140.jpg"
                                     writing="2321079" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">桂林旅游攻略——桂林人眼中的桂林。</dt>
                                <dd class="item-user">用户3899390发表于&nbsp;2012-09-07
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-07-18
                                    </span>
                                </dd>
                                <dd class="item-short">作为一个在桂林生活了26年的地地道道的桂林人，我是下了很大的决心才来写这篇攻略的。首先申......</dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        1天
                                        
                                        
                                        
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">43.5万</i></li>
                                <li><i title="喜欢" class="want">5960</i></li>
                                <li><i title="回复" class="numreply">360</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/1356221.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-4"></span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/7eda35074f5b468098fda5cb96b945b8_C_210_140.jpg"
                                     writing="2779557" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">九月广西-龙脊、阳朔、黄姚(力荐)6日行</dt>
                                <dd class="item-user">pingyy1982发表于&nbsp;2012-10-14
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-06-21
                                    </span>
                                </dd>
                                <dd class="item-short">暑假已结束、十一“黄金粥”还没到，我就趁着九月中旬去了广西。9.13-9.14 T189 北京西18：5......</dd>
                                <dd class="item-prac">
                                    <span class="tips_a">
                                        6天
                                        2012-09-01 00:00:00
                                        
                                        ，和朋友
                                    </span>
                                    <span class="tips_b">
                                    </span>
                                </dd>
                            </dl>
                            <ul class="item-infor">
                                <li><i title="浏览" class="numview">20.9万</i></li>
                                <li><i title="喜欢" class="want">4748</i></li>
                                <li><i title="回复" class="numreply">67</i></li>
                            </ul>
                        </div>
                    </a>
                    <a class="journal-item cf" target="_blank"
                       href="http://you.ctrip.com/travels/guilin28/2060057.html">
                        <div class="iteminner">
                            <span class="item-photo item-nopic">
                                    <span class="pic-tagico-3"></span>
                                <img style=" display:block;" width="210" height="140"
                                     src="images/user/e57a7e7912d84cc1a084089b995a39a6_C_210_140.jpg"
                                     writing="19419391" alt="">
                            </span>
                            <dl>
                                <dt class="ellipsis">12日深度游桂林——龙脊，资源，桂林，阳朔（信息量真的太大）</dt>
                                <dd class="item-user">9181艾尔娃发表于&nbsp;2014-09-27
                                    <span class="lastreply">
                                            最新回复&nbsp;2018-07-23
                                    </span>
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
                                <li><i title="浏览" class="numview">34.7万</i></li>
                                <li><i title="喜欢" class="want">1068</i></li>
                                <li><i title="回复" class="numreply">198</i></li>
                            </ul>
                        </div>
                    </a>
                    <!--国家游记列表等用的翻页形式-->
                    <div class="ttd_pager cf"><p>1-10 / 10532篇游记</p>
                        <div class="pager_v1"><a class="prevpage disabled">上一页</a><a class="current">1</a><a
                                href="http://you.ctrip.com/travels/guilin28/t3-p2.html">2</a><a
                                href="http://you.ctrip.com/travels/guilin28/t3-p3.html">3</a><a
                                href="http://you.ctrip.com/travels/guilin28/t3-p4.html">4</a><a
                                href="http://you.ctrip.com/travels/guilin28/t3-p5.html">5</a><a class="nextpage"
                                                                                                href="http://you.ctrip.com/travels/guilin28/t3-p2.html">下一页</a><span>到 <input
                                id="gopagetext" value="" type="text"> 页 / <b class="numpage">1054</b>页</span><a
                                class="gopage" href="javascript:;">确定</a></div>
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
            <dd><a href="http://you.ctrip.com/htmlpages/eula.html" target="_blank">用户协议</a></dd>
            <dd><a href="http://you.ctrip.com/htmlpages/guide.html" target="_blank">社区指南</a></dd>
            <dd><a href="http://you.ctrip.com/htmlpages/exp.html" target="_blank">经验与等级</a></dd>
            <dd><a href="http://you.ctrip.com/htmlpages/help.html" target="_blank">新手导航</a></dd>
            <dd><a href="http://you.ctrip.com/thematic/marketing/mianze" target="_blank">网络信息侵权保障</a></dd>
        </dl>
        <dl>
            <dt>发现你的旅行</dt>
            <dd><a href="http://you.ctrip.com/place" target="_blank">了解目的地</a></dd>
            <dd><a href="http://you.ctrip.com/travels" target="_blank">阅读精彩游记</a></dd>
            <dd><a href="http://you.ctrip.com/guides" target="_blank">下载精品攻略</a></dd>
            <dd><a href="http://you.ctrip.com/asks" target="_blank">请教旅行达人</a></dd>
            <dd><a href="http://you.ctrip.com/events" target="_blank">发起结伴</a></dd>
        </dl>
        <dl>
            <dt>分享你的旅行</dt>
            <dd><a href="http://you.ctrip.com/add-travel/guide.html" target="_blank">发表游记大作</a></dd>
            <dd><a href="http://you.ctrip.com/dianping/" target="_blank">点评去过的景点</a></dd>
        </dl>
        <dl class="ftabout">
            <dt>关于我们</dt>
            <dd><a href="http://you.ctrip.com/htmlpages/about.html" target="_blank">社区简介</a></dd>
            <dd><a href="http://you.ctrip.com/htmlpages/contact.html" target="_blank">联系我们</a></dd>
            <dd><a href="http://you.ctrip.com/htmlpages/job.html" target="_blank">加入我们</a></dd>
            <dd><a href="http://you.ctrip.com/intelligence.html" target="_blank">智慧旅游</a></dd>
        </dl>
        <dl class="ftguanzhu">
            <dt>关注携程攻略社区</dt>
            <dd class="youguanzhu cf"><span class="ftweixin"></span></dd>
        </dl>
    </div>
</div>
</body>
</html>