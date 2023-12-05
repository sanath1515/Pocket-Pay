package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.controller.BankController;
import com.pocketpay.transaction.dto.BankDto;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.service.BankService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class BankControllerTest {

    @Mock
    private BankService bankService;

    @InjectMocks
    private BankController bankController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllBank_Success() throws NotFoundException {
        // Arrange
        List<BankDto> expectedBankList = new ArrayList<>();
        expectedBankList.add(new BankDto("IFSC1", "Bank1"));
        expectedBankList.add(new BankDto("IFSC2", "Bank2"));

        when(bankService.getAllBank()).thenReturn(expectedBankList);

        // Act
        ResponseEntity<List<BankDto>> response = bankController.getAllBank();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedBankList, response.getBody());
    }

    @Test
    void testGetAllBank_NotFound() throws NotFoundException {
        // Arrange
        when(bankService.getAllBank()).thenThrow(new NotFoundException("Banks not found."));

        // Act
        ResponseEntity<List<BankDto>> response = bankController.getAllBank();

        // Assert
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals(null, response.getBody());
    }
    @Test
    void testGetAllBank_ReturnsListOfBanks() throws NotFoundException {
        // Arrange
        List<BankDto> expectedBankList = new ArrayList<>();
        expectedBankList.add(new BankDto("IFSC1", "Bank1"));
        expectedBankList.add(new BankDto("IFSC2", "Bank2"));

        when(bankService.getAllBank()).thenReturn(expectedBankList);

        // Act
        ResponseEntity<List<BankDto>> response = bankController.getAllBank();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedBankList, response.getBody());
        verify(bankService, times(1)).getAllBank();
    }

    @Test
    void testGetAllBank_ThrowsNotFoundException_ReturnsInternalServerError() throws NotFoundException {
        // Arrange
        when(bankService.getAllBank()).thenThrow(new NotFoundException("Banks not found."));

        // Act
        ResponseEntity<List<BankDto>> response = bankController.getAllBank();

        // Assert
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals(null, response.getBody());
        verify(bankService, times(1)).getAllBank();
    }
}

