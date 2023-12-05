package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.RecipientDto;
import com.pocketpay.transaction.dto.TransactionDto;
import com.pocketpay.transaction.entity.Recipient;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.service.RecipientService;
import com.pocketpay.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/transactions")
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionService transactionService;
    private final RecipientService recipientService;

    @GetMapping
    public ResponseEntity<List<TransactionDto>> getAllTransaction() {
        List<TransactionDto> transactions = transactionService.getAllTransaction();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionDto> getTransactionById(@PathVariable Long id) {
        try {
            TransactionDto transactionDto = transactionService.getTransactionById(id);
            return ResponseEntity.ok(transactionDto);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    @PostMapping
    public ResponseEntity<TransactionDto> createTransaction(@RequestBody TransactionDto transactionDto) {
        try {
        if (transactionDto.getRecipient() != null && transactionDto.getRecipient().getId() != null ) {
            TransactionDto savedTransactionDto = transactionService.createTransaction(transactionDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedTransactionDto);
        }
        else {
            transactionDto.getRecipient().setId(generateNewId());
            RecipientDto recipient = convertToRecipientDto(transactionDto.getRecipient());
            RecipientDto createdRecipient = recipientService.createRecipient(recipient);


            transactionDto.setRecipient(convertToRecipient(createdRecipient));

            TransactionDto savedTransactionDto = transactionService.createTransaction(transactionDto);
            return new ResponseEntity<>(savedTransactionDto, HttpStatus.CREATED);
        }

        }
        catch (Exception e) {
            throw new NotFoundException("Failed to create Transaction");
        }

    }
    public Recipient convertToRecipient(RecipientDto recipientDto) {
        Recipient recipient = new Recipient();
        recipient.setId(recipientDto.getId());
        recipient.setFirstName(recipientDto.getFirstName());
        recipient.setLastName(recipientDto.getLastName());
        recipient.setAccNo(recipientDto.getAccNo());
        recipient.setAccountType(recipientDto.getAccountType());
        recipient.setBank(recipientDto.getBank());
        recipient.setEmail(recipientDto.getEmail());

        return recipient;
    }

    public RecipientDto convertToRecipientDto(Recipient recipient) {
        RecipientDto recipientDto = new RecipientDto();
        recipientDto.setId(recipient.getId());
        recipientDto.setFirstName(recipient.getFirstName());
        recipientDto.setLastName(recipient.getLastName());
        recipientDto.setAccNo(recipient.getAccNo());
        recipientDto.setAccountType(recipient.getAccountType());
        recipientDto.setBank(recipient.getBank());
        recipientDto.setEmail(recipient.getEmail());

        return recipientDto;
    }
    public Long generateNewId() {
        UUID uuid = UUID.randomUUID();

        return uuid.getMostSignificantBits() & Long.MAX_VALUE;
    }


    @PatchMapping("/{id}")
    public ResponseEntity<TransactionDto> patchTransaction(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        try {
            transactionService.patchTransaction(id, updates);
            TransactionDto updatedTransactionDto = transactionService.getTransactionById(id);
            return ResponseEntity.ok(updatedTransactionDto);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TransactionDto>> getUserTransactions(@PathVariable Long userId) {
        List<TransactionDto> transactions = transactionService.getTransactionsByUserId(userId);
        return ResponseEntity.ok(transactions);
    }
}
