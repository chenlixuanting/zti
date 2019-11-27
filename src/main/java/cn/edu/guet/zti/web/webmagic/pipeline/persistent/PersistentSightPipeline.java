package cn.edu.guet.zti.web.webmagic.pipeline.persistent;

import cn.edu.guet.zti.web.constant.Constant;
import cn.edu.guet.zti.web.dao.SightDao;
import cn.edu.guet.zti.web.pojo.Sight;
import cn.edu.guet.zti.web.util.UrlFileDownloadUtil;
import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;

import java.io.File;
import java.util.List;

/**
 *
 */
@Service
public class PersistentSightPipeline implements Pipeline {

    @Autowired
    private SightDao sightDao;

    public void process(ResultItems resultItems, Task task) {
        String sightUrlId = resultItems.get("sightUrlId").toString();
        //调用sightDao，根据setSightUrlId查询是否存在该景点
        if (sightDao.findSightBySightUrlId(sightUrlId) != null) {
            System.out.println("景点已存在：" + sightUrlId + "\n");
            return;
        }

        List<String> sightPictureLinkList = resultItems.get("sightPictureLink");
        String sightName = resultItems.get("sightName").toString();
        String sightAddress = resultItems.get("sightAddress").toString();
        String rank = resultItems.get("rank").toString();
        String phone = resultItems.get("phone").toString();
        String webSite = resultItems.get("website");
        String openTime = resultItems.get("openTime").toString();
        String sightScore = resultItems.get("sightScore").toString();
        String sightIntroduction = resultItems.get("sightIntroduction").toString();
        String placeUrlId = resultItems.get("placeUrlId").toString();

        //创建目录，下载图片到该目录下
        File picturedirectory = new File(Constant.PICTURE_REAL_PATH + placeUrlId + "\\" + sightUrlId);
        UrlFileDownloadUtil.downloadFiles(sightPictureLinkList, picturedirectory);

        Sight sight = new Sight();
        sight.setSightName(sightName);
        sight.setSightUrlId(sightUrlId);
        sight.setAddress(sightAddress);
        sight.setRank(rank);
        sight.setPhone(phone);
        sight.setWebsite(webSite);
        sight.setOpenTime(openTime);
        sight.setScore(sightScore);
        sight.setIntroduction(sightIntroduction);
        sight.setPlaceUrlId(placeUrlId);

        int isSuccess = sightDao.addSight(sight);
        if (isSuccess == 1) {
            System.out.println("已持久化：" + sight.toString() + "\n");
        }
    }
}
