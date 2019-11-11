package cn.edu.guet.zti.web.webmagic.processor;

import cn.edu.guet.zti.web.webmagic.pipeline.ConsolePipeline;
import us.codecraft.webmagic.*;
import us.codecraft.webmagic.processor.PageProcessor;

/**
 * 广西省各地景点总览页面，一个页面有10个地方，一个地方对应5个热门景点
 */
public class PlacePageProcessor implements PageProcessor {

    private Site site = Site.me().setRetryTimes(3).setSleepTime(1000);
    private final static String XIECHENG_URL = "https://you.ctrip.com/";
    private final static String GUANGXI_SIGHTLIST_URL = "https://you.ctrip.com/countrysightlist/guangxi100052.html";

    // process是定制爬虫逻辑的核心接口，在这里编写抽取逻辑
    public void process(Page page) {
        //图片链接
        page.putField("pictureLink", page.getHtml().xpath("//a[@class='ttd_nopic100']/img/@src").all());
        //景点名称
        page.putField("placeName", page.getHtml().xpath("//div[@class='cityimg']/span/text()").all());
        //景点链接
        page.putField("palceLink", XIECHENG_URL + page.getHtml()
                .xpath("//div[@class='list_mod1']/dl/dt/a/@href").all());
        //推荐景点
        page.putField("hotSightName", XIECHENG_URL + page.getHtml()
                .xpath("//div[@class='list_mod1']/dl/dd[@class='ellipsis']/a/text()").all());
        //推荐景点链接（这里携程重定向到了买票页面）
        page.putField("hotSightLink", XIECHENG_URL + page.getHtml()
                .xpath("//div[@class='list_mod1']/dl/dd[@class='ellipsis']/a/@href").all());


        page.addTargetRequests(page.getHtml().links().regex("https://you.ctrip.com/countrysightlist/guangxi100052/p"
                + "\\d" + ".html").all());
    }

    public Site getSite() {
        return site;
    }

    public static void main(String[] args) {
        Spider.create(new PlacePageProcessor())
                .addUrl(GUANGXI_SIGHTLIST_URL)
                .addPipeline(new ConsolePipeline())
//                .addPipeline(new JsonFilePipeline("F:\\GUANGXI_SIGHTLIST"))
                .thread(5)
                .run();
    }

}
