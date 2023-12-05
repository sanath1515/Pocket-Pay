package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.RecipientDto;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.service.RecipientService;
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

class RecipientControllerTest {

    @Mock
    private RecipientService recipientService;

    @InjectMocks
    private RecipientController recipientController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllRecipient_Success() {
        // Arrange
        List<RecipientDto> expectedRecipients = new ArrayList<>();
        expectedRecipients.add(createRecipientDto(1L, "John", "Doe"));
        expectedRecipients.add(createRecipientDto(2L, "Jane", "Smith"));

        when(recipientService.getAllRecipient()).thenReturn(expectedRecipients);

        // Act
        ResponseEntity<List<RecipientDto>> response = recipientController.getAllRecipient();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedRecipients, response.getBody());
        verify(recipientService, times(1)).getAllRecipient();
    }

    @Test
    void testGetRecipientById_ExistingRecipient_ReturnsRecipientDto() throws NotFoundException {
        // Arrange
        Long recipientId = 1L;
        RecipientDto expectedRecipientDto = createRecipientDto(recipientId, "John", "Doe");

        when(recipientService.getRecipientById(recipientId)).thenReturn(expectedRecipientDto);

        // Act
        ResponseEntity<RecipientDto> response = recipientController.getRecipientById(recipientId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedRecipientDto, response.getBody());
        verify(recipientService, times(1)).getRecipientById(recipientId);
    }

    @Test
    void testGetRecipientById_NonExistingRecipient_ReturnsNotFoundStatus() throws NotFoundException {
        // Arrange
        Long recipientId = 1L;
        when(recipientService.getRecipientById(recipientId)).thenThrow(new NotFoundException("Recipient not found."));

        // Act
        ResponseEntity<RecipientDto> response = recipientController.getRecipientById(recipientId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
        verify(recipientService, times(1)).getRecipientById(recipientId);
    }

    @Test
    void testCreateRecipient_ValidRecipientDto_ReturnsCreatedStatus() {
        // Arrange
        RecipientDto recipientDto = createRecipientDto(null, "John", "Doe");
        RecipientDto savedRecipientDto = createRecipientDto(1L, "John", "Doe");

        when(recipientService.createRecipient(recipientDto)).thenReturn(savedRecipientDto);

        // Act
        ResponseEntity<RecipientDto> response = recipientController.createRecipient(recipientDto);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedRecipientDto, response.getBody());
        verify(recipientService, times(1)).createRecipient(recipientDto);
    }


    // Helper method to create a RecipientDto
    private RecipientDto createRecipientDto(Long id, String first_Name, String last_name) {
        RecipientDto recipientDto = new RecipientDto();
        recipientDto.setId(id);
        recipientDto.setFirstName(first_Name);
        recipientDto.setLastName(last_name);
//        // Set other properties as needed
        return recipientDto;
    }
}
