package ua.com.owu.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

import java.util.Date;


@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int count;
    private double price;
    private String description;
    private Date addingdate;


    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    public Product(String name, int count, double price, String description, Date addingdate) {
        this.name = name;
        this.count = count;
        this.price = price;
        this.description = description;
        this.addingdate = addingdate;

    }
}
