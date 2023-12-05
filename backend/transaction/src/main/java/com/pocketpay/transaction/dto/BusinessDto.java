package com.pocketpay.transaction.dto;
import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BusinessDto {
    private Long id;
    private String businessName;
    private String registrationNumber;
    private String sizeOfBusiness;
    private String category;
    private String subCategory;
    private String businessAddress;
}
