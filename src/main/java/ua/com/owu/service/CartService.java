package ua.com.owu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.com.owu.entity.Cart;

import java.util.List;

public interface CartService {
    List<Cart> findAllBySessionId(String id);

    void save(Cart cart);
    void remove(int id);
    void update(int quantity,String name,String sessionId);
    void updateQuantity(int quantity,String sessionId);
    List<Cart> findAll();
}
