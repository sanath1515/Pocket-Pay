package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.BankDto;
import com.pocketpay.transaction.dto.OwnerDto;

import java.util.List;

public interface BankService {

    List<BankDto> getAllBank();

}
