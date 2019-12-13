package cn.edu.guet.zti.web.constant;

import java.io.File;

public class Constant {
    public final static String XIECHENG_ORIGIN_URL = "https://you.ctrip.com";
    public final static String GUANGXI_SIGHT_LIST_URL = XIECHENG_ORIGIN_URL + "/countrysightlist/guangxi100052.html";
    public static final String PICTURE_REAL_PATH = new File("").getAbsolutePath()
            + "\\src\\main\\webapp\\WEB-INF\\img\\";
    public static final String READ_TIME_OUT_KEYWORD = "java.net.SocketTimeoutException: Read timed out";
    public static final String ILLEGAL_ARGUMENT_KEYWORD = "java.lang.IllegalArgumentException";
    public static final String CONNECTION_TIME_OUT_KEYWORD = "org.apache.http.conn.ConnectTimeoutException";
    public static final CharSequence DOWNLOAD_PAGE_KEYWORD = "download page";
    public static final CharSequence NUMBER_FORMAT_KEYWORD = "java.lang.NumberFormatException";
    public static final CharSequence PROCESS_REQUEST_KEYWORD = "process request";
}
