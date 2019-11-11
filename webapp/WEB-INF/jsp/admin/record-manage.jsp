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
    <title>商品图片管理</title>
    <link rel="stylesheet" type="text/css" href="assets/admin/layui/css/layui.css"/>
    <link rel="stylesheet" type="text/css" href="assets/admin/static/admin/css/admin.css"/>
</head>

<body>
<div class="page-content-wrap">
    <div class="layui-form">
        <div class="layui-form-item">

            <div class="layui-inline tool-btn">
                <button class="layui-btn layui-btn-small layui-btn-default hidden-xs" id="addBtn"><i
                        class="layui-icon">&#xe654;</i></button>
                </button>
            </div>

            <div class="layui-inline">
                <select name="category" lay-filter="status">
                    <option value="0">主导航</option>
                </select>
            </div>

            <div class="layui-inline">
                <input type="text" name="title" placeholder="请输入关键字" autocomplete="off" class="layui-input">
            </div>

            <div class="layui-inline">
                <button class="layui-btn layui-btn-normal" lay-submit="search">搜索</button>
            </div>

        </div>
    </div>
    <table id="demo"></table>
    <script type="text/html" id="barDemo">
        <a class="layui-btn layui-btn-danger layui-btn-sm " lay-event="del">删除</a>
    </script>
</div>
<script src="assets/admin/layui/layui.js" type="text/javascript" charset="utf-8"></script>
<script src="assets/admin/common/dateFormatSystem.js" type="text/javascript" charset="utf-8"></script>
<script>
    layui.use('table', function () {
        var table = layui.table;

        //第一个实例
        table.render({
            elem: '#demo'
            , height: 312
            , url: 'type/list' //数据接口
            , page: true //开启分页
            , cols: [[
                {checkbox: true, fixed: true, width: '5%'},//表头
                {field: 'id', title: 'ID', width: '10%', sort: true, fixed: 'left'},
                {field: 'name', title: '分类名称', width: '10%'},
                {
                    field: 'createtime',
                    title: '创建时间',
                    width: '25%',
                    templet: "<div>{{layui.util.toDateString(d.createtime, 'yyyy-MM-dd HH:mm:ss')}}</div>",
                    sort: true
                },
                {
                    field: 'updatetime',
                    title: '更新时间',
                    width: '25%',
                    templet: "<div>{{layui.util.toDateString(d.updatetime, 'yyyy-MM-dd HH:mm:ss')}}</div>",
                    sort: true
                },
                {field: '', title: '操作', width: '25%', toolbar: "#barDemo"}
            ]]
        });

    });
</script>
</body>

</html>