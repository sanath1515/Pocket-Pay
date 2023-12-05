package com.pocketpay.business.dto;


import lombok.*;


@Setter
@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BusinessDto {
    private Long id;
    private String businessName;
    private String registrationNumber;
    private String businessAddress;
    private String sizeOfBusiness;
    private String category;
    private String subCategory;



}
