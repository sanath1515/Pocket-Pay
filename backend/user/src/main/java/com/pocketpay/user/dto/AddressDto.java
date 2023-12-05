package com.pocketpay.user.dto;
import lombok.*;
import javax.persistence.Entity;
import java.util.Date;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
    private Long id;
    private String country;
    private String houseNo;
    private String pincode;
    private String city;


}


