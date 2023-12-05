package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.OwnerDto;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.exception.PostException;
import com.pocketpay.transaction.service.OwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("transactions/owners")
@RequiredArgsConstructor
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @GetMapping
    public ResponseEntity<List<OwnerDto>> getAllOwner() {
        List<OwnerDto> owners = ownerService.getAllOwner();
        return new ResponseEntity<>(owners, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OwnerDto> getOwnerById(@PathVariable Long id) {
        try {
            OwnerDto ownerDto = ownerService.getOwnerById(id);
            return new ResponseEntity<>(ownerDto, HttpStatus.OK);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("")
    public ResponseEntity<OwnerDto> createOwner(@RequestBody OwnerDto ownerDto) {
        try {
            OwnerDto savedOwnerDto = ownerService.createOwner(ownerDto);
            return new ResponseEntity<>(savedOwnerDto, HttpStatus.CREATED);
        } catch (PostException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
