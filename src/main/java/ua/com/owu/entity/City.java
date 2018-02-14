package ua.com.owu.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "customers")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String cityName;
//    @JsonManagedReference
    @OneToMany( fetch = FetchType.LAZY, mappedBy = "city")
    @JsonIgnore
    private List<Customer> customers ;


    public City(String cityName) {
        this.cityName= cityName;
    }
}
