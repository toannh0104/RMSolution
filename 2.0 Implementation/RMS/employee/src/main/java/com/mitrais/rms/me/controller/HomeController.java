package com.mitrais.rms.me.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Toan_H on 11/24/2016.
 */


@Controller
@RequestMapping("/")
public class HomeController {

    @RequestMapping(method = RequestMethod.GET, name = "/")
    public String index(){
        return "index";
    }
}
