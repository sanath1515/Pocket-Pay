package com.pocketpay.transaction.services;

import com.pocketpay.transaction.dto.RecipientDto;
import com.pocketpay.transaction.entity.Recipient;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.repository.RecipientRepository;
import com.pocketpay.transaction.service.RecipientServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class RecipientServiceImplTest {

    @Mock
    private RecipientRepository recipientRepository;

    @InjectMocks
    private RecipientServiceImpl recipientService;

    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        modelMapper = new ModelMapper();
    }

    @Test
    void testCreateRecipient() {
        // Prepare test data
        RecipientDto recipientDto = new RecipientDto();
        recipientDto.setId(1L);
        recipientDto.setFirstName("John");
        recipientDto.setLastName("Doe");
        recipientDto.setAccountType("Savings");
        recipientDto.setEmail("john.doe@example.com");

        Recipient recipient = modelMapper.map(recipientDto, Recipient.class);
        Recipient savedRecipient = modelMapper.map(recipientDto, Recipient.class);
        savedRecipient.setId(1L);

        // Mock the repository call
        when(recipientRepository.save(any(Recipient.class))).thenReturn(savedRecipient);

        // Call the service method
        RecipientDto savedRecipientDto = recipientService.createRecipient(recipientDto);

        // Verify the repository call and assert the result
        verify(recipientRepository, times(1)).save(any(Recipient.class));
        assertNotNull(savedRecipientDto);
        assertEquals(savedRecipient.getId(), savedRecipientDto.getId());
        assertEquals(savedRecipient.getFirstName(), savedRecipientDto.getFirstName());
        assertEquals(savedRecipient.getLastName(), savedRecipientDto.getLastName());
        assertEquals(savedRecipient.getAccountType(), savedRecipientDto.getAccountType());
        assertEquals(savedRecipient.getEmail(), savedRecipientDto.getEmail());
    }

    @Test
    void testCreateRecipient_WithNullRecipientDto() {
        assertThrows(IllegalArgumentException.class, () -> recipientService.createRecipient(null));
        verifyNoInteractions(recipientRepository);
    }
    @Test
    void testGetRecipientById_RecipientFound() {
        // Prepare test data
        Long recipientId = 1L;
        Recipient recipient = new Recipient();
        recipient.setId(recipientId);
        recipient.setFirstName("John");
        recipient.setLastName("Doe");
        recipient.setAccountType("Savings");
        recipient.setEmail("john.doe@example.com");

        // Mock the repository call
        when(recipientRepository.findById(recipientId)).thenReturn(Optional.of(recipient));

        // Call the service method
        RecipientDto recipientDto = recipientService.getRecipientById(recipientId);

        // Verify the repository call and assert the result
        verify(recipientRepository, times(1)).findById(recipientId);
        assertNotNull(recipientDto);
        assertEquals(recipient.getId(), recipientDto.getId());
        assertEquals(recipient.getFirstName(), recipientDto.getFirstName());
        assertEquals(recipient.getLastName(), recipientDto.getLastName());
        assertEquals(recipient.getAccountType(), recipientDto.getAccountType());
        assertEquals(recipient.getEmail(), recipientDto.getEmail());
    }



    @Test
    void testGetRecipientById_RecipientNotFound() {
        // Prepare test data
        Long recipientId = 1L;

        // Mock the repository call
        when(recipientRepository.findById(recipientId)).thenReturn(Optional.empty());

        // Call the service method and verify that it throws NotFoundException
        assertThrows(NotFoundException.class, () -> recipientService.getRecipientById(recipientId));

        // Verify the repository call
        verify(recipientRepository, times(1)).findById(recipientId);
    }

    @Test
    void testGetAllRecipient_WithEmptyList() {
        when(recipientRepository.findAll()).thenReturn(Collections.emptyList());

        List<RecipientDto> recipientDtos = recipientService.getAllRecipient();

        verify(recipientRepository, times(1)).findAll();
        assertNotNull(recipientDtos);
        assertTrue(recipientDtos.isEmpty());
    }


    @Test
    void testGetAllRecipient() {
        // Prepare test data
        Recipient recipient1 = new Recipient();
        recipient1.setId(1L);
        recipient1.setFirstName("John");
        recipient1.setLastName("Doe");
        recipient1.setAccountType("Savings");
        recipient1.setEmail("john.doe@example.com");

        Recipient recipient2 = new Recipient();
        recipient2.setId(2L);
        recipient2.setFirstName("Jane");
        recipient2.setLastName("Smith");
        recipient2.setAccountType("Checking");
        recipient2.setEmail("jane.smith@example.com");

        List<Recipient> recipients = new ArrayList<>();
        recipients.add(recipient1);
        recipients.add(recipient2);

        // Mock the repository call
        when(recipientRepository.findAll()).thenReturn(recipients);

        // Call the service method
        List<RecipientDto> recipientDtos = recipientService.getAllRecipient();

        // Verify the repository call and assert the result
        verify(recipientRepository, times(1)).findAll();
        assertNotNull(recipientDtos);
        assertEquals(2, recipientDtos.size());

        RecipientDto recipientDto1 = recipientDtos.get(0);
        assertEquals(recipient1.getId(), recipientDto1.getId());
        assertEquals(recipient1.getFirstName(), recipientDto1.getFirstName());
        assertEquals(recipient1.getLastName(), recipientDto1.getLastName());
        assertEquals(recipient1.getAccountType(), recipientDto1.getAccountType());
        assertEquals(recipient1.getEmail(), recipientDto1.getEmail());

        RecipientDto recipientDto2 = recipientDtos.get(1);
        assertEquals(recipient2.getId(), recipientDto2.getId());
        assertEquals(recipient2.getFirstName(), recipientDto2.getFirstName());
        assertEquals(recipient2.getLastName(), recipientDto2.getLastName());
        assertEquals(recipient2.getAccountType(), recipientDto2.getAccountType());
        assertEquals(recipient2.getEmail(), recipientDto2.getEmail());
    }



}