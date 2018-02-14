package ua.com.owu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.com.owu.dao.CustomerDao;

import ua.com.owu.entity.Customer;
import ua.com.owu.service.CustomerService;



import java.util.List;


@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerDao customerDao;

    @Override
    public void save(Customer customer) {
        customerDao.save(customer);

    }

    @Override
    public void update(String address,String firstName,String lastName,String email) {
        customerDao.update(address,firstName,lastName,email);
    }

    @Override
    public void delete(int id) {
        customerDao.delete(id);
    }

    @Override
    public List<Customer> findAll() {
        return customerDao.findAllWithCity();
    }

    @Override
    public Customer findOne(int id) {
        return customerDao.findOne(id);
    }
}
