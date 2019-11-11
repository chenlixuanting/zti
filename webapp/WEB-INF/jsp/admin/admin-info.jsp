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
    <title>管理员信息</title>
    <link rel="stylesheet" type="text/css" href="assets/admin/static/admin/layui/css/layui.css"/>
    <link rel="stylesheet" type="text/css" href="assets/admin/static/admin/css/admin.css"/>
</head>
<body>
<div class="layui-tab page-content-wrap">
    <ul class="layui-tab-title">
        <li class="layui-this">修改资料</li>
        <li>修改密码</li>
    </ul>
    <div class="layui-tab-content">

        <div class="layui-tab-item layui-show">
            <form class="layui-form" style="width: 90%;padding-top: 20px;">

                <div class="layui-form-item">
                    <label class="layui-form-label">ID：</label>
                    <div class="layui-input-block">
                        <input type="text" id="resId" disabled autocomplete="off" class="layui-input layui-disabled"
                               value="1">
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label">用户名：</label>
                    <div class="layui-input-block">
                        <input type="text" id="resAccount" disabled autocomplete="off"
                               class="layui-input layui-disabled" value="admin">
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label">姓名：</label>
                    <div class="layui-input-block">
                        <input type="text" id="resName" name="name" required lay-verify="required" placeholder="请输入标题"
                               autocomplete="off" class="layui-input" value="未知">
                    </div>
                </div>

                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <button class="layui-btn layui-btn-normal" lay-submit lay-filter="adminInfo">立即提交</button>
                    </div>
                </div>

            </form>
        </div>

        <div class="layui-tab-item">

            <form class="layui-form" v style="width: 90%;padding-top: 20px;">
                <div class="layui-form-item">
                    <label class="layui-form-label">用户名：</label>
                    <div class="layui-input-block">
                        <input type="text" id="pwdAccount" disabled autocomplete="off"
                               class="layui-input layui-disabled" value="admin">
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label">旧密码：</label>
                    <div class="layui-input-block">
                        <input type="password" id="pwdPassword" name="oldPassword" required lay-verify="required"
                               placeholder="请输入密码"
                               autocomplete="off" class="layui-input">
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label">新密码：</label>
                    <div class="layui-input-block">
                        <input type="password" id="pwdNewPassword" name="newPassword" required lay-verify="required"
                               placeholder="请输入密码"
                               autocomplete="off" class="layui-input">
                    </div>
                </div>

                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <button class="layui-btn layui-btn-normal" lay-submit lay-filter="adminPassword">立即提交</button>
                    </div>
                </div>
            </form>
        </div>

    </div>
</div>
<script src="assets/admin/static/admin/js/jquery-3.4.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="assets/admin/static/admin/layui/layui.js" type="text/javascript" charset="utf-8"></script>
<script>
    $(function () {

        //Demo
        layui.use(['form', 'element', 'layer'], function () {
            var form = layui.form();
            var element = layui.element();
            form.render();

            //获取当前管理员的信息
            $.ajax({
                type: "GET",
                url: "admin/info",
                success: function (msg) {
                    if (msg.code == 200) {
                        $("#resId").val(msg.data.id);
                        $("#resAccount").val(msg.data.account);
                        $("#resName").val(msg.data.name);
                        $("#pwdAccount").val(msg.data.account);
                    }
                }
            });

            //监听信息提交
            form.on('submit(adminInfo)', function (data) {
                $.ajax({
                    type: "POST",
                    url: "admin/info",
                    data: data.field,
                    success: function (msg) {
                        layer.msg(msg.message);
                        if (msg.code == 200) {

                            $.ajax({
                                type: "GET",
                                url: "admin/info",
                                success: function (msg) {
                                    if (msg.code == 200) {
                                        $("#resId").val(msg.data.id);
                                        $("#resAccount").val(msg.data.account);
                                        $("#resName").val(msg.data.name);
                                        $("#pwdAccount").val(msg.data.account);
                                    }
                                }
                            });

                        }
                    }
                });
                return false;
            });

            //监听密码提交
            form.on('submit(adminPassword)', function (data) {
                $.ajax({
                    type: "POST",
                    url: "admin/modifyPassword",
                    data: data.field,
                    success: function (msg) {
                        layer.msg(msg.message);
                        if (msg.code == 200) {
                            $("#pwdPassword").val("");
                            $("#pwdNewPassword").val("");
                        }
                    }
                });
                return false;
            });

        });
    });
</script>
</body>
</html>