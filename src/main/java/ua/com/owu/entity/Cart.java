package ua.com.owu.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Setter
@ToString
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
//    private Product product = new Product();
    private int quantity;
    private String name;
    private double price;
    private String sessionId;

    public Cart(int quantity, String name, double price, String sessionId) {
        this.quantity = quantity;
        this.name = name;
        this.price = price;
        this.sessionId = sessionId;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getSessionId() {
        return sessionId;
    }

    public int getId() {
        return id;
    }
}
