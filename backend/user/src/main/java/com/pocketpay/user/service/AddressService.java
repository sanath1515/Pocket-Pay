package com.pocketpay.user.service;

import com.pocketpay.user.dto.AddressDto;
import com.pocketpay.user.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddressService {
    List<AddressDto> getAllAddressDetails();
    AddressDto createAddress(AddressDto addressDto);
}
