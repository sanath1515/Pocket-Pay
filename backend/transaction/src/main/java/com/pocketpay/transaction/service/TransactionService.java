package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.TransactionDto;

import java.util.List;
import java.util.Map;

public interface TransactionService {
    TransactionDto createTransaction(TransactionDto transactionDto);
    TransactionDto getTransactionById(Long id);
    void patchTransaction(Long id, Map<String, Object> updates);
    List<TransactionDto> getAllTransaction();
    List<TransactionDto> getTransactionsByUserId(Long id);
}