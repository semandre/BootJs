package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import ua.com.owu.entity.Cart;
import ua.com.owu.entity.Customer;

import java.util.List;

public interface CustomerDao extends JpaRepository<Customer,Integer>{
    @Query(value = "from Customer c join fetch c.city")
    List<Customer> findAllWithCity();

    @Transactional
    @Modifying
    @Query("update Customer c set c.address = :address where c.firstName =:firstName and c.lastName =:lastName and c.email =:email")
    void update(@Param("address") String address, @Param("firstName") String firstName, @Param("lastName") String lastName,@Param("email") String email);

}
