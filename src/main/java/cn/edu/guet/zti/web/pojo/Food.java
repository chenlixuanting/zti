package cn.edu.guet.zti.web.pojo;

public class Food {
    private int foodId;
    private String foodUrlId;
    private String picUrl;
    private String foodName;
    private String introduction;
    private String likeNum;
    private String placeUrlId;

    public int getFoodId() {
        return foodId;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    public String getFoodUrlId() {
        return foodUrlId;
    }

    public void setFoodUrlId(String foodUrlId) {
        this.foodUrlId = foodUrlId;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getLikeNum() {
        return likeNum;
    }

    public void setLikeNum(String likeNum) {
        this.likeNum = likeNum;
    }

    public String getPlaceUrlId() {
        return placeUrlId;
    }

    public void setPlaceUrlId(String placeUrlId) {
        this.placeUrlId = placeUrlId;
    }

    @Override
    public String toString() {
        return "Food{" +
                "foodId=" + foodId +
                ", foodUrlId='" + foodUrlId + '\'' +
                ", picUrl='" + picUrl + '\'' +
                ", foodName='" + foodName + '\'' +
                ", introduction='" + introduction + '\'' +
                ", likeNum='" + likeNum + '\'' +
                ", placeUrlId='" + placeUrlId + '\'' +
                '}';
    }
}
