package ua.com.owu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ua.com.owu.entity.Product;
import ua.com.owu.service.ProductService;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/show")
    public List<Product> index(){

        List<Product> all = productService.findAll();
        return all;
    }


    @PostMapping("/save")
    public List<Product> save(@RequestBody Product product){
        System.out.println(product);
    productService.save(product);
    return productService.findAll();
    }

}
