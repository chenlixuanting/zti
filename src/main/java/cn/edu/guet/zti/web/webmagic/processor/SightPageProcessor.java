package cn.edu.guet.zti.web.webmagic.processor;

import cn.edu.guet.zti.web.webmagic.ajax.commentFormData;
import cn.edu.guet.zti.web.webmagic.ajax.commentRequestPayload;
import org.jsoup.Connection;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.selector.Selectable;

import java.io.IOException;
import java.util.List;

/**
 * 景点html，有两种不同的样式，而且有一种样式的开放时间又分为两种不同的样式（根据文字长短分），
 * 而且这种样式的html用户评论模块信息是异步请求加载的，而另一种样式的html没有异步请求
 */
public class SightPageProcessor implements PageProcessor {

    private Site site = Site.me().setRetryTimes(3).setSleepTime(1000);

    public void process(Page page) {
        //图片链接
        List<String> picList = page.getHtml()
                .xpath("//div[@class='introduce-content']/p/img/@src").all();
        //图片为空与不为空，说明对应着不同的html样式，需要重新定位目标标签
        if (picList.isEmpty()) {
            //图片链接为空
            picList = page.getHtml()
                    .xpath("//div[@class='carousel-inner']/div/a/img/@src").all();
            page.putField("sightPictureLink", picList);

            //景点名称
            page.putField("sightName", page.getHtml()
                    .xpath("div[@class='dest_toptitle detail_tt']/div[@class='cf']/div[@class='f_left']/h1/a/text()"));
            //景点地址
            page.putField("sightAddress", page.getHtml()
                    .xpath("div[@class='s_sight_infor']/p/text()"));
            //开发时间
            page.putField("openTime", page.getHtml()
                    .xpath("div[@class='s_sight_infor']/dl/dd/text()"));
            //景点评分
            page.putField("sightScore", page.getHtml()
                    .xpath("ul[@class='detailtop_r_info']/li/span[@class='score']/b/text()"));

            //景点介绍(纯为文本)
            page.putField("sightInstruction", page.getHtml()
                    .xpath("//div[@class='toggle_s']/div/text()"));

            //用户评论模块
            Selectable commentSelc = page.getHtml().xpath("//div[@id='sightcommentbox']");

            //用户昵称
            page.putField("userName", commentSelc
                    .xpath("//div[@class='comment_single']/div[@class='userimg']/span/a/text()").all());
            //评论内容
            page.putField("commentContent", commentSelc
                    .xpath("//div/ul/li[@itemprop='description']/span/text()").all());
            //评论时间
            page.putField("commentTime", commentSelc
                    .xpath("//div/ul/li[@class='from_link']/span[@class='f_left']/span/em/text()").all());
            //用户评分（根据span的style的百分比式宽度值推断出评分）
            List<String> scoreList = commentSelc
                    .xpath("//div/ul/li[@class='title cf']/span[@class='f_left']/span/span/@style").all();
            //style值转换成1~5数值
            for (int i = 0; i < scoreList.size(); i++) {
                String score = scoreList.get(i).substring(6, 8);
                if ("10".equals(score)) {
                    score = "5";
                } else if ("80".equals(score)) {
                    score = "4";
                } else if ("60".equals(score)) {
                    score = "3";
                } else if ("40".equals(score)) {
                    score = "2";
                } else if ("20".equals(score)) {
                    score = "1";
                } else {
                    score = "0";
                }
                scoreList.set(i, score);
            }
            page.putField("userScore", scoreList);

            //分页评论（同样是异步请求，这里的方式是Form Data方式）
            //这里我们只需分析出POST请求的url以及参数，并且需要定位出总页数，以确定可以的评论数量
            //后面通过验证发现必须的参数只有两个pagenow页码和poiID评论分页id值，后者需要再定位出来
            //poiId值除了出现在js中，还有从js代码分派出来的多个位置

            String poiId = page.getHtml()
                    .xpath("//div[@id='vacationgrouptour']/@data-arrivecityid").toString();
            int totalPage = Integer.parseInt(page.getHtml()
                    .xpath("//div[@class='ttd_pager cf']/div/span/b/text()").toString());
            try {
                for (int pagenow = 1; pagenow <= totalPage; pagenow++) {
                    Connection.Response comment = new commentFormData().
                            getComment(pagenow, poiId);
//                    System.out.println(comment);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }


        } else {
            //图片链接不为空
            page.putField("sightPictureLink", picList);
            //景点名称
            page.putField("sightName", page.getHtml().xpath("div[@class='brief-right']/h2/text()"));
            //景点地址
            page.putField("sightAddress", page.getHtml()
                    .xpath("div[@class='brief-right']/ul/li[@data-reactid='43']/span/text()"));

            //开发时间
            String openTime = page.getHtml()
                    .xpath("div[@class='brief-right']/ul/li[@class='time timeLong']/span/text()").toString();
            if (openTime == null) {
                openTime = page.getHtml()
                        .xpath("div[@class='brief-right']/ul/li[@class='time']/span/text()").toString();
            }
            page.putField("openTime", openTime);
            //景点评分
            page.putField("sightScore", page.getHtml()
                    .xpath("div[@class='brief-right']/div[@class='score']/span/i/text()"));
            //景点介绍(此处为文本，图片来源于上面爬取的图片)
            page.putField("sightInstruction", page.getHtml()
                    .xpath("//div[@class='introduce-content']/p/text()").all());

            //用户评论部分为Request Payload方式的异步请求，另行处理
            //实际上一次请求返回了前5页数据，5*10条评论
            //这里去前20页数据

            String url = page.getUrl().toString();
            String sightUrlId = url.substring(url.lastIndexOf("/"));
            int pageSize = 10;
            int responseNum = 50;
            int totalPage = Integer.parseInt(page.getHtml()
                    .xpath("//div[@class='content-wrapper clearfix']/ul[@class='pkg_page']/" +
                            "a[@class='btn-last-page  ']/text()").toString());
            int requestCount = totalPage / responseNum;
            try {
                for (int pagenum = 1; pagenum <= requestCount || pagenum < totalPage; pagenum += responseNum) {
                    String commentJson = new commentRequestPayload()
                            .getComment(pagenum, pageSize,
                                    sightUrlId).body();
                    System.out.println(commentJson);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }


    }

    public Site getSite() {
        return site;
    }
}
