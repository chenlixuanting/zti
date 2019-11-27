package cn.edu.guet.zti.web.pojo;

import java.util.Date;

public class Comment {
    private int commentId;
    private String userName;
    private String content;
    private Date publishTime;
    private int score;
    private String sightUrlId;

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(Date publishTime) {
        this.publishTime = publishTime;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getSightUrlId() {
        return sightUrlId;
    }

    public void setSightUrlId(String sightUrlId) {
        this.sightUrlId = sightUrlId;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", userName='" + userName + '\'' +
                ", content='" + content + '\'' +
                ", publishTime=" + publishTime +
                ", score=" + score +
                ", sightUrlId='" + sightUrlId + '\'' +
                '}';
    }
}
