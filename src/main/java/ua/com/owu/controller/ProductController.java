package ua.com.owu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ua.com.owu.entity.Category;
import ua.com.owu.entity.Product;
import ua.com.owu.service.CategoryService;
import ua.com.owu.service.ProductService;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
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
       return all;
    }


    @PostMapping("/save")
    public List<Product> save(@RequestBody Product product) {
        Date date = new Date();
        product.setAddingdate(date);
        System.out.println("------------------------");
        System.out.println(product.getCategory().getCategoryname());
        System.out.println(product.getCategory().getId());
        System.out.println("------------------------");
        Category category = categoryService.findOne(product.getCategory().getCategoryname());
        product.setCategory(category);
        productService.save(product);
        return productService.findAll();
    }
    @PostMapping("/deleteProduct")
    public void deleteProduct(@RequestBody int id){
        productService.deleteById(id);
    }

    @GetMapping("/allCategory")
    public List<Category> allCategory() {
        return categoryService.findAll();
    }
    @GetMapping("/findByCategory/{id}")
    public List<Product> allProductByCategory(@PathVariable int id){
        List<Product> listProduct = new ArrayList<>();
        List<Product> all = productService.findAll();

        for(Product product:all){
            if(id == product.getCategory().getId()){
                listProduct.add(product);
            }
        }
       return listProduct;
    }
    
    @GetMapping("/SortByAddingDate")
    public List<Product> SortByAddingDate() {
        return productService.sortByAddingDate();
    }

}
