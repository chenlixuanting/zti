package cn.edu.guet.zti.web.webmagic.pipeline;

import cn.edu.guet.web.pojo.HotDestination;
import cn.edu.guet.web.pojo.Picture;
import cn.edu.guet.web.service.HotDestinationService;
import cn.edu.guet.web.service.PictureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;

import java.util.List;

/**
 * 热门城市持久化管道
 *
 * @author Administrator
 */
@Component
@Slf4j
public class HotDestinationPipeline implements Pipeline {

    @Autowired
    private PictureService pictureService;

    @Autowired
    private HotDestinationService hotDestinationService;

//    @Autowired
//    private ServletContext servletContext;

    public void process(ResultItems resultItems, Task task) {

        List<String> hotDestinationPicUrls = resultItems.get("hotDestinationPicUrls");
        List<String> hotDestinationNames = resultItems.get("hotDestinationNames");

        if (hotDestinationPicUrls.size() != hotDestinationNames.size()) {
            log.error("热门景点爬取失败!");
        } else {
            for (int x = 0; x < hotDestinationPicUrls.size(); x++) {
                try {
                    HotDestination hotDestination = new HotDestination();
                    Picture picture = new Picture();
//                    String path = servletContext.getRealPath(Constant.HOT_DESTINATION_SAVE_PATH);
                    //上传图片
//                    String pictureAccessPath = UrlFileDownloadUtil.downloadPicture(hotDestinationPicUrls.get(x), path, Constant.HOT_DESTINATION_ACCESS_PATH);
//                    picture.setPath(pictureAccessPath);
//                    picture.setCreatetime(new Date());
//                    picture.setUpdatetime(new Date());
//                    hotDestination.setName(hotDestinationNames.get(x));
//                    hotDestination.setPic(pictureAccessPath);
//                    hotDestination.setCreatetime(new Date());
//                    hotDestination.setUpdatetime(new Date());
//                    pictureService.save(picture);
//                    hotDestinationService.save(hotDestination);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }

}
