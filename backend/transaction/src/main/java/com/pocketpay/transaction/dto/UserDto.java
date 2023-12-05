package com.pocketpay.transaction.dto;
import com.pocketpay.transaction.entity.Address;
import com.pocketpay.transaction.entity.Business;
import lombok.*;

import java.util.Date;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String password;
    private String email;
    private String accountType;
    private String phno;
    private String dob;
    private Address address;
    private Business business;

}


