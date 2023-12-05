package com.pocketpay.transaction.dto;
import com.pocketpay.transaction.entity.Bank;
import lombok.*;

import javax.persistence.Entity;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RecipientDto {
    private Long id;

    private String firstName;

    private String lastName;

    private Double accNo;

    private String accountType;

    private String email;

    private Bank bank;

}
