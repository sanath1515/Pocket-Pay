package com.pocketpay.transaction.entity;


import lombok.*;

import javax.persistence.*;

@Setter
@Data
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="recipient_details")
public class Recipient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="acc_no")
    private Double accNo;

    @Column(name="account_type")
    private String accountType;

    @Column(name="email")
    private String email;

    @OneToOne
    @JoinColumn(name="bank_IFSC_code")
    private Bank bank;


}
