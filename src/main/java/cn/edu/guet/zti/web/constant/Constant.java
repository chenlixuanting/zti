package cn.edu.guet.zti.web.constant;

import java.io.File;

public class Constant {
    public final static String XIECHENG_ORIGIN_URL = "https://you.ctrip.com";
    public final static String GUANGXI_SIGHTLIST_URL = XIECHENG_ORIGIN_URL + "/countrysightlist/guangxi100052.html";
    public static final String PICTURE_REAL_PATH = new File("").getAbsolutePath()
            + "\\src\\main\\webapp\\WEB-INF\\img\\";
    public static final String RUN_TIME_OUT_KEYWORD = "java.net.SocketTimeoutException";
    public static final String ILLEGAL_ARGUMENT_KEYWORD = "java.lang.IllegalArgumentException";
}
