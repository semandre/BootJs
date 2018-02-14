package ua.com.owu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import ua.com.owu.entity.Category;

import ua.com.owu.entity.Product;
import ua.com.owu.service.CategoryService;
import ua.com.owu.service.ProductService;

import java.util.Date;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;
    @Autowired
    CategoryService categoryService;

    @GetMapping("/show")
    public List<Product> index() {

        List<Product> all = productService.findAll();
        System.out.println("--------------");
        System.out.println(all);
        System.out.println("--------------");
        return all;
    }


    @PostMapping("/save")
    public List<Product> save(@RequestBody Product product) {
        Date date = new Date();
        product.setAddingdate(date);
        categoryService.findOne(product.getCategory().getCategoryname());
        Category category = categoryService.findOne(product.getCategory().getCategoryname());
        product.setCategory(category);
        productService.save(product);
        return productService.findAll();
    }

    @PostMapping("/allCategory")
    public List<Category> allCategory() {
        return categoryService.findAll();
    }
    
    @GetMapping("/SortByAddingDate")
    public List<Product> SortByAddingDate() {
        return productService.sortByAddingDate();
    }
}
