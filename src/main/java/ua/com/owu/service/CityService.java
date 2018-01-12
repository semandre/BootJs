package ua.com.owu.service;

import ua.com.owu.entity.City;

import java.util.List;

public interface CityService {

    void save(City city);

    List<City> findAll();

    City findOne(String name);
}
