package cn.edu.guet.zti.web.webmagic.pipeline;

import cn.edu.guet.zti.web.webmagic.processor.ToSightPageProcessor;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;

import java.util.List;

/**
 * 获取所有地接方的链，根据链接爬取各个地方的各个景点,n*m
 */
public class CrawlSightPipeline implements Pipeline {
    private final static String XIECHENG_URL = "https://you.ctrip.com";

    public void process(ResultItems resultItems, Task task) {

        List<String> placeLinkList = resultItems.get("placeLink");
        for (String link : placeLinkList) {
            link = link.replace("place", "sight");
//            System.out.println(link);
            Spider.create(new ToSightPageProcessor())
                    .addUrl(XIECHENG_URL + link)
//                    .addPipeline(new ConsolePipeline())
                    .addPipeline(new SightPipeline())
                    .thread(20)
                    .run();
        }
    }
}
