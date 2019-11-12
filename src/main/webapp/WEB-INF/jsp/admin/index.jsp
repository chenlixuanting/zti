<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>"/>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
    <title>商品库存管理系统</title>
    <link rel="stylesheet" type="text/css" href="assets/admin/static/admin/layui/css/layui.css"/>
    <link rel="stylesheet" type="text/css" href="assets/admin/static/admin/css/admin.css"/>
</head>
<body>
<div class="main-layout" id='main-layout'>
    <!--侧边栏-->
    <div class="main-layout-side">
        <div class="m-logo">
        </div>
        <ul class="layui-nav layui-nav-tree" lay-filter="leftNav">

            <li class="layui-nav-item layui-nav-itemed">
                <a href="javascript:;"><i class="iconfont">&#xe607;</i>商品管理</a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;" data-url="admin/stock-manage" data-id='1' data-text="库存管理"><span
                            class="l-line"></span>库存管理</a></dd>
                    <dd><a href="javascript:;" data-url="admin/picture-manage" data-id='2' data-text="图片管理"><span
                            class="l-line"></span>图片管理</a></dd>
                    <dd><a href="javascript:;" data-url="admin/type-manage" data-id='3' data-text="分类管理"><span
                            class="l-line"></span>分类管理</a></dd>
                    <dd><a href="javascript:;" data-url="admin/unit-manage" data-id='4' data-text="单位管理"><span
                            class="l-line"></span>单位管理</a></dd>
                </dl>
            </li>

            <li class="layui-nav-item">
                <a href="javascript:;" data-url="admin/record-manage" data-id='5' data-text="出入库记录管理"><i
                        class="iconfont">&#xe60a;</i>出入库记录管理</a>
            </li>

            <li class="layui-nav-item">
                <a href="javascript:;" data-url="admin/storehouse-manage" data-id='6' data-text="仓库管理"><i
                        class="iconfont">&#xe60c;</i>仓库管理</a>
            </li>

            <li class="layui-nav-item">
                <a href="javascript:;" data-url="admin/admin-manage" data-id='7' data-text="管理员信息"><i class="iconfont">&#xe604;</i>管理员信息</a>
            </li>

        </ul>
    </div>
    <!--右侧内容-->
    <div class="main-layout-container">
        <!--头部-->
        <div class="main-layout-header">
            <div class="menu-btn" id="hideBtn">
                <a href="javascript:;">
                    <span class="iconfont">&#xe60e;</span>
                </a>
            </div>
            <ul class="layui-nav" lay-filter="rightNav">
                <li class="layui-nav-item">
                    <a href="javascript:;" data-url="admin/admin-info" data-id='8' data-text="个人信息">超级管理员</a>
                </li>
                <li class="layui-nav-item"><a href="javascript:;" id="logoutBtn">退出</a></li>
            </ul>
        </div>
        <!--主体内容-->
        <div class="main-layout-body">
            <!--tab 切换-->
            <div class="layui-tab layui-tab-brief main-layout-tab" lay-filter="tab" lay-allowClose="true">
                <ul class="layui-tab-title">
                    <li class="layui-this welcome">后台主页</li>
                </ul>
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show" style="background: #f5f5f5;">
                        <!--1-->
                        <iframe src="admin/welcome" width="100%" height="100%" name="iframe" scrolling="auto"
                                class="iframe" framborder="0"></iframe>
                        <!--1end-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--遮罩-->
    <div class="main-mask">
    </div>
</div>
<script type="text/javascript">
    var scope = {
        link: 'admin/welcome'
    }
</script>
<script src="assets/admin/static/admin/layui/layui.js" type="text/javascript" charset="utf-8"></script>
<script src="assets/admin/static/admin/js/common.js" type="text/javascript" charset="utf-8"></script>
<script src="assets/admin/static/admin/js/main.js" type="text/javascript" charset="utf-8"></script>
<script src="assets/admin/static/admin/js/jquery-3.4.1.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    $("#logoutBtn").on('click', function () {
        $.ajax({
            type: "GET",
            url: "admin/logout",
            success: function () {
                window.location.href = "admin/login";
            }
        })
    });
</script>

</body>
</html>
