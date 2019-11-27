package cn.edu.guet.zti.web.dao;

import cn.edu.guet.zti.web.pojo.Place;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceDao {
    public int addPlace(Place place);

    public Place findPlaceById(int placeId);

    public Place findPlaceByUrlId(String placeUrlId);

    public List<String> getAllPlaceUrlId();
}
