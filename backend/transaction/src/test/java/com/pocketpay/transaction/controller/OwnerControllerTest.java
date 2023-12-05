package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.OwnerDto;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.exception.PostException;
import com.pocketpay.transaction.service.OwnerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class OwnerControllerTest {

    @Mock
    private OwnerService ownerService;

    @InjectMocks
    private OwnerController ownerController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllOwner_Success() {
        // Arrange
        List<OwnerDto> expectedOwners = new ArrayList<>();
        expectedOwners.add(createOwnerDto(1L, "John", "Doe", new Date()));
        expectedOwners.add(createOwnerDto(2L, "Jane", "Smith", new Date()));

        when(ownerService.getAllOwner()).thenReturn(expectedOwners);

        // Act
        ResponseEntity<List<OwnerDto>> response = ownerController.getAllOwner();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedOwners, response.getBody());
        verify(ownerService, times(1)).getAllOwner();
    }

    @Test
    void testGetOwnerById_ExistingOwner_ReturnsOwnerDto() throws NotFoundException {
        // Arrange
        Long ownerId = 1L;
        OwnerDto expectedOwnerDto = createOwnerDto(ownerId, "John", "Doe", new Date());

        when(ownerService.getOwnerById(ownerId)).thenReturn(expectedOwnerDto);

        // Act
        ResponseEntity<OwnerDto> response = ownerController.getOwnerById(ownerId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedOwnerDto, response.getBody());
        verify(ownerService, times(1)).getOwnerById(ownerId);
    }

    @Test
    void testGetOwnerById_NonExistingOwner_ReturnsNotFoundStatus() throws NotFoundException {
        // Arrange
        Long ownerId = 1L;
        when(ownerService.getOwnerById(ownerId)).thenThrow(new NotFoundException("Owner not found."));

        // Act
        ResponseEntity<OwnerDto> response = ownerController.getOwnerById(ownerId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
        verify(ownerService, times(1)).getOwnerById(ownerId);
    }

    @Test
    void testCreateOwner_ValidOwnerDto_ReturnsCreatedStatus() {
        // Arrange
        OwnerDto ownerDto = createOwnerDto(null, "John", "Doe", new Date());
        OwnerDto savedOwnerDto = createOwnerDto(1L, "John", "Doe", new Date());

        when(ownerService.createOwner(ownerDto)).thenReturn(savedOwnerDto);

        // Act
        ResponseEntity<OwnerDto> response = ownerController.createOwner(ownerDto);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedOwnerDto, response.getBody());
        verify(ownerService, times(1)).createOwner(ownerDto);
    }

    // Helper method to create an OwnerDto
    private OwnerDto createOwnerDto(Long id, String firstName, String lastName, Date dateOfBirth) {
        OwnerDto ownerDto = new OwnerDto();

        return ownerDto;
    }
}
