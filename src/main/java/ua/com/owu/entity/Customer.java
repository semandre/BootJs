package ua.com.owu.entity;


import lombok.*;


import javax.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString

public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
    private String email;
    private  Date orderDate;

//    @JsonBackReference
    @ManyToOne( fetch = FetchType.LAZY)
    private City city;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "customer")
    private List<Cart> carts;


    public Customer(String firstName, String lastName, String phoneNumber, String address, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
    }

    public Customer(String firstName, String lastName, String phoneNumber, String address, String email, Date orderDate, List<Cart> carts) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
        this.orderDate = orderDate;
        this.carts = carts;
    }

    public List<Cart> getCarts() {
        return carts;
    }

    public void setCarts(List<Cart> carts) {
        this.carts = carts;
    }
}

