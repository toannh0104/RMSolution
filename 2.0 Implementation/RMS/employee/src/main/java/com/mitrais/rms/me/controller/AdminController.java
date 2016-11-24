package com.mitrais.rms.me.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Toan_H on 11/24/2016.
 */


@Controller
@RequestMapping("/secure")
public class AdminController {

    @RequestMapping(method = RequestMethod.GET, name = "/")
    @ResponseBody
    public String index(){
        return "secu";
    }
}
