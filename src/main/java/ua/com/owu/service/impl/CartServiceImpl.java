package ua.com.owu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import ua.com.owu.dao.CartDao;
import ua.com.owu.entity.Cart;
import ua.com.owu.service.CartService;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartDao cartDao;

    @Override
    public List<Cart> findAllBySessionId(String id) {
        return cartDao.findAllBySesssionid(id);
    }

    @Override
    public void save(Cart cart) {
        cartDao.save(cart);
    }

    @Override
    public void remove(int id) {
        cartDao.delete(id);
    }

    @Override
    public void update(int quantity, String name, String sessionId) {
        cartDao.update(quantity,name,sessionId);
    }

    @Override
    public void updateQuantity(int quantity, String sessionId) {
        cartDao.updateQuantity(quantity,sessionId);
    }

    @Override
    public List<Cart> findAll() {
        return cartDao.findAll();
    }
}
