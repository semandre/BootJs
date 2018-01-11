package ua.com.owu.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CategoryOfProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String category;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    List<Product> products = new ArrayList<>();
}
