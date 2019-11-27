package cn.edu.guet.zti.web.serviceImpl;

import cn.edu.guet.zti.web.dao.PlaceDao;
import cn.edu.guet.zti.web.pojo.Place;
import cn.edu.guet.zti.web.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class PlaceServiceImpl implements PlaceService {

    @Autowired
    private PlaceDao placeDao;

    public int addPlace(Place place) {
        return this.placeDao.addPlace(place);
    }

    public Place findPlaceById(int placeId) {
        return this.placeDao.findPlaceById(placeId);
    }

    public Place findPlaceByUrlId(String placeUrlId) {
        return this.placeDao.findPlaceByUrlId(placeUrlId);
    }
}
