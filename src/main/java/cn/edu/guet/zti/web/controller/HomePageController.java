package cn.edu.guet.zti.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Administrator
 */
@Controller
public class HomePageController {

    /**
     * 广西首页
     *
     * @return
     */
    @RequestMapping(value = {"", "/", "/index", "/index.html", "/index.htm", "/index.jsp"}, method = RequestMethod.GET)
    public String homePage() {
        return "user/province/city/index";
    }

}
