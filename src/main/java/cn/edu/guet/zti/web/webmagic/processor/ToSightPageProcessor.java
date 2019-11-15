package cn.edu.guet.zti.web.webmagic.processor;

import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;

import java.util.List;

/**
 * 一个地方的页面，爬取此页面的各个景点链接，不保存数据
 */
public class ToSightPageProcessor implements PageProcessor {

    private Site site = Site.me().setRetryTimes(3).setSleepTime(1000);

    public void process(Page page) {

        //景点的链接（某些景点url发生了重定向需要为请求头添加user-agent属性，有些不需要）
        page.putField("sightLink", page.getHtml().xpath("//div[@class='rdetailbox']/dl/dt/a/@href").all());

        String url = page.getUrl().toString();
        if(url.contains("/s0-p")){
            url = url.substring(url.indexOf("sight/")+6, url.indexOf("/s0-p"));
        }else{
            url = url.substring(url.indexOf("sight/")+6, url.indexOf(".html"));
        }
        List<String> linkList = page.getHtml().xpath("div[@class='pager_v1']").links()
                .regex("https://you.ctrip.com/sight/"+url+"/s0-p" + "\\d{1,2}" + ".html").all();

        //链接去重，一个个遍历去重，将结果保存到新的List对象，时间复杂度n的平方
        //是否可以regex出当前页后面的页，因为当前页前面的页面已经爬取了，这样也去掉了一部分重复的链接
//        Iterator<String> it = linkList.iterator();
//        LinkedList<String> list = new LinkedList<String>();
//        while (it.hasNext()){
//            String link = it.next();
//            if(!list.contains(link)){
//                list.add(link);
//            }
//        }
        //下一页这个链接重复了,到此已经去重了所有链接，
        // 不过缺点是还有一部分在这之前已经被添加到爬取队列，但是webmagic已经为我们去重
        List<String> list = linkList.subList(0, linkList.size() - 1);

//        System.out.println("加入链接：" + list);

        page.addTargetRequests(list);
    }

    public Site getSite() {
        return site;
    }
}
