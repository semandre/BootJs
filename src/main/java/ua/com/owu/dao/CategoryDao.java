package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ua.com.owu.entity.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {

    @Query("from Category c where c.categoryname=:categoryname")
    Category findByCategoryname(@Param("categoryname") String categoryname);
}
