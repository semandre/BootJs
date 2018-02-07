package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.com.owu.entity.Product;

public interface ProductDao extends JpaRepository<Product,Integer> {



}
