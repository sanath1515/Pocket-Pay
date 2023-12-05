package com.pocketpay.transaction.dto;


import com.pocketpay.transaction.entity.Recipient;
import lombok.*;

import java.util.Date;

@Setter
@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OwnerDto {

    private Long id;

    private String role;

    private String firstName;

    private String lastName;

    private String Dob;

    private String country;

    private Recipient Recipient;


}
