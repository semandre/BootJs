package ua.com.owu.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/adm")
    public String admin() {
        return "admin";
    }

    @GetMapping("/account")
    public String account() {
        return "/account";
    }

    @GetMapping("/cartBox")
    public String cart(){return "/cart";}



}
