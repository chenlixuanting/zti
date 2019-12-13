package cn.edu.guet.zti.web.util;

import cn.edu.guet.zti.web.constant.Constant;

public class UrlUtils {

    public static String getUrl(String link) {
        return Constant.XIECHENG_ORIGIN_URL + link;
    }

    public static String getPlaceUrlIdByPlaceLink(String placeLink) {
        return placeLink.substring(7, placeLink.indexOf(".html"));
    }

    public static String getPlaceUrlIdBySightLink(String sightLink) {
        return sightLink.substring(sightLink.indexOf("/sight/") + 7, sightLink.lastIndexOf("/"));
    }

    public static String getPlaceUrlIdByFoodLink(String foodLink) {
        return foodLink.substring(10, foodLink.lastIndexOf("/"));
    }

    public static String getPlaceUrlIdByGoodLink(String goodLink) {
        return goodLink.substring(goodLink.indexOf("/goods/") + 7, goodLink.lastIndexOf("/"));
    }

    public static String getPlaceLinkPrefix(String placeUrlId) {
        return "/sight/" + placeUrlId + ".html";
    }

    public static String getFoodLinkPrefix(String placeUrlId) {
        return "/fooditem/" + placeUrlId + ".html";
    }

    public static String getGoodLinkPrefix(String placeUrlId) {
        return "/goods/" + placeUrlId + ".html";
    }

    public static String getPlaceLinkPrefixPlace(String placeUrlId) {
        return "/place/" + placeUrlId + ".html";
    }

    public static String getUrlId(String link) {
        return link.substring(link.lastIndexOf("/") + 1, link.lastIndexOf(".html"));
    }

    public static String getUrlIdWithSuffix(String sightLink) {
        return sightLink.substring(sightLink.lastIndexOf("/") + 1);
    }

    public static String getUrlBySightUrlIdAndPlaceUrlId(String sightUrlId, String placeUrlId) {
        return Constant.XIECHENG_ORIGIN_URL + "/sight/" + placeUrlId + "/" + sightUrlId + ".html";
    }

}
