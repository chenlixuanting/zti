package cn.edu.guet.zti.web.dao;

import cn.edu.guet.zti.web.pojo.Place;

import java.util.List;

public interface PlaceDao {
    public int addPlace(Place place);

    public Place findPlaceById(int placeId);

    public Place findPlaceByUrlId(String placeUrlId);

    public List<String> getAllPlaceUrlId();
}
