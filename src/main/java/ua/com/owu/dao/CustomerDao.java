package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ua.com.owu.entity.Customer;

import java.util.List;

public interface CustomerDao extends JpaRepository<Customer,Integer>{
    @Query(value = "from Customer c join fetch c.city")
    List<Customer> findAllWithCity();

}
