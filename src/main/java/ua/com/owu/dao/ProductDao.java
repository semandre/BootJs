package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ua.com.owu.entity.Product;

import java.util.List;

public interface ProductDao extends JpaRepository<Product,Integer> {
    @Query( value = "SELECT* FROM Product  ORDER BY price  ASC ",nativeQuery = true)
    List<Product> sortByLowPrice();
    @Query(value = "SELECT* FROM Product ORDER BY price desc ",nativeQuery = true)
    List<Product> sortByHighPrice();
    @Query(value = "SELECT *FROM Product order by addingDate desc ",nativeQuery = true)
    List<Product> sortByAddingDate();
}
