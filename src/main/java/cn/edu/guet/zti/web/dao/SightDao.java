package cn.edu.guet.zti.web.dao;

import cn.edu.guet.zti.web.pojo.Sight;

import java.util.List;

public interface SightDao {
    public int addSight(Sight sight);

    public Sight findSightBySightUrlId(String sightUrlId);

    public List<String> getAllPlaceUrlId();
}
