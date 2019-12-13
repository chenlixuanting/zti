package cn.edu.guet.zti.web.dao;

import cn.edu.guet.zti.web.pojo.Good;

public interface GoodDao {
    public int addGood(Good good);

    public Good findGoodByUrlId(String goodUrlId);
}
