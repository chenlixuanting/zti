package cn.edu.guet.zti.web.pojo;

import lombok.Data;

import java.io.Serializable;

/**
 * 通用返回结果实体类
 *
 * @author Administrator
 */
@Data
public class Result implements Serializable{

    private static final long serialVersionUID = -1501676714509940858L;

    /**
     * 是否成功
     */
    private boolean flag;
    /**
     * 返回码
     */
    private Integer code;
    /**
     * 返回结果信息
     */
    private String message;
    /**
     * 返回数据
     */
    private Object data;

    public Result(Object data) {
    }

    public Result(boolean flag, Integer code, String message, Object data) {
        this.flag = flag;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public Result(Integer code) {
        this.code = code;
    }

    public Result() {
    }

}
