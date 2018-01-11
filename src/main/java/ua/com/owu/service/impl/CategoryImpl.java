package ua.com.owu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.com.owu.dao.CategoryDao;
import ua.com.owu.entity.Category;
import ua.com.owu.service.CategoryService;

import java.util.List;

@Service
public class CategoryImpl implements CategoryService {
    @Autowired
    CategoryDao categoryDao;


    @Override
    public void save(Category category) {
        categoryDao.save(category);
    }

    @Override
    public List<Category> findAll() {
        return categoryDao.findAll();
    }

    @Override
    public void remove(int id) {
        categoryDao.delete(id);

    }

    @Override
    public Category findOne(String name) {
        return categoryDao.findByCategoryname(name);
    }


}
