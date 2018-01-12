package ua.com.owu.service;


import ua.com.owu.entity.Product;

import java.util.List;

public interface ProductService {

    void save(Product product);

    List<Product> findAll();


    List<Product> sortByLowPrice();

    List<Product> sortByHighPrice();

    List<Product> sortByAddingDate();

    List<Product> findAllWithCategory();
}
