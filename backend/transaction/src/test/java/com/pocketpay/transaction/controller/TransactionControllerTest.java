package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.RecipientDto;
import com.pocketpay.transaction.dto.TransactionDto;
import com.pocketpay.transaction.entity.Recipient;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.service.RecipientService;
import com.pocketpay.transaction.service.TransactionService;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.Time;
import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class TransactionControllerTest {

    @Mock
    private TransactionService transactionService;

    @Mock
    private RecipientService recipientService;

    @InjectMocks
    private TransactionController transactionController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTransaction_Success() {
        // Arrange
        List<TransactionDto> expectedTransactions = new ArrayList<>();
        expectedTransactions.add(createTransactionDto(1L, "COMPLETED", "100", "95", "1.05", "5", new Time(System.currentTimeMillis()), "REF123", "Payment"));

        when(transactionService.getAllTransaction()).thenReturn(expectedTransactions);

        // Act
        ResponseEntity<List<TransactionDto>> response = transactionController.getAllTransaction();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedTransactions, response.getBody());
        verify(transactionService, times(1)).getAllTransaction();
    }

    @Test
    void testGetTransactionById_ExistingTransaction_ReturnsTransactionDto() throws NotFoundException {
        // Arrange
        Long transactionId = 1L;
        TransactionDto expectedTransactionDto = createTransactionDto(transactionId, "COMPLETED", "100", "95", "1.05", "5", new Time(System.currentTimeMillis()), "REF123", "Payment");

        when(transactionService.getTransactionById(transactionId)).thenReturn(expectedTransactionDto);

        // Act
        ResponseEntity<TransactionDto> response = transactionController.getTransactionById(transactionId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedTransactionDto, response.getBody());
        verify(transactionService, times(1)).getTransactionById(transactionId);
    }

    @Test
    void testGetTransactionById_NonExistingTransaction_ReturnsNotFoundStatus() throws NotFoundException {

        Long transactionId = 1L;
        when(transactionService.getTransactionById(transactionId)).thenThrow(new NotFoundException("Transaction not found."));


        ResponseEntity<TransactionDto> response = transactionController.getTransactionById(transactionId);


        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
        verify(transactionService, times(1)).getTransactionById(transactionId);
    }


    @Test
    void testPatchTransaction_ExistingTransaction_ReturnsUpdatedTransactionDto() throws NotFoundException {
        Long transactionId = 1L;
        TransactionDto existingTransactionDto = createTransactionDto(transactionId, "PENDING", "100", "0", "1.05", "5", new Time(System.currentTimeMillis()), "REF123", "Payment");
        Map<String, Object> updates = Map.of("status", "COMPLETED");

        when(transactionService.getTransactionById(transactionId)).thenReturn(existingTransactionDto);

        ResponseEntity<TransactionDto> response = transactionController.patchTransaction(transactionId, updates);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(transactionService, times(1)).patchTransaction(transactionId, updates);
        verify(transactionService, times(1)).getTransactionById(transactionId);
    }

    @Test
    void testPatchTransaction_NonExistingTransaction_ReturnsNotFoundStatus() throws NotFoundException {
        // Arrange
        Long transactionId = 1L;
        Map<String, Object> updates = Map.of("status", "COMPLETED");

        when(transactionService.getTransactionById(transactionId)).thenThrow(new NotFoundException("Transaction not found."));

        // Act
        ResponseEntity<TransactionDto> response = transactionController.patchTransaction(transactionId, updates);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
        verify(transactionService, times(1)).patchTransaction(transactionId, updates);
        verify(transactionService, times(1)).getTransactionById(transactionId);
    }

    @Test
    public TransactionDto createTransactionDto(Long id, String status, String sendingAmount, String receivingAmount,
                                                String guaranteedRate, String fee, Time time, String referenceNo, String purpose) {
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(id);
        transactionDto.setStatus(status);
        transactionDto.setFee(fee);
        transactionDto.setTime(time);
        transactionDto.setPurpose(purpose);
        return transactionDto;
    }

    @Test
    private TransactionDto createTransactionDto_AssertionTest() {
        // Create a sample TransactionDto
        Long id = 1L;
        String status = "Success";
        String sendingAmount = "100.00";
        String receivingAmount = "95.00";
        String guaranteedRate = "1.05";
        String fee = "5.00";
        Time time = new Time(12, 30, 0);
        String referenceNo = "REF123";
        String purpose = "Payment";

        TransactionDto transactionDto = createTransactionDto(id, status, sendingAmount, receivingAmount,
                guaranteedRate, fee, time, referenceNo, purpose);

        // Perform assertions on the TransactionDto
        Assert.assertEquals(id, transactionDto.getId());
        Assert.assertEquals(status, transactionDto.getStatus());
        Assert.assertEquals(fee, transactionDto.getFee());
        Assert.assertEquals(time, transactionDto.getTime());
        Assert.assertEquals(purpose, transactionDto.getPurpose());

        // Return the TransactionDto for further testing or verification
        return transactionDto;
    }



    @Test
    void testConvertToRecipientDto() {
        // Prepare test data
        Recipient recipient = new Recipient();
        recipient.setId(1L);
        recipient.setFirstName("John");
        recipient.setLastName("Doe");
        recipient.setAccountType("Savings");
        recipient.setEmail("john.doe@example.com");

        RecipientDto recipientDto = transactionController.convertToRecipientDto(recipient);

        assertEquals(recipient.getId(), recipientDto.getId());
        assertEquals(recipient.getFirstName(), recipientDto.getFirstName());
        assertEquals(recipient.getLastName(), recipientDto.getLastName());
        assertEquals(recipient.getAccNo(), recipientDto.getAccNo());
        assertEquals(recipient.getAccountType(), recipientDto.getAccountType());
        assertEquals(recipient.getBank(), recipientDto.getBank());
        assertEquals(recipient.getEmail(), recipientDto.getEmail());
    }

    @Test
    void testConvertToRecipient() {
        // Prepare test data
        RecipientDto recipientDto = new RecipientDto();
        recipientDto.setId(1L);
        recipientDto.setFirstName("John");
        recipientDto.setLastName("Doe");
        recipientDto.setAccountType("Savings");
        recipientDto.setEmail("john.doe@example.com");

        Recipient recipient = transactionController.convertToRecipient(recipientDto);

        assertEquals(recipientDto.getId(), recipient.getId());
        assertEquals(recipientDto.getFirstName(), recipient.getFirstName());
        assertEquals(recipientDto.getLastName(), recipient.getLastName());
        assertEquals(recipientDto.getAccNo(), recipient.getAccNo());
        assertEquals(recipientDto.getAccountType(), recipient.getAccountType());
        assertEquals(recipientDto.getBank(), recipient.getBank());
        assertEquals(recipientDto.getEmail(), recipient.getEmail());
    }

    @Test
    void testGenerateNewId() {
        // Call the method
        Long newId = transactionController.generateNewId();

        assertEquals(0L, newId & Long.MIN_VALUE); // Check if the most significant bit is not set (positive number)
    }

    @Test
    void testGetUserTransactions() throws NotFoundException {
        // Prepare test data
        Long userId = 1L;
        TransactionDto transaction1 = new TransactionDto();
        transaction1.setId(1L);
        TransactionDto transaction2 = new TransactionDto();
        transaction2.setId(2L);
        List<TransactionDto> transactions = Arrays.asList(transaction1, transaction2);

        when(transactionService.getTransactionsByUserId(userId)).thenReturn(transactions);

        ResponseEntity<List<TransactionDto>> responseEntity = transactionController.getUserTransactions(userId);

        verify(transactionService, times(1)).getTransactionsByUserId(userId);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(transactions, responseEntity.getBody());
    }

    @Test
    void createTransaction_WithRecipientId_ReturnsCreatedTransaction() {
        // Arrange
        TransactionDto transactionDto = new TransactionDto();
        RecipientDto recipientDto = new RecipientDto();
        recipientDto.setId(123L); // Existing recipient ID
        Recipient recipient=new Recipient();
        recipient=transactionController.convertToRecipient(recipientDto);
        transactionDto.setRecipient(recipient);

        when(transactionService.createTransaction(transactionDto)).thenReturn(transactionDto);

        // Act
        ResponseEntity<TransactionDto> response = transactionController.createTransaction(transactionDto);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(transactionDto, response.getBody());
        verify(transactionService, times(1)).createTransaction(transactionDto);
    }

    @Test
    public void createTransaction_WithoutRecipientId_ReturnsCreatedTransaction() {
        // Arrange
        TransactionDto transactionDto = new TransactionDto();
        RecipientDto recipientDto = new RecipientDto();
        Recipient recipient=new Recipient();
        recipient=transactionController.convertToRecipient(recipientDto);
        transactionDto.setRecipient(recipient);

        when(recipientService.createRecipient(any(RecipientDto.class))).thenReturn(new RecipientDto());
        when(transactionService.createTransaction(transactionDto)).thenReturn(transactionDto);

        // Act
        ResponseEntity<TransactionDto> response = transactionController.createTransaction(transactionDto);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(transactionDto, response.getBody());
        verify(recipientService, times(1)).createRecipient(any(RecipientDto.class));
        verify(transactionService, times(1)).createTransaction(transactionDto);
    }

}