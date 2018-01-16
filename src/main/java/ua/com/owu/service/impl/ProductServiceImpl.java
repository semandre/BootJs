package ua.com.owu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.com.owu.dao.ProductDao;
import ua.com.owu.entity.Product;
import ua.com.owu.service.ProductService;


import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductDao productDao;


    @Override
    public void save(Product product) {
        productDao.save(product);
    }

    @Override
    public List<Product> findAll() {
        return productDao.findAll();
    }

    @Override
    public List<Product> sortByLowPrice() {
        return productDao.sortByLowPrice();
    }

    @Override
    public List<Product> sortByHighPrice() {
        return productDao.sortByHighPrice();
    }

    @Override
    public List<Product> sortByAddingDate() {
        return productDao.sortByAddingDate();
    }

    @Override
    public List<Product> findAllWithCategory() {
        return productDao.findAllWithCategory();
    }

    @Override
    public List<Product> findByName(String name) {
        return productDao.findByNames(name);
    }

    @Override
    public Product findById(int id) {
        return productDao.findOne(id);
    }
}
