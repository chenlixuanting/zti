package cn.edu.guet.zti.web.util;

import cn.edu.guet.zti.web.constant.Constant;

import java.net.URL;

public class UrlUtils {
    public static String getPlaceUrlId(String placeLink) {
        return placeLink.substring(7, placeLink.indexOf(".html"));
    }

    public static String getPlaceLinkPrefixSight(String placeUrlId) {
        return "/sight/" + placeUrlId + ".html";
    }

    public static String getPlaceLinkPrefixPlace(String placeUrlId) {
        return "/place/" + placeUrlId + ".html";
    }

    public static String getSightUrlId(String sightLink) {
        return sightLink.substring(sightLink.lastIndexOf("/") + 1, sightLink.lastIndexOf(".html"));
    }

    public static String getSightUrlIdWithSuffix(String sightLink) {
        return sightLink.substring(sightLink.lastIndexOf("/") + 1);
    }

    public static String getUrl(String link) {
        return Constant.XIECHENG_ORIGIN_URL + link;
    }
}
