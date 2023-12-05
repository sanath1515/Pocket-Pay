package com.pocketpay.transaction.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Setter
@Data
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="owner")
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="role")
    private String role;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="date_of_birth")
    private String Dob;

    @Column(name="country")
    private String country;

    @ManyToOne
    @JoinColumn(name="Recipient_id")
    private Recipient Recipient;
}
