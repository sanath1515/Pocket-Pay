package com.pocketpay.business.controller;

import com.pocketpay.business.dto.BusinessDto;
import com.pocketpay.business.exception.NotFoundException;
import com.pocketpay.business.exception.PostException;
import com.pocketpay.business.service.BusinessService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/business")
@RequiredArgsConstructor
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    @GetMapping
    public ResponseEntity<List<BusinessDto>> getAllBusiness() {
        try {
            List<BusinessDto> businesses = businessService.getAllBusiness();
            return new ResponseEntity<>(businesses, HttpStatus.OK);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("")
    public ResponseEntity<BusinessDto> createBusiness(@RequestBody BusinessDto businessDto) {
        try {
            BusinessDto savedBusinessDto = businessService.createBusiness(businessDto);
            return new ResponseEntity<>(savedBusinessDto, HttpStatus.CREATED);
        } catch (PostException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}
