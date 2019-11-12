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
    <title>管理员管理</title>
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
    <table id="demo" lay-filter="useruv"></table>
    <script type="text/html" id="barDemo">
        <%--<a class="layui-btn layui-btn-normal layui-btn-sm " lay-event="detail">查看</a>--%>
        <a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-sm " lay-event="del">删除</a>
    </script>
</div>
<script src="assets/admin/layui/layui.js" type="text/javascript" charset="utf-8"></script>
<script src="assets/admin/static/admin/js/jquery-3.4.1.min.js" type="text/javascript" charset="utf-8"></script>
</body>
<script>
    $(function () {

        layui.use(['form', 'table', 'layer'], function () {

            var table = layui.table;
            var layer = layui.layer;
            var form = layui.form;

            //第一个实例
            table.render({
                elem: '#demo',
                id: 'tableReload'
                , url: 'admin/list' //数据接口
                , page: true //开启分页
                , cols: [[
                    {checkbox: true, fixed: true, width: '5%'},//表头
                    {field: 'id', title: 'ID', width: '5%', sort: true, fixed: 'left'},
                    {field: 'account', title: '账号', width: '5%', sort: true, fixed: 'left'},
                    {field: 'name', title: '管理员姓名', width: '10%', sort: true, fixed: 'left'},
                    {field: 'password', title: '密码', width: '5%'},
                    {
                        field: 'createtime',
                        title: '创建时间',
                        width: '20%',
                        templet: "<div>{{layui.util.toDateString(d.createtime, 'yyyy-MM-dd HH:mm:ss')}}</div>",
                        sort: true
                    },
                    {
                        field: 'updatetime',
                        title: '更新时间',
                        width: '20%',
                        templet: "<div>{{layui.util.toDateString(d.updatetime, 'yyyy-MM-dd HH:mm:ss')}}</div>",
                        sort: true
                    },
                    {field: '', title: '操作', width: '25%', toolbar: "#barDemo"}
                ]]
            });

            //监听工具条
            table.on('tool(useruv)', function (obj) {
                var data = obj.data;
                if (obj.event === 'detail') {
                    layer.msg('ID：' + data.id + ' 的查看操作');
                } else if (obj.event === 'del') {
                    layer.confirm('真的删除行么', function (index) {
                        console.log(data);
                        $.ajax({
                            url: "admin/del",
                            type: "POST",
                            data: {"id": data.id},
                            dataType: "json",
                            success: function (msg) {
                                if (msg.code == 200) {
//                                    obj.del();
//                                    layer.close(index);
                                    layer.msg("删除成功", {icon: 6});
                                    table.reload('tableReload', {
                                        page: {
                                            curr: 1 //重新从第 1 页开始
                                        }
                                        , where: {//这里传参  向后台
//                                        name: name
                                            //可传多个参数到后台...  ，分隔
                                        }
                                        , url: 'admin/list'//后台做模糊搜索接口路径
                                        , method: 'get'
                                    });

                                } else {
                                    layer.msg("删除失败", {icon: 5});
                                }
                            }
                        });
                    });
                } else if (obj.event === 'edit') {

                    //页面层
                    var editTypeModel = layer.open({
                        type: 1,
                        title: "更新管理员信息",
                        skin: 'layui-layer-rim', //加上边框
                        area: ['600px', '300px'], //宽高
                        content: '<div class="site-text site-block" style="width: 90%;height: 80%;margin-top: 20px;">\n' +
                        '    <form class="layui-form">\n' +
                        '        <div class="layui-form-item">\n' +
                        '            <label class="layui-form-label">管理员名称</label>\n' +
                        '            <div class="layui-input-block">\n' +
                        '                <input type="text" name="name" value=' + data.name + ' required="" lay-verify="required" placeholder="请输入分类名称" autocomplete="off" class="layui-input">\n' +
                        '                <input style="display: none;" type="text" name="id" value=' + data.id + ' required="" placeholder="请输入分类名称" autocomplete="off" class="layui-input">\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '        <div class="layui-form-item">\n' +
                        '            <label class="layui-form-label">管理员账号</label>\n' +
                        '            <div class="layui-input-block">\n' +
                        '                <input type="text" name="account" value=' + data.account + ' required="" lay-verify="required" disabled autocomplete="off" class="layui-input">\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '        <div class="layui-form-item">\n' +
                        '            <label class="layui-form-label">管理员密码</label>\n' +
                        '            <div class="layui-input-block">\n' +
                        '                <input type="text" name="password" required="" value=' + data.password + ' lay-verify="required" placeholder="请输入分类名称" autocomplete="off" class="layui-input">\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '        <div class="layui-form-item">\n' +
                        '            <div class="layui-input-block">\n' +
                        '                <button class="layui-btn" lay-submit="" lay-filter="formDemo">立即提交</button>\n' +
                        '                <button type="reset" class="layui-btn layui-btn-primary">重置</button>\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '    </form>\n' +
                        '</div>'
                    });

                    //重新渲染form，否则动态生成的content中的元素没有效果
                    form.render();

                    form.on('submit(formDemo)', function (data) {
                        $.ajax({
                            type: "POST",
                            url: "admin/update",
                            data: data.field,
                            success: function (msg) {
                                layer.msg(msg.message);
                                if (msg.code == 200) {
                                    layer.close(editTypeModel);
                                    //重新加载表格数据
                                    table.reload('tableReload', {
                                        page: {
                                            curr: 1 //重新从第 1 页开始
                                        }
                                        , where: {//这里传参  向后台
//                                        name: name
                                            //可传多个参数到后台...  ，分隔
                                        }
                                        , url: 'admin/list'//后台做模糊搜索接口路径
                                        , method: 'get'
                                    });
                                }
                            }
                        });
                        return false;
                    });

                }
            });

            $("#addBtn").on('click', function () {

                //页面层
                var addTypeModel = layer.open({
                    type: 1,
                    title: "添加管理员",
                    skin: 'layui-layer-rim', //加上边框
                    area: ['600px', '300px'], //宽高
                    content: '<div class="site-text site-block" style="width: 90%;height: 80%;margin-top: 20px;">\n' +
                    '    <form class="layui-form">\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <label class="layui-form-label">管理员名称</label>\n' +
                    '            <div class="layui-input-block">\n' +
                    '                <input type="text" name="name" required="" lay-verify="required" placeholder="请输入管理员名称" autocomplete="off" class="layui-input">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <label class="layui-form-label">管理员账号</label>\n' +
                    '            <div class="layui-input-block">\n' +
                    '                <input type="text" name="account" required="" lay-verify="required" placeholder="请输入管理员账号" autocomplete="off" class="layui-input">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <label class="layui-form-label">管理员密码</label>\n' +
                    '            <div class="layui-input-block">\n' +
                    '                <input type="text" name="password" required="" lay-verify="required" placeholder="请输入管理员密码" autocomplete="off" class="layui-input">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <div class="layui-input-block">\n' +
                    '                <button class="layui-btn" lay-submit="" lay-filter="formDemo">立即提交</button>\n' +
                    '                <button type="reset" class="layui-btn layui-btn-primary">重置</button>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </form>\n' +
                    '</div>'
                });

                //重新渲染form，否则动态生成的content中的元素没有效果
                form.render();

                form.on('submit(formDemo)', function (data) {
                    $.ajax({
                        type: "POST",
                        url: "admin/add",
                        data: data.field,
                        success: function (msg) {
                            layer.msg(msg.message);
                            if (msg.code == 200) {
                                layer.close(addTypeModel);
                                //重新加载表格数据
                                table.reload('tableReload', {
                                    page: {
                                        curr: 1 //重新从第 1 页开始
                                    }
                                    , where: {//这里传参  向后台
//                                        name: name
                                        //可传多个参数到后台...  ，分隔
                                    }
                                    , url: 'admin/list'//后台做模糊搜索接口路径
                                    , method: 'get'
                                });
                            }
                        }
                    });
                    return false;
                });

            });

        });

    });
</script>

</html>