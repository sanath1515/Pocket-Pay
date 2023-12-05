package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.BankDto;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.service.BankService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("transactions/banks")
@RequiredArgsConstructor
public class BankController {

    @Autowired
    private BankService bankService;

    @GetMapping
    public ResponseEntity<List<BankDto>> getAllBank() {
        try {
            List<BankDto> bankList = bankService.getAllBank();
            return new ResponseEntity<>(bankList, HttpStatus.OK);
        } catch (NotFoundException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
