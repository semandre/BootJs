package ua.com.owu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ua.com.owu.entity.Cart;
import ua.com.owu.entity.Product;
import ua.com.owu.service.CartService;
import ua.com.owu.service.ProductService;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class CartController {
    @Autowired
    private ProductService productService;
    @Autowired
    private CartService cartService;


    @GetMapping("/cart")
    public List<Cart> showCart(){
        return cartService.findAll();
    }

    @GetMapping("/findBySessionId")
    public List<Cart> findBySeesionId(HttpSession SessionId){return cartService.findAllBySessionId(SessionId.getId());}

    @GetMapping("/addCart/{id}")
    public void addCart(@PathVariable int id, HttpSession session) {
        Product product = productService.findById(id);
        List<Cart> carts = cartService.findAllBySessionId(session.getId());
        boolean b = true;
        for (Cart cart : carts) {
            if (cart.getName().equals(product.getName())) {
                int quantity = cart.getQuantity() + 1;
                cart.setQuantity(quantity);
                cartService.update(quantity,product.getName(),session.getId());
                b = false;
            }
        }
        if (b) {
            Cart cart = new Cart(1,product.getName(),product.getPrice(),session.getId());
            cartService.save(cart);
        }
    }
    @PostMapping("/addCarts")
    public void addListCart(@RequestBody List<Cart> carts){
       for(Cart cart:carts){
            cartService.save(cart);
       }
    }

//    @GetMapping("/remove/{id}")
//    public void remove(@PathVariable("id") int id, HttpSession session){
//        List<Cart> carts = cartService.findAllBySessionId(session.getId());
//        for (Cart cart : carts) {
//            if(cart.getId()==id){
//                cartService.remove(id);
//            }
//        }
//    }
//
//    @GetMapping("/increment/{id}")
//        public void increment(@PathVariable("id") int id,HttpSession session){
//        List<Cart> carts = cartService.findAllBySessionId(session.getId());
//        for (Cart cart : carts) {
//            if (cart.getId()==id){
//                int quantity = cart.getQuantity()+1;
//                cart.setQuantity(quantity);
//                cartService.updateQuantity(quantity,session.getId());
//            }
//        }
//    }
//
//    @GetMapping("decrement/{id}")
//    public void decrement(@PathVariable int id, HttpSession session){
//            List<Cart> carts = cartService.findAllBySessionId(session.getId());
//        for (Cart cart : carts) {
//            if(cart.getId()==id){
//                int quantity = cart.getQuantity()-1;
//                cart.setQuantity(quantity);
//                if(quantity==0) {
//                    cart.setQuantity(1);
//                }
//                cartService.updateQuantity(quantity,session.getId());
//            }
//        }
//    }

}
