package com.pocketpay.transaction.dto;
import lombok.*;

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


