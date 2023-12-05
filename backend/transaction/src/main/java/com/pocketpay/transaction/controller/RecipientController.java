package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.RecipientDto;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.service.RecipientService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("transactions/recipients")
@RequiredArgsConstructor
public class RecipientController {

    @Autowired
    private RecipientService recipientService;

    @GetMapping
    public ResponseEntity<List<RecipientDto>> getAllRecipient() {
        List<RecipientDto> recipients = recipientService.getAllRecipient();
        return new ResponseEntity<>(recipients, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipientDto> getRecipientById(@PathVariable Long id) {
        try {
            RecipientDto recipientDto = recipientService.getRecipientById(id);
            return new ResponseEntity<>(recipientDto, HttpStatus.OK);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("")
    public ResponseEntity<RecipientDto> createRecipient(@RequestBody RecipientDto recipientDto) {
        RecipientDto savedRecipientDto = recipientService.createRecipient(recipientDto);
        return new ResponseEntity<>(savedRecipientDto, HttpStatus.CREATED);
    }
}
