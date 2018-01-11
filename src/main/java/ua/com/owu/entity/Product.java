package ua.com.owu.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private double price;
    private int count;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    CategoryOfProduct categoryOfProduct = new CategoryOfProduct();



}
