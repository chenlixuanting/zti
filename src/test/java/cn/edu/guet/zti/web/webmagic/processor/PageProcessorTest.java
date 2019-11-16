package cn.edu.guet.zti.web.webmagic.processor;

import cn.edu.guet.zti.web.webmagic.ajax.commentFormData;
import cn.edu.guet.zti.web.webmagic.downloader.CustomHttpClientDownloader;
import cn.edu.guet.zti.web.webmagic.ajax.commentRequestPayload;
import cn.edu.guet.zti.web.webmagic.pipeline.ConsolePipeline;
import cn.edu.guet.zti.web.webmagic.pipeline.CrawlSightPipeline;
import org.junit.Test;
import us.codecraft.webmagic.Spider;

import java.io.IOException;


public class PageProcessorTest {

    private final static String GUANGXI_SIGHTLIST_URL = "https://you.ctrip.com/countrysightlist/guangxi100052.html";

    /**
     * 爬取广西内所有地方，以及每个地方的所有景点的信息
     */
    @Test
    public void crawlPlacesAndSights() {
        Spider.create(new PlacesPageProcessor())
                .addUrl(GUANGXI_SIGHTLIST_URL)
                //打印各个地方的信息
//                .addPipeline(new ConsolePipeline())
                //进入每一个地方链接
                .addPipeline(new CrawlSightPipeline())
                .thread(10)
                .run();
    }

    /**
     * 爬取一个地方的所有景点
     */
    @Test
    public void crawlAPlaceSights() {
        Spider.create(new ToSightPageProcessor())
                .addUrl("https://you.ctrip.com/sight/guilin28.html")
                .addPipeline(new ConsolePipeline())
                .thread(10)
                .run();
    }
 
    /**
     * 爬取一个景点的详细信息，包括用户评论
     */
    @Test
    public void crawlASight() {
        Spider.create(new SightPageProcessor())
//                .addUrl("https://you.ctrip.com/sight/guiping418/22228.html")
                .addUrl("https://piao.ctrip.com/ticket/dest/t2888.html")
//                .addUrl("https://you.ctrip.com/sight/longjititian970/1417346.html")
                .addPipeline(new ConsolePipeline())
                .setDownloader(new CustomHttpClientDownloader())
                .thread(10)
                .run();
    }

    /**
     * 爬取RequestPayload方式的AJAX请求
     *
     * @throws IOException
     */
    @Test
    public void crawlRequestPayloadComment() throws IOException {
        System.out.println(new commentRequestPayload()
                .getComment(1, 10, "t22081.html").body());
    }

    /**
     * 爬取FormDAta方式的AJAX请求
     *
     * @throws IOException
     */
    @Test
    public void crawlFormDataComment() throws IOException {
        System.out.println(new commentFormData().
                getComment(1, "101768"));

    }
}
