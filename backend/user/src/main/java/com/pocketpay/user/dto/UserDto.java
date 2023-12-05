package com.pocketpay.user.dto;
import com.pocketpay.user.entity.Address;
import com.pocketpay.user.entity.Business;
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
    private AddressDto address;
    private BusinessDto business;

}


