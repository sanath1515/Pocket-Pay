package com.pocketpay.user.controllers;

import com.pocketpay.user.dto.AddressDto;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users/address")
@RequiredArgsConstructor
public class AddressController {
    private final AddressService addressService;

    @GetMapping
    public ResponseEntity<List<AddressDto>> getAllAddressDetails() {
        try {
            List<AddressDto> addresses = addressService.getAllAddressDetails();
            return new ResponseEntity<>(addresses, HttpStatus.OK);
        } catch (Exception e) {
            throw new NotFoundException("Failed to retrieve address details");
        }
    }

}
