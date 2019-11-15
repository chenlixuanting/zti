package cn.edu.guet.zti.web.webmagic.pipeline;

import cn.edu.guet.zti.web.webmagic.downloader.CustomHttpClientDownloader;
import cn.edu.guet.zti.web.webmagic.processor.SightPageProcessor;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;

import java.util.List;

/**
 * 根据一个地方的所有景点链接，派发给一个PageProcessor用来爬取景点的详细信息
 */
public class SightPipeline implements Pipeline {

    private final static String XIECHENG_URL = "https://you.ctrip.com";

    public void process(ResultItems resultItems, Task task) {
        List<String> sightLinkList = resultItems.get("sightLink");
        for (String link : sightLinkList) {
            Spider.create(new SightPageProcessor())
                    .setDownloader(new CustomHttpClientDownloader())
                    .addUrl(XIECHENG_URL+link)
                    .addPipeline(new ConsolePipeline())
                    .thread(10)
                    .run();
        }
    }
}
