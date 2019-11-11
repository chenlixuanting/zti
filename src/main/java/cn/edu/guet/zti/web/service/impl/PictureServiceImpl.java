package cn.edu.guet.zti.web.service.impl;

import cn.edu.guet.zti.web.mapper.PictureMapper;
import cn.edu.guet.zti.web.pojo.Picture;
import cn.edu.guet.zti.web.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Administrator
 */
@Service
public class PictureServiceImpl implements PictureService {

    @Autowired
    private PictureMapper pictureMapper;

    public void save(Picture picture) throws Exception {
        pictureMapper.insert(picture);
    }
}
