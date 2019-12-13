package cn.edu.guet.zti.web.pojo;

public class Good {
    private int goodId;
    private String placeUrlId;
    private String goodUrlId;
    private String goodName;
    private String introduction;
    private String likeNum;

    public int getGoodId() {
        return goodId;
    }

    public void setGoodId(int goodId) {
        this.goodId = goodId;
    }

    public String getPlaceUrlId() {
        return placeUrlId;
    }

    public void setPlaceUrlId(String placeUrlId) {
        this.placeUrlId = placeUrlId;
    }

    public String getGoodUrlId() {
        return goodUrlId;
    }

    public void setGoodUrlId(String goodUrlId) {
        this.goodUrlId = goodUrlId;
    }

    public String getGoodName() {
        return goodName;
    }

    public void setGoodName(String goodName) {
        this.goodName = goodName;
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

    @Override
    public String toString() {
        return "Good{" +
                "goodId=" + goodId +
                ", placeUrlId='" + placeUrlId + '\'' +
                ", goodUrlId='" + goodUrlId + '\'' +
                ", goodName='" + goodName + '\'' +
                ", introduction='" + introduction + '\'' +
                ", likeNum='" + likeNum + '\'' +
                '}';
    }
}
