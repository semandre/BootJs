package ua.com.owu.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import ua.com.owu.entity.Product;
import ua.com.owu.service.ProductService;

import javax.servlet.http.HttpSession;


@Controller
public class MainController {

    @Autowired
    ProductService productService;
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/adm")
    public String admin() {
        return "/admin";
    }

    @GetMapping("/account")
    public String account() {
        return "/account";
    }

    @GetMapping("/cartBox")
    public String cart(){return "/cart";}

    @GetMapping("/productInfo/{id}")
    public String productInfo(@PathVariable("id") int id, Model model){
        model.addAttribute("product",productService.findById(id));
        return "productInfo";
    }

}
