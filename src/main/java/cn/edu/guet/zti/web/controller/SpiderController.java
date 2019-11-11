package cn.edu.guet.zti.web.controller;

import cn.edu.guet.zti.web.pojo.Result;
import cn.edu.guet.zti.web.webmagic.downloader.CustomHttpClientDownloader;
import cn.edu.guet.zti.web.webmagic.pipeline.HotDestinationPipeline;
import cn.edu.guet.zti.web.webmagic.processor.HotDestinationPageProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import us.codecraft.webmagic.Spider;

import javax.annotation.Resource;

/**
 * 爬虫控制器
 *
 * @author Administrator
 */
@Controller
@RequestMapping("/spider")
public class SpiderController {

    @Resource(name = "threadPool")
    private TaskExecutor taskExecutor;

    /**
     * 热门旅游景点
     */
    @Autowired
    private HotDestinationPageProcessor hotDestinationPageProcessor;
    @Autowired
    private HotDestinationPipeline hotDestinationPipeline;

    /**
     * 自定义页面下载器
     */
    @Autowired
    private CustomHttpClientDownloader customHttpClientDownloader;

    /**
     * 爬取热门旅游景点
     *
     * @return
     */
    @RequestMapping(value = "/hot-destination", method = RequestMethod.GET)
    @ResponseBody
    public Result spiderHotDestination() {
        Result result = new Result();
        try {
            synchronized (SpiderController.class) {
                taskExecutor.execute(new Runnable() {
                    public void run() {
                        Spider
                                .create(hotDestinationPageProcessor)
                                .addPipeline(hotDestinationPipeline)
                                .setDownloader(customHttpClientDownloader)
                                .addUrl(HotDestinationPageProcessor.BASE_URL)
                                .thread(1).run();
                    }
                });
            }
        } catch (Exception e) {
        }
        return result;
    }

}
