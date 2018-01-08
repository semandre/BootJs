package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.com.owu.entity.Category;

public interface CategoryDao extends JpaRepository<Category,Integer> {
}
