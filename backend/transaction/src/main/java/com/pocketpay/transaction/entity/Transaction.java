package com.pocketpay.transaction.entity;


import lombok.*;
import org.hibernate.type.descriptor.sql.VarcharTypeDescriptor;

import javax.persistence.*;
import java.sql.Time;
@Data
@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="status")
    private String status;

    @Column(name="sending_amount")
    private String sendingAmount;


    @Column(name="recieving_amount")
    private String recievingAmount;

    @Column(name="guaranted_rate")
    private String guarantedRate;

    @Column(name="fee")
    private String fee;

    @Column(name="time")
    private Time time;

    @Column(name="reference_no")
    private String referenceNo;

    @Column(name="purpose")
    private String purpose;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="bank_IFSC_code")
    private Bank bank;

    @ManyToOne
    @JoinColumn(name = "Recipient_id")
    private Recipient recipient;


}
