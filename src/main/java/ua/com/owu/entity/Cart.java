package ua.com.owu.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Setter
@Getter
@ToString(exclude = "customer")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int quantity;
    private String name;
    private double price;
    private String sessionId;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL ,fetch = FetchType.LAZY)
    private Customer customer;

    public Cart(int quantity, String name, double price, String sessionId) {
        this.quantity = quantity;
        this.name = name;
        this.price = price;
        this.sessionId = sessionId;
    }

//    public Cart(int quantity, String name, double price, String sessionId, Customer customer) {
//        this.quantity = quantity;
//        this.name = name;
//        this.price = price;
//        this.sessionId = sessionId;
//        this.customer = customer;
//    }

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

    public Customer getCustomer() {
        return customer;
    }


}
