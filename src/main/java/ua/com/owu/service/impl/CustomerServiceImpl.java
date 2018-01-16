package ua.com.owu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.com.owu.dao.CustomerDao;
import ua.com.owu.entity.Customer;
import ua.com.owu.service.CustomerService;


import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerDao customerDao;

    @Override
    public void save(Customer customer) {
        Pattern pattern = Pattern.compile("^\\+?(380)(\\d{9})");
        Matcher matcher = pattern.matcher(customer.getPhoneNumber());

        System.out.println(matcher.find());
        customerDao.save(customer);
    }

    @Override
    public List<Customer> findAll() {
        return customerDao.findAllWithCity();
    }
}
