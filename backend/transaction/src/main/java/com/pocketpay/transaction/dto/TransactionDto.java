package com.pocketpay.transaction.dto;


import com.pocketpay.transaction.entity.Bank;
import com.pocketpay.transaction.entity.Recipient;
import com.pocketpay.transaction.entity.User;
import lombok.*;

import java.sql.Time;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDto {

    private Long id;

    private String status;

    private String sendingAmount;


    private String guarantedRate;

    private String recievingAmount;

    private String fee;

    private Time time;

    private String referenceNo;

    private String purpose;

    private User user;

    private Bank bank;

    private Recipient recipient;


}
