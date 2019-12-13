package cn.edu.guet.zti.web.pojo;

public class Restaurant {
    private int restaurantId;
    private String rUrlId;
    private String rName;
    private String score;
    private String address;
    private String introduction;
    private String link;

    public int getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(int restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getrUrlId() {
        return rUrlId;
    }

    public void setrUrlId(String rUrlId) {
        this.rUrlId = rUrlId;
    }

    public String getrName() {
        return rName;
    }

    public void setrName(String rName) {
        this.rName = rName;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    @Override
    public String toString() {
        return "Restaurant{" +
                "restaurantId=" + restaurantId +
                ", rUrlId='" + rUrlId + '\'' +
                ", rName='" + rName + '\'' +
                ", score='" + score + '\'' +
                ", address='" + address + '\'' +
                ", introduction='" + introduction + '\'' +
                ", link='" + link + '\'' +
                '}';
    }
}
