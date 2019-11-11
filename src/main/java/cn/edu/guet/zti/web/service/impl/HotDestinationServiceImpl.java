package cn.edu.guet.zti.web.service.impl;

import cn.edu.guet.zti.web.mapper.HotDestinationMapper;
import cn.edu.guet.zti.web.pojo.HotDestination;
import cn.edu.guet.zti.web.service.HotDestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Administrator
 */
@Service
public class HotDestinationServiceImpl implements HotDestinationService {

    @Autowired
    private HotDestinationMapper hotDestinationMapper;

    public void save(HotDestination hotDestination) throws Exception {
        hotDestinationMapper.insert(hotDestination);
    }
}
