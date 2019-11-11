package cn.edu.guet.zti.web.service.impl;

import cn.edu.guet.zti.web.mapper.FeatureSpotMapper;
import cn.edu.guet.zti.web.service.FeatureSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Administrator
 */
@Service
public class FeatureSpotServiceImpl implements FeatureSpotService {

    @Autowired
    private FeatureSpotMapper featureSpotMapper;

}
