package com.pocketpay.business.controller;

import com.pocketpay.business.dto.BusinessDto;
import com.pocketpay.business.dto.TradingAddressDto;
import com.pocketpay.business.exception.NotFoundException;
import com.pocketpay.business.exception.PostException;
import com.pocketpay.business.service.BusinessService;
import com.pocketpay.business.service.TradingAddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/business/trading_address")
@RequiredArgsConstructor
public class TradingAddressController {

    @Autowired
    private TradingAddressService tradingAddressService;
    @Autowired
    private BusinessService businessService;

    @GetMapping
    public ResponseEntity<List<TradingAddressDto>> getAllTradingAddress() {
        try {
            List<TradingAddressDto> tradingAddresses = tradingAddressService.getAllTradingAddress();
            return new ResponseEntity<>(tradingAddresses, HttpStatus.OK);
        } catch (PostException e) {
            // Handle PostException
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("")
    public ResponseEntity<TradingAddressDto> createTradingAddress(@RequestBody TradingAddressDto tradingAddressDto) {
        try {
            if (tradingAddressDto.getAddress() != null && tradingAddressDto.getBusiness().getId() != null) {
                TradingAddressDto savedTradingAddressDto = tradingAddressService.createTradingAddress(tradingAddressDto);
                return new ResponseEntity<>(savedTradingAddressDto, HttpStatus.CREATED);
            }
            else{
                tradingAddressDto.getBusiness().setId(generateNewBusinessId());
                BusinessDto createdBusiness = businessService.createBusiness(tradingAddressDto.getBusiness());
                tradingAddressDto.setBusiness(createdBusiness);
                TradingAddressDto savedTradingAddressDto = tradingAddressService.createTradingAddress(tradingAddressDto);
                return new ResponseEntity<>(savedTradingAddressDto, HttpStatus.CREATED);
            }
        } catch (PostException e) {
            // Handle PostException
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    private Long generateNewBusinessId() {
        UUID uuid = UUID.randomUUID();

        return uuid.getMostSignificantBits() & Long.MAX_VALUE;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TradingAddressDto> getTradingAddressById(@PathVariable Long id) {
        try {
            TradingAddressDto tradingAddressDto = tradingAddressService.getTradingAddressById(id);
            return new ResponseEntity<>(tradingAddressDto, HttpStatus.OK);
        } catch (Exception e) {
            throw new NotFoundException("TradingAddress not found with ID: " + id);
        }
    }
}
