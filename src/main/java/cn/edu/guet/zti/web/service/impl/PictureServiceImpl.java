package cn.edu.guet.zti.web.service.impl;

import cn.edu.guet.web.dao.PictureMapper;
import cn.edu.guet.web.pojo.Picture;
import cn.edu.guet.web.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Administrator
 */
@Service
public class PictureServiceImpl implements PictureService {

    @Autowired
    private PictureMapper pictureMapper;

    @Override
    public void save(Picture picture) throws Exception {
        pictureMapper.insert(picture);
    }
}
