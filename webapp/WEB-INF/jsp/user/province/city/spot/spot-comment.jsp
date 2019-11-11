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
    <title>${spotVo.spotName}旅游点评_${spotVo.spotName}好玩吗_怎么样？</title>
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/common.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/fed.v2.0.css">
    <link charset="utf-8" type="text/css" rel="stylesheet" href="css/user/comment_form.v2.0.css">
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

<div class="content cf">
    <div class="comment_form">
        <div class="form_main">
            <div class="main_title">
                <a href="http://you.ctrip.com/sight/guilin28/2888.html" class="comment_nopic86" target="_blank">
                    <img width="86" height="60"
                         src="${spotVo.headPicUrl}"></a>
                <h3 class="ellipsis"><a href="http://you.ctrip.com/sight/guilin28/2888.html"
                                        target="_blank">${spotVo.spotName}</a></h3>
                <p class="ellipsis">${spotVo.address}</p>
            </div>
            <div class="formbox cf">
                <!--未登录提示-->
                <div class="form_line">
                    <label>
                        总体点评：</label>
                    <div class="f_rbox">
                        <div class="sringbox">
                            <span class="comment_ring c_ring_large"><i class=""></i><i class=""></i><i class=""></i><i
                                    class=""></i><i class=""></i></span>
                        </div>
                        <!---->
                        <span class="sringtext" style="display: inline;">请点击图标评分</span> <span class="changecomment"
                                                                                              style="display: none;">很差</span>
                        <span class="error_text" style="display: none;">请选择点评分数</span>
                    </div>
                </div>
                <div class="form_line">
                    <div class="f_rbox">
                        <!--餐厅选项-->
                        <ul class="catecomment" style="display: none">
                            <li>口味： <span class="comment_ring c_ring_middle"><i></i><i></i><i></i><i></i><i></i>
                                    </span><span class="changecomment">很差</span></li>
                            <li>环境： <span class="comment_ring c_ring_middle"><i></i><i></i><i></i><i></i><i></i>
                                    </span><span class="changecomment">很差</span></li>
                            <li>服务： <span class="comment_ring c_ring_middle"><i></i><i></i><i></i><i></i><i></i>
                                    </span><span class="changecomment">很差</span></li>
                        </ul>
                        <!--店铺选项-->
                        <ul class="catecomment" style="display: none">
                            <li>商品：<span class="comment_ring c_ring_middle"><i></i><i></i><i></i><i></i><i></i></span>
                                <span class="changecomment">很差</span></li>
                            <li>环境：<span class="comment_ring c_ring_middle"><i></i><i></i><i></i><i></i><i></i></span>
                                <span class="changecomment">很差</span></li>
                            <li>服务：<span class="comment_ring c_ring_middle"><i></i><i></i><i></i><i></i><i></i></span>
                                <span class="changecomment">很差</span></li>
                        </ul>
                        <!--景点/娱乐，选项-->
                        <ul class="catecomment" style="display: block">
                            <li>景 色：<span class="comment_ring c_ring_middle"><i class=""></i><i class=""></i><i
                                    class=""></i><i class=""></i><i class=""></i></span>
                                <span class="changecomment" style="display: none;">很差</span></li>
                            <li>趣 味：<span class="comment_ring c_ring_middle"><i class=""></i><i class=""></i><i
                                    class=""></i><i class=""></i><i class=""></i></span>
                                <span class="changecomment" style="display: none;">很差</span></li>
                            <li>性价比：<span class="comment_ring c_ring_middle"><i class=""></i><i class=""></i><i
                                    class=""></i><i class=""></i><i class=""></i></span>
                                <span class="changecomment" style="display: none;">很好</span></li>
                        </ul>
                    </div>
                </div>
                <div class="form_line review_content">
                    <label>
                        点评内容：</label>
                    <div class="f_rbox">
                        <div class="upload">
                            <textarea placeholder="旅行中有哪些亮点？哪些发现？给迷茫的游友们指条明路吧~"
                                      style="padding:5px 0 5px 9px;"></textarea>
                        </div>
                        <p class="bottomtips">
                            <span class="f_right">再写<em>10</em>个字并传图，成为优质点评，获得更多积分！</span> <span class="error_text"
                                                                                                 style="display: none;">点评内容至少输入20个汉字</span>
                        </p>
                    </div>
                </div>
                <div class="form_line">
                    <label>
                        出游类型：</label>
                    <div class="f_rbox">
                        <ul class="youcate cf">
                            <li><i class="youcate_a"></i>商务旅行<s></s></li>
                            <li><i class="youcate_b"></i>朋友出游<s></s></li>
                            <li><i class="youcate_c"></i>情侣出游<s></s></li>
                            <li><i class="youcate_d"></i>家庭亲子<s></s></li>
                            <li><i class="youcate_e"></i>单独旅行<s></s></li>
                        </ul>
                        <p class="bottomtips">
                            <span class="error_text">请选择出游类型</span>
                        </p>
                    </div>
                </div>
                <div class="form_line f_linethin" data-poi-type="attractions">
                    <!-- 提示 data-poi-type="attractions" 代表是景点、娱乐-->
                    <label>
                        游玩时间：</label>
                    <div class="f_rbox">
                        <div class="gsn-select" id="selectYear">
                            <div class="select-txt">年</div>
                            <ul class="selectlist undis" style="display: none;">
                                <li><a href="javascript:void(0)">2019年</a></li>
                                <li><a href="javascript:void(0)">2018年</a></li>
                                <li><a href="javascript:void(0)">2017年</a></li>
                                <li><a href="javascript:void(0)">2016年</a></li>
                                <li><a href="javascript:void(0)">2015年</a></li>
                                <li><a href="javascript:void(0)">2014年</a></li>
                                <li><a href="javascript:void(0)">2013年</a></li>
                                <li><a href="javascript:void(0)">2012年</a></li>
                                <li><a href="javascript:void(0)">2011年</a></li>
                                <li><a href="javascript:void(0)">2010年</a></li>
                                <li><a href="javascript:void(0)">2009年</a></li>
                                <li><a href="javascript:void(0)">2008年</a></li>
                                <li><a href="javascript:void(0)">2007年</a></li>
                                <li><a href="javascript:void(0)">2006年</a></li>
                                <li><a href="javascript:void(0)">2005年</a></li>
                                <li><a href="javascript:void(0)">2004年</a></li>
                                <li><a href="javascript:void(0)">2003年</a></li>
                                <li><a href="javascript:void(0)">2002年</a></li>
                                <li><a href="javascript:void(0)">2001年</a></li>
                                <li><a href="javascript:void(0)">2000年</a></li>
                                <li><a href="javascript:void(0)">1999年</a></li>
                                <li><a href="javascript:void(0)">1998年</a></li>
                                <li><a href="javascript:void(0)">1997年</a></li>
                                <li><a href="javascript:void(0)">1996年</a></li>
                                <li><a href="javascript:void(0)">1995年</a></li>
                                <li><a href="javascript:void(0)">1994年</a></li>
                                <li><a href="javascript:void(0)">1993年</a></li>
                                <li><a href="javascript:void(0)">1992年</a></li>
                                <li><a href="javascript:void(0)">1991年</a></li>
                                <li><a href="javascript:void(0)">1990年</a></li>
                                <li><a href="javascript:void(0)">1989年</a></li>
                                <li><a href="javascript:void(0)">1988年</a></li>
                                <li><a href="javascript:void(0)">1987年</a></li>
                                <li><a href="javascript:void(0)">1986年</a></li>
                                <li><a href="javascript:void(0)">1985年</a></li>
                                <li><a href="javascript:void(0)">1984年</a></li>
                                <li><a href="javascript:void(0)">1983年</a></li>
                                <li><a href="javascript:void(0)">1982年</a></li>
                                <li><a href="javascript:void(0)">1981年</a></li>
                                <li><a href="javascript:void(0)">1980年</a></li>
                                <li><a href="javascript:void(0)">1979年</a></li>
                                <li><a href="javascript:void(0)">1978年</a></li>
                                <li><a href="javascript:void(0)">1977年</a></li>
                                <li><a href="javascript:void(0)">1976年</a></li>
                                <li><a href="javascript:void(0)">1975年</a></li>
                                <li><a href="javascript:void(0)">1974年</a></li>
                                <li><a href="javascript:void(0)">1973年</a></li>
                                <li><a href="javascript:void(0)">1972年</a></li>
                                <li><a href="javascript:void(0)">1971年</a></li>
                                <li><a href="javascript:void(0)">1970年</a></li>
                                <li><a href="javascript:void(0)">1969年</a></li>
                                <li><a href="javascript:void(0)">1968年</a></li>
                                <li><a href="javascript:void(0)">1967年</a></li>
                                <li><a href="javascript:void(0)">1966年</a></li>
                                <li><a href="javascript:void(0)">1965年</a></li>
                                <li><a href="javascript:void(0)">1964年</a></li>
                                <li><a href="javascript:void(0)">1963年</a></li>
                                <li><a href="javascript:void(0)">1962年</a></li>
                                <li><a href="javascript:void(0)">1961年</a></li>
                                <li><a href="javascript:void(0)">1960年</a></li>
                                <li><a href="javascript:void(0)">1959年</a></li>
                                <li><a href="javascript:void(0)">1958年</a></li>
                                <li><a href="javascript:void(0)">1957年</a></li>
                                <li><a href="javascript:void(0)">1956年</a></li>
                                <li><a href="javascript:void(0)">1955年</a></li>
                                <li><a href="javascript:void(0)">1954年</a></li>
                                <li><a href="javascript:void(0)">1953年</a></li>
                                <li><a href="javascript:void(0)">1952年</a></li>
                                <li><a href="javascript:void(0)">1951年</a></li>
                                <li><a href="javascript:void(0)">1950年</a></li>
                                <li><a href="javascript:void(0)">1949年</a></li>
                                <li><a href="javascript:void(0)">1948年</a></li>
                                <li><a href="javascript:void(0)">1947年</a></li>
                                <li><a href="javascript:void(0)">1946年</a></li>
                                <li><a href="javascript:void(0)">1945年</a></li>
                                <li><a href="javascript:void(0)">1944年</a></li>
                                <li><a href="javascript:void(0)">1943年</a></li>
                                <li><a href="javascript:void(0)">1942年</a></li>
                                <li><a href="javascript:void(0)">1941年</a></li>
                                <li><a href="javascript:void(0)">1940年</a></li>
                                <li><a href="javascript:void(0)">1939年</a></li>
                                <li><a href="javascript:void(0)">1938年</a></li>
                                <li><a href="javascript:void(0)">1937年</a></li>
                                <li><a href="javascript:void(0)">1936年</a></li>
                                <li><a href="javascript:void(0)">1935年</a></li>
                                <li><a href="javascript:void(0)">1934年</a></li>
                                <li><a href="javascript:void(0)">1933年</a></li>
                                <li><a href="javascript:void(0)">1932年</a></li>
                                <li><a href="javascript:void(0)">1931年</a></li>
                                <li><a href="javascript:void(0)">1930年</a></li>
                                <li><a href="javascript:void(0)">1929年</a></li>
                                <li><a href="javascript:void(0)">1928年</a></li>
                                <li><a href="javascript:void(0)">1927年</a></li>
                                <li><a href="javascript:void(0)">1926年</a></li>
                                <li><a href="javascript:void(0)">1925年</a></li>
                                <li><a href="javascript:void(0)">1924年</a></li>
                                <li><a href="javascript:void(0)">1923年</a></li>
                                <li><a href="javascript:void(0)">1922年</a></li>
                                <li><a href="javascript:void(0)">1921年</a></li>
                                <li><a href="javascript:void(0)">1920年</a></li>
                                <li><a href="javascript:void(0)">1919年</a></li>
                                <li><a href="javascript:void(0)">1918年</a></li>
                                <li><a href="javascript:void(0)">1917年</a></li>
                                <li><a href="javascript:void(0)">1916年</a></li>
                                <li><a href="javascript:void(0)">1915年</a></li>
                                <li><a href="javascript:void(0)">1914年</a></li>
                                <li><a href="javascript:void(0)">1913年</a></li>
                                <li><a href="javascript:void(0)">1912年</a></li>
                                <li><a href="javascript:void(0)">1911年</a></li>
                                <li><a href="javascript:void(0)">1910年</a></li>
                                <li><a href="javascript:void(0)">1909年</a></li>
                                <li><a href="javascript:void(0)">1908年</a></li>
                                <li><a href="javascript:void(0)">1907年</a></li>
                                <li><a href="javascript:void(0)">1906年</a></li>
                                <li><a href="javascript:void(0)">1905年</a></li>
                                <li><a href="javascript:void(0)">1904年</a></li>
                                <li><a href="javascript:void(0)">1903年</a></li>
                                <li><a href="javascript:void(0)">1902年</a></li>
                                <li><a href="javascript:void(0)">1901年</a></li>
                                <li><a href="javascript:void(0)">1900年</a></li>
                            </ul>
                            <span class="arrow"></span>
                        </div>
                        <div class="gsn-select" id="selectMonth" style="z-index: 2;">
                            <div class="select-txt">月</div>
                            <ul class="selectlist undis" style="display: none;">
                                <li><a href="javascript:void(0)">1月</a></li>
                                <li><a href="javascript:void(0)">2月</a></li>
                                <li><a href="javascript:void(0)">3月</a></li>
                                <li><a href="javascript:void(0)">4月</a></li>
                                <li><a href="javascript:void(0)">5月</a></li>
                                <li><a href="javascript:void(0)">6月</a></li>
                                <li><a href="javascript:void(0)">7月</a></li>
                                <li><a href="javascript:void(0)">8月</a></li>
                                <li><a href="javascript:void(0)">9月</a></li>
                                <li><a href="javascript:void(0)">10月</a></li>
                                <li><a href="javascript:void(0)">11月</a></li>
                                <li><a href="javascript:void(0)">12月</a></li>
                            </ul>
                            <span class="arrow"></span>
                        </div>
                        <span class="error_text">请选择游玩时间</span>
                    </div>
                </div>
                <div class="form_line" data-poi-type="attractions">
                    <label>
                        游览时长：</label>
                    <div class="f_rbox">
                        <input type="text" class="forminput w_70 verification_input" maxlength="4">
                        <div class="gsn-select" id="selectHour">
                            <div class="select-txt">
                                小时
                            </div>
                            <ul class="selectlist undis" style="display: none;">
                                <li><a href="javascript:void(0)">天</a></li>
                            </ul>
                            <span class="arrow"></span>
                        </div>
                        <span class="error_text">请填写游览时长</span>
                    </div>
                </div>
                <div class="form_line">
                    <div class="f_rbox">
                        <a href="javascript:;" id="poicomment_submit" data-onsubmit="1"
                           class="gsn-btn-20  a_popup_login ">发表点评</a>
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
</html>