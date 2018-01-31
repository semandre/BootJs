package ua.com.owu.service;


import ua.com.owu.entity.Cart;
import ua.com.owu.entity.Customer;

import java.util.List;

public interface CustomerService {
    void save(Customer customer);
    void update(String address, String firstName, String lastName,String email);
    void delete(int id);
    List<Customer> findAll();

}
