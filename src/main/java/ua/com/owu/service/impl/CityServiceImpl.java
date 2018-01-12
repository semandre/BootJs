package ua.com.owu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.com.owu.dao.CityDao;
import ua.com.owu.entity.City;
import ua.com.owu.service.CityService;

import java.util.List;

@Service
//@Transactional
public class CityServiceImpl implements CityService{
    @Autowired
    private CityDao cityDao;

    @Override
    public void save(City city) {
        cityDao.save(city);
    }

    @Override
    public List<City> findAll() {
        return cityDao.findAll();
    }

    @Override
    public City findOne(String name) {
        return cityDao.findByCityNames(name);
    }
}
