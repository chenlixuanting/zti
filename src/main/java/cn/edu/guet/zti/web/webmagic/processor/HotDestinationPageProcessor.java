package cn.edu.guet.zti.web.webmagic.processor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;

import java.util.List;

/**
 * 热门城市页面处理器
 *
 * @author Administrator
 */
@Component
@Slf4j
public class HotDestinationPageProcessor implements PageProcessor {

    private Site site = Site.me().setRetryTimes(10).setSleepTime(400).setTimeOut(5000);

    /**
     * 广西省城市列表页
     */
    public static final String BASE_URL = "https://you.ctrip.com/place/guangxi100052.html";

    public void process(Page page) {
        //获取热门景点图片
        List<String> hotDestinationPicUrls = page.getHtml().xpath("//li[@class='w_220']/a/span[@class='pic_outer']/img/@img-src").all();
        //获取热门景点名称
        List<String> hotDestinationNames = page.getHtml().xpath("//li[@class='w_220']/a/div[@class='liner_bg']/dl/dt/text()").all();
        page.putField("hotDestinationPicUrls", hotDestinationPicUrls);
        page.putField("hotDestinationNames", hotDestinationNames);
    }

    public Site getSite() {
        return this.site;
    }

}
