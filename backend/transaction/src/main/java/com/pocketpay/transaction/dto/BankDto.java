package com.pocketpay.transaction.dto;
import lombok.*;

import java.util.Date;

@Setter
@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class BankDto {

    private String ifscCode;

    private String BankName;
}
