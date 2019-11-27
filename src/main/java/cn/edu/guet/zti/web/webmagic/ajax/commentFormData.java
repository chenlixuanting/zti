package cn.edu.guet.zti.web.webmagic.ajax;

import org.jsoup.Connection;
import org.jsoup.Jsoup;

import java.io.IOException;

/**
 * 只需要poID和pagenow两个参数，二poiID裸露在html可见的JS代码中
 */
public class commentFormData {

    private static final String NOT_ALL_PARAMS_URL = "https://you.ctrip.com/destinationsite/TTDSecond/SharedView/AsynCommentView" +
            "?order=3.0&star=0.0&tourist=0.0&resourcetype=2";

    public String getComment(int pagenow, String poiID) throws IOException {
        String url = NOT_ALL_PARAMS_URL
                + "&poiID=" + poiID +"&pagenow=" + pagenow ;
        Connection postConnect = Jsoup.connect(url)
                .method(Connection.Method.POST)
                .header("content-type", "application/x-www-form-urlencoded")
                .validateTLSCertificates(false);
        return postConnect.execute().body();
    }

}
