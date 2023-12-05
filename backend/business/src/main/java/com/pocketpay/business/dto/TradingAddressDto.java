package com.pocketpay.business.dto;


import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TradingAddressDto {
    private Long id;
    private String address;
    private BusinessDto business;
}
