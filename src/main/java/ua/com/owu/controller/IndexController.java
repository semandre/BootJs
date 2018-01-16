package ua.com.owu.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ua.com.owu.entity.Product;
import ua.com.owu.service.ProductService;

import java.util.List;

@RestController
public class IndexController {
    @Autowired
    private ProductService productService;

    @GetMapping("/showProduct")
    public List<Product> showProduct(){
        return productService.findAll();
    }


    @GetMapping("/SortByLowPrice")
    public List<Product> SortByLowPrice() {
        return productService.sortByLowPrice();
    }

    @GetMapping("/SortByHighPrice")
    public List<Product> SortByHighPrice() {
        return productService.sortByHighPrice();
    }

    @PostMapping("/findProduct")
    public List<Product> find(@RequestBody Product product){
        System.out.println(product.getName()+"------------------------------------");

        return productService.findByName(product.getName());
    }



}
