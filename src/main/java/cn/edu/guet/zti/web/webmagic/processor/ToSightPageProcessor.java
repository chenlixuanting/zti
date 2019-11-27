package cn.edu.guet.zti.web.webmagic.processor;

import cn.edu.guet.zti.web.webmagic.pipeline.persistent.PersistentSightPipeline;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.selector.Selectable;

import java.util.List;

/**
 * 一个地方的页面，爬取此页面的各个景点链接，不保存数据
 */
public class ToSightPageProcessor implements PageProcessor {

    private Site site = Site.me().setRetryTimes(3).setSleepTime(1500).setTimeOut(15000);
    private String placeUrlId;
    private PersistentSightPipeline persistentSightPipeline;

    public ToSightPageProcessor() {
    }

    public ToSightPageProcessor(String placeUrlId) {
        this.placeUrlId = placeUrlId;
    }

    public ToSightPageProcessor(String placeUrlId, PersistentSightPipeline persistentSightPipeline) {
        this.placeUrlId = placeUrlId;
        this.persistentSightPipeline = persistentSightPipeline;
    }

    public void process(Page page) {
        page.putField("placeUrlId", placeUrlId);
        page.putField("persistentSightPipeline", persistentSightPipeline);
        page.putField("sightLink", page.getHtml().xpath("//div[@class='list_mod2']/div[2]/dl/dt/a/@href").all());

        Selectable links = page.getHtml().xpath("div[@class='pager_v1']").links();
        if (links != null) {
            //一页以上，则添加其它页到请求队列（首页不用爬取，避免重复）
            String url = page.getUrl().toString();
            if (url.contains("/s0-p")) {
                url = url.substring(url.indexOf("sight/") + 6, url.indexOf("/s0-p"));
            }
            List<String> linkList = links.regex("https://you.ctrip.com/sight/" + url + "/s0-p" + "\\d{1,2}" + ".html").all();
            page.addTargetRequests(linkList);
        }
    }

    public Site getSite() {
        return site;
    }
}
