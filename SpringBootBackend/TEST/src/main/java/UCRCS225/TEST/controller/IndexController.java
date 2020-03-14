package UCRCS225.TEST.controller;

import org.apache.tomcat.jni.File;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
    @RequestMapping("/")
    public String index() {
        String path = "static/file/LandAlloc_20191120.kml";
        File f = new File();

        return "index";
    }

    @RequestMapping("/index.html")
    public String home() {
        return "index";
    }

    @RequestMapping("/order.html")
    public String order() {
        return "order";
    }

    @RequestMapping("/view.html")
    public String view() {
        return "view";
    }

    @RequestMapping("/document.html")
    public String document() {
        return "document";
    }

    @RequestMapping("/login.html")
    public String login() {
        return "login";
    }

}
