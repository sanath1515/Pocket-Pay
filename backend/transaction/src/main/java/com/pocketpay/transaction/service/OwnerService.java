package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.OwnerDto;
import com.pocketpay.transaction.dto.TransactionDto;

import java.util.List;

public interface OwnerService {

    OwnerDto createOwner(OwnerDto ownerDto);

    OwnerDto getOwnerById(Long id);


    List<OwnerDto> getAllOwner();


}
