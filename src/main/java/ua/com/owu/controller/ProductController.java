package ua.com.owu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ua.com.owu.entity.Product;
import ua.com.owu.service.ProductService;

import java.util.Date;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/show")
    public List<Product> index() {

        List<Product> all = productService.findAll();
        return all;
    }


    @PostMapping("/save")
    public List<Product> save(@RequestBody Product product) {
        System.out.println(product);
        Date date = new Date();
        product.setAddingDate(date);
        productService.save(product);
        return productService.findAll();
    }

    @GetMapping("/SortByLowPrice")
    public List<Product> SortByLowPrice(){
        return productService.sortByLowPrice();
    }
    @GetMapping("/SortByHighPrice")
    public List<Product> SortByHighPrice(){
        return productService.sortByHighPrice();
    }
    @GetMapping("/SortByAddingDate")
    public List<Product> SortByAddingDate(){
        return productService.sortByAddingDate();
    }
}
