package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ua.com.owu.entity.City;

public interface CityDao extends JpaRepository<City,Integer> {

    @Query("from City c where c.cityName =:cityName")
    City findByCityNames(@Param("cityName") String cityName);
}
