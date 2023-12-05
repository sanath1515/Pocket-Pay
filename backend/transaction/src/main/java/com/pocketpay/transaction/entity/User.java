package com.pocketpay.transaction.entity;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="name")
    private String name;

    @Column(name="password")
    private String password;
    @Column(name="email")
    private String email;

    @Column(name="account_type")
    private String accountType;

    @Column(name="phno")
    private String phno;

    @Column(name="dob")
    private String dob;

    @ManyToOne
    @JoinColumn(name="business_id")
    private Business business;

    @ManyToOne
    @JoinColumn(name="address_id")
    private Address address;

}
