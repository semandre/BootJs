package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.com.owu.entity.City;

public interface CityDao extends JpaRepository<City,Integer> {
}
