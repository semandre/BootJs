package ua.com.owu.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import ua.com.owu.entity.Cart;

import java.util.List;

public interface CartDao extends JpaRepository<Cart, Integer> {
    @Query("FROM Cart c where c.sessionId = :sessionId")
    List<Cart> findAllBySesssionid(@Param("sessionId") String sessionId);

    @Transactional
    @Modifying
    @Query("update Cart c set c.quantity = :quantity where c.name =:name and c.sessionId =:sessionId")
    void update(@Param("quantity") int quantity, @Param("name") String name, @Param("sessionId") String sessionId);

    @Query("update Cart c set c.quantity =:quantity where c.sessionId =:sessionId")
    void updateQuantity(@Param("quantity") int quantity,@Param("sessionId") String sessionId);
}
