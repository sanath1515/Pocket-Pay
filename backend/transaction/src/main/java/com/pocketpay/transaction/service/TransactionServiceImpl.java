package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.TransactionDto;
import com.pocketpay.transaction.dto.UserDto;
import com.pocketpay.transaction.entity.Transaction;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.repository.TransactionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    private ModelMapper modelMapper;

    public TransactionServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public TransactionDto createTransaction(TransactionDto transactionDto) {
        Transaction transaction = modelMapper.map(transactionDto, Transaction.class);
        Transaction savedTransaction = transactionRepository.save(transaction);
        return modelMapper.map(savedTransaction, TransactionDto.class);
    }

    @Override
    public TransactionDto getTransactionById(Long id) {
        Optional<Transaction> transaction = transactionRepository.findById(id);
        return transaction.map(t -> modelMapper.map(t, TransactionDto.class))
                .orElseThrow(() -> new NotFoundException("Transaction not found"));
    }

    @Override
    public List<TransactionDto> getAllTransaction() {
        List<Transaction> transactions = transactionRepository.findAll();
        return transactions.stream()
                .map(t -> modelMapper.map(t, TransactionDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<TransactionDto> getTransactionsByUserId(Long userId) {
        List<Transaction> transactions = transactionRepository.findByUserId(userId);
        return transactions.stream()
                .map(this::mapTransactionToDto)
                .collect(Collectors.toList());
    }

    private TransactionDto mapTransactionToDto(Transaction transaction) {
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(transaction.getId());
        transactionDto.setStatus(transaction.getStatus());
        transactionDto.setSendingAmount(transaction.getSendingAmount());
        transactionDto.setGuarantedRate(transaction.getGuarantedRate());
        transactionDto.setRecievingAmount(transaction.getRecievingAmount());
        transactionDto.setFee(transaction.getFee());
        transactionDto.setTime(transaction.getTime());
        transactionDto.setReferenceNo(transaction.getReferenceNo());
        transactionDto.setPurpose(transaction.getPurpose());
        transactionDto.setUser(transaction.getUser());
        transactionDto.setRecipient(transaction.getRecipient());
        transactionDto.setBank(transaction.getBank());

        return transactionDto;
    }

    @Override
    public void patchTransaction(Long id, Map<String, Object> updates) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Transaction not found"));

        applyUpdates(transaction, updates);

        transactionRepository.save(transaction);
    }

    public void applyUpdates(Transaction transaction, Map<String, Object> updates) {
        for (Map.Entry<String, Object> entry : updates.entrySet()) {
            String propertyName = entry.getKey();
            Object value = entry.getValue();

            if (propertyName.equals("status") && value instanceof String) {
                String status = (String) value;
                transaction.setStatus(status);
            }
        }
    }


}
