package com.pocketpay.transaction.services;

import com.pocketpay.transaction.dto.BankDto;
import com.pocketpay.transaction.entity.Bank;
import com.pocketpay.transaction.exception.TransactionException;
import com.pocketpay.transaction.repository.BankRepository;
import com.pocketpay.transaction.service.BankServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class BankServiceImplTest {

    @Mock
    private BankRepository bankRepository;

    @InjectMocks
    private BankServiceImpl bankService;

    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        modelMapper = new ModelMapper();
    }

    @Test
    void testGetAllBank() {
        // Mock the repository response
        Bank bank1 = new Bank("IFSC1", "Bank1");
        Bank bank2 = new Bank("IFSC2", "Bank2");
        List<Bank> banks = Arrays.asList(bank1, bank2);
        when(bankRepository.findAll()).thenReturn(banks);

        // Create the expected DTOs
        BankDto bankDto1 = modelMapper.map(bank1, BankDto.class);
        BankDto bankDto2 = modelMapper.map(bank2, BankDto.class);
        List<BankDto> expectedBankDtos = Arrays.asList(bankDto1, bankDto2);

        // Call the service method
        List<BankDto> actualBankDtos = bankService.getAllBank();

        // Assert the results
        assertEquals(expectedBankDtos, actualBankDtos);
    }

    @Test
    void testGetAllBank_WithException() {
        // Mock the repository to throw an exception
        when(bankRepository.findAll()).thenThrow(new RuntimeException("Database connection error."));

        // Call the service method and assert that it throws an exception
        TransactionException exception = org.junit.jupiter.api.Assertions.assertThrows(TransactionException.class,
                () -> bankService.getAllBank());

        assertEquals("Failed to retrieve banks: Database connection error.", exception.getMessage());
    }
}