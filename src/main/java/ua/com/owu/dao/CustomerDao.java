package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.com.owu.entity.Customer;

public interface CustomerDao extends JpaRepository<Customer,Integer>{

}
