package com.pocketpay.transaction.services;

import com.pocketpay.transaction.dto.TransactionDto;
import com.pocketpay.transaction.entity.Transaction;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.repository.TransactionRepository;
import com.pocketpay.transaction.service.TransactionServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.sql.Time;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TransactionServiceImplTest {

    @Mock
    private TransactionRepository transactionRepository;

    @InjectMocks
    private TransactionServiceImpl transactionService;

    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        modelMapper = new ModelMapper();

    }

    @Test
    void testCreateTransaction() {
        // Prepare test data
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        transactionDto.setStatus("Pending");
        transactionDto.setSendingAmount("100");
        transactionDto.setRecievingAmount("95");
        transactionDto.setGuarantedRate("1.05");
        transactionDto.setFee("5");
        transactionDto.setTime(new Time(System.currentTimeMillis()));
        transactionDto.setReferenceNo("ABC123");
        transactionDto.setPurpose("Payment");

        Transaction transaction = modelMapper.map(transactionDto, Transaction.class);
        Transaction savedTransaction = modelMapper.map(transactionDto, Transaction.class);
        savedTransaction.setId(1L);

        // Mock the repository call
        when(transactionRepository.save(any(Transaction.class))).thenReturn(savedTransaction);

        // Call the service method
        TransactionDto savedTransactionDto = transactionService.createTransaction(transactionDto);

        // Verify the repository call and assert the result
        verify(transactionRepository, times(1)).save(any(Transaction.class));
        assertNotNull(savedTransactionDto);
        assertEquals(savedTransaction.getId(), savedTransactionDto.getId());
        assertEquals(savedTransaction.getStatus(), savedTransactionDto.getStatus());
        assertEquals(savedTransaction.getSendingAmount(), savedTransactionDto.getSendingAmount());
        assertEquals(savedTransaction.getRecievingAmount(), savedTransactionDto.getRecievingAmount());
        assertEquals(savedTransaction.getGuarantedRate(), savedTransactionDto.getGuarantedRate());
        assertEquals(savedTransaction.getFee(), savedTransactionDto.getFee());
        assertEquals(savedTransaction.getTime(), savedTransactionDto.getTime());
        assertEquals(savedTransaction.getReferenceNo(), savedTransactionDto.getReferenceNo());
        assertEquals(savedTransaction.getPurpose(), savedTransactionDto.getPurpose());
    }

    @Test
    void testGetTransactionById_ExistingTransaction() {
        // Prepare test data
        Long transactionId = 1L;
        Transaction transaction = new Transaction();
        transaction.setId(transactionId);
        transaction.setStatus("Completed");
        transaction.setSendingAmount("100");
        transaction.setRecievingAmount("95");
        transaction.setGuarantedRate("1.05");
        transaction.setFee("5");
        transaction.setTime(new Time(System.currentTimeMillis()));
        transaction.setReferenceNo("ABC123");
        transaction.setPurpose("Payment");

        // Mock the repository call
        when(transactionRepository.findById(transactionId)).thenReturn(Optional.of(transaction));

        // Call the service method
        TransactionDto transactionDto = transactionService.getTransactionById(transactionId);

        // Verify the repository call and assert the result
        verify(transactionRepository, times(1)).findById(transactionId);
        assertNotNull(transactionDto);
        assertEquals(transaction.getId(), transactionDto.getId());
        assertEquals(transaction.getStatus(), transactionDto.getStatus());
        assertEquals(transaction.getSendingAmount(), transactionDto.getSendingAmount());
        assertEquals(transaction.getRecievingAmount(), transactionDto.getRecievingAmount());
        assertEquals(transaction.getGuarantedRate(), transactionDto.getGuarantedRate());
        assertEquals(transaction.getFee(), transactionDto.getFee());
        assertEquals(transaction.getTime(), transactionDto.getTime());
        assertEquals(transaction.getReferenceNo(), transactionDto.getReferenceNo());
        assertEquals(transaction.getPurpose(), transactionDto.getPurpose());
    }

    @Test
    void testGetTransactionById_NonExistingTransaction() {
        // Prepare test data
        Long transactionId = 1L;

        // Mock the repository call
        when(transactionRepository.findById(transactionId)).thenReturn(Optional.empty());

        // Call the service method and verify the exception
        assertThrows(NotFoundException.class, () -> transactionService.getTransactionById(transactionId));

        // Verify the repository call
        verify(transactionRepository, times(1)).findById(transactionId);
    }

    @Test
    void testGetAllTransaction() {
        // Prepare test data
        Transaction transaction1 = new Transaction();
        transaction1.setId(1L);
        transaction1.setStatus("Completed");
        transaction1.setSendingAmount("100");
        transaction1.setRecievingAmount("95");
        transaction1.setGuarantedRate("1.05");
        transaction1.setFee("5");
        transaction1.setTime(new Time(System.currentTimeMillis()));
        transaction1.setReferenceNo("ABC123");
        transaction1.setPurpose("Payment");

        Transaction transaction2 = new Transaction();
        transaction2.setId(2L);
        transaction2.setStatus("Pending");
        transaction2.setSendingAmount("50");
        transaction2.setRecievingAmount("45");
        transaction2.setGuarantedRate("1.1");
        transaction2.setFee("5");
        transaction2.setTime(new Time(System.currentTimeMillis()));
        transaction2.setReferenceNo("DEF456");
        transaction2.setPurpose("Transfer");

        List<Transaction> transactions = Arrays.asList(transaction1, transaction2);

        // Mock the repository call
        when(transactionRepository.findAll()).thenReturn(transactions);

        // Call the service method
        List<TransactionDto> transactionDtos = transactionService.getAllTransaction();

        // Verify the repository call and assert the result
        verify(transactionRepository, times(1)).findAll();
        assertNotNull(transactionDtos);
        assertEquals(2, transactionDtos.size());

        TransactionDto transactionDto1 = transactionDtos.get(0);
        assertEquals(transaction1.getId(), transactionDto1.getId());
        assertEquals(transaction1.getStatus(), transactionDto1.getStatus());
        assertEquals(transaction1.getSendingAmount(), transactionDto1.getSendingAmount());
        assertEquals(transaction1.getRecievingAmount(), transactionDto1.getRecievingAmount());
        assertEquals(transaction1.getGuarantedRate(), transactionDto1.getGuarantedRate());
        assertEquals(transaction1.getFee(), transactionDto1.getFee());
        assertEquals(transaction1.getTime(), transactionDto1.getTime());
        assertEquals(transaction1.getReferenceNo(), transactionDto1.getReferenceNo());
        assertEquals(transaction1.getPurpose(), transactionDto1.getPurpose());

        TransactionDto transactionDto2 = transactionDtos.get(1);
        assertEquals(transaction2.getId(), transactionDto2.getId());
        assertEquals(transaction2.getStatus(), transactionDto2.getStatus());
        assertEquals(transaction2.getSendingAmount(), transactionDto2.getSendingAmount());
        assertEquals(transaction2.getRecievingAmount(), transactionDto2.getRecievingAmount());
        assertEquals(transaction2.getGuarantedRate(), transactionDto2.getGuarantedRate());
        assertEquals(transaction2.getFee(), transactionDto2.getFee());
        assertEquals(transaction2.getTime(), transactionDto2.getTime());
        assertEquals(transaction2.getReferenceNo(), transactionDto2.getReferenceNo());
        assertEquals(transaction2.getPurpose(), transactionDto2.getPurpose());
    }

    @Test
    void testApplyUpdates_StatusProperty_UpdatesApplied() {
        // Prepare test data
        Transaction transaction = new Transaction();
        transaction.setId(1L);
        transaction.setStatus("Pending");
        // Set other properties...

        Map<String, Object> updates = new HashMap<>();
        updates.put("status", "Completed");
        // Add other updates...

        // Call the applyUpdates method
        transactionService.applyUpdates(transaction, updates);

        // Assert that the status property is updated
        assertEquals("Completed", transaction.getStatus());
        // Assert other properties are not modified
        assertEquals(1L, transaction.getId().longValue());
        // Assert other properties...
    }


}