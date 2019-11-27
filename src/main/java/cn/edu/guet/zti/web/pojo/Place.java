package cn.edu.guet.zti.web.pojo;

public class Place {
    private int placeId;
    private String placeName;
    private String placeUrlId;

    public int getPlaceId() {
        return placeId;
    }

    public void setPlaceId(int placeId) {
        this.placeId = placeId;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getPlaceUrlId() {
        return placeUrlId;
    }

    public void setPlaceUrlId(String placeUrlId) {
        this.placeUrlId = placeUrlId;
    }

    @Override
    public String toString() {
        return "Place{" +
                "placeId=" + placeId +
                ", placeName='" + placeName + '\'' +
                ", placeUrlId='" + placeUrlId + '\'' +
                '}';
    }
}
