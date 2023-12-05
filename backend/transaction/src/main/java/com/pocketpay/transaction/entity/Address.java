package com.pocketpay.transaction.entity;
import lombok.*;

import javax.persistence.*;

@Data
@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="country")
    private String country;
    @Column(name="house_no")
    private String houseNo;
    @Column(name="pincode")
    private String pincode;

    @Column(name="city")
    private String city;


}
