package cn.edu.guet.zti.web.service;

import cn.edu.guet.zti.web.pojo.Place;

public interface PlaceService {
    public int addPlace(Place place);

    public Place findPlaceById(int placeId);

    public Place findPlaceByUrlId(String placeUrlId);
}
