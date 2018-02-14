package ua.com.owu.service;

import ua.com.owu.entity.Category;

import java.util.List;

public interface CategoryService {
    void save(Category category);

    List<Category> findAll();

    void remove(int id);

    Category findOne(String name);

}
