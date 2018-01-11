package ua.com.owu.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import sun.util.calendar.BaseCalendar;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

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
//    @Temporal(javax.persistence.TemporalType.DATE)
    private  Date orderDate;

    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private City city = new City();


    public Customer(String firstName, String lastName, String phoneNumber, String address, String email, City city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
        this.city = city;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }
}
