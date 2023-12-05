package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.BankDto;
import com.pocketpay.transaction.entity.Bank;
import com.pocketpay.transaction.exception.TransactionException;
import com.pocketpay.transaction.repository.BankRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankServiceImpl implements BankService {

    @Autowired
    private BankRepository bankRepository;

    private ModelMapper modelMapper;

    public BankServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public List<BankDto> getAllBank() {
        try {
            List<Bank> banks = bankRepository.findAll();
            return banks.stream()
                    .map(data -> modelMapper.map(data, BankDto.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new TransactionException("Failed to retrieve banks: " + e.getMessage());
        }
    }
}
