package com.pocketpay.transaction.services;

import com.pocketpay.transaction.dto.OwnerDto;
import com.pocketpay.transaction.entity.Owner;
import com.pocketpay.transaction.exception.TransactionException;
import com.pocketpay.transaction.repository.OwnerRepository;
import com.pocketpay.transaction.service.OwnerServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.mockito.Mockito.*;

 class OwnerServiceImplTest {

    @Mock
    private OwnerRepository ownerRepository;

    @InjectMocks
    private OwnerServiceImpl ownerService;

    private ModelMapper modelMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        modelMapper = new ModelMapper();
    }

    @Test
     void testCreateOwner_SuccessfulCreation() {
        // Prepare test data
        OwnerDto ownerDto = new OwnerDto();
        ownerDto.setId(1L);
        ownerDto.setFirstName("John");
        ownerDto.setLastName("Doe");
        ownerDto.setDob("new Date()");
        ownerDto.setRole("Owner");
        ownerDto.setCountry("USA");

        Owner owner = modelMapper.map(ownerDto, Owner.class);

        // Mock the repository method
        when(ownerRepository.save(owner)).thenReturn(owner);

        // Call the service method
        OwnerDto createdOwnerDto = ownerService.createOwner(ownerDto);

        // Validate the result
        Assertions.assertNotNull(createdOwnerDto);
        Assertions.assertEquals(ownerDto.getId(), createdOwnerDto.getId());
        Assertions.assertEquals(ownerDto.getFirstName(), createdOwnerDto.getFirstName());
        Assertions.assertEquals(ownerDto.getLastName(), createdOwnerDto.getLastName());
        Assertions.assertEquals(ownerDto.getDob(), createdOwnerDto.getDob());
        Assertions.assertEquals(ownerDto.getRole(), createdOwnerDto.getRole());
        Assertions.assertEquals(ownerDto.getCountry(), createdOwnerDto.getCountry());

        verify(ownerRepository, times(1)).save(owner);
    }

    @Test
     void testGetOwnerById_ExistingOwner() {
        // Prepare test data
        Long ownerId = 1L;
        Owner owner = new Owner();
        owner.setId(ownerId);
        owner.setFirstName("John");
        owner.setLastName("Doe");
        owner.setDob("new Date()");
        owner.setRole("Owner");
        owner.setCountry("USA");

        // Mock the repository method
        when(ownerRepository.findById(ownerId)).thenReturn(Optional.of(owner));

        // Call the service method
        OwnerDto ownerDto = ownerService.getOwnerById(ownerId);

        // Validate the result
        Assertions.assertNotNull(ownerDto);
        Assertions.assertEquals(owner.getId(), ownerDto.getId());
        Assertions.assertEquals(owner.getFirstName(), ownerDto.getFirstName());
        Assertions.assertEquals(owner.getLastName(), ownerDto.getLastName());
        Assertions.assertEquals(owner.getDob(), ownerDto.getDob());
        Assertions.assertEquals(owner.getRole(), ownerDto.getRole());
        Assertions.assertEquals(owner.getCountry(), ownerDto.getCountry());

        verify(ownerRepository, times(1)).findById(ownerId);
    }

    @Test
     void testGetOwnerById_NonExistingOwner() {
        // Prepare test data
        Long ownerId = 1L;

        // Mock the repository method
        when(ownerRepository.findById(ownerId)).thenReturn(Optional.empty());

        // Call the service method
        OwnerDto ownerDto = ownerService.getOwnerById(ownerId);

        // Validate the result
        Assertions.assertNull(ownerDto);

        verify(ownerRepository, times(1)).findById(ownerId);
    }

    @Test
     void testGetAllOwner_SuccessfulRetrieval() {
        // Prepare test data
        List<Owner> owners = new ArrayList<>();

        // Mock the repository method
        when(ownerRepository.findAll()).thenReturn(owners);

        // Call the service method
        List<OwnerDto> ownerDtos = ownerService.getAllOwner();

        // Validate the result
        Assertions.assertEquals(owners.size(), ownerDtos.size());

        List<Long> expectedIds = owners.stream().map(Owner::getId).collect(Collectors.toList());
        List<Long> actualIds = ownerDtos.stream().map(OwnerDto::getId).collect(Collectors.toList());
        Assertions.assertEquals(expectedIds, actualIds);

        List<String> expectedFirstNames = owners.stream().map(Owner::getFirstName).collect(Collectors.toList());
        List<String> actualFirstNames = ownerDtos.stream().map(OwnerDto::getFirstName).collect(Collectors.toList());
        Assertions.assertEquals(expectedFirstNames, actualFirstNames);

        List<String> expectedLastNames = owners.stream().map(Owner::getLastName).collect(Collectors.toList());
        List<String> actualLastNames = ownerDtos.stream().map(OwnerDto::getLastName).collect(Collectors.toList());
        Assertions.assertEquals(expectedLastNames, actualLastNames);

        verify(ownerRepository, times(1)).findAll();
    }

    @Test
    void testCreateOwner_ExceptionDuringCreation() {
        // Prepare test data
        OwnerDto ownerDto = new OwnerDto();
        ownerDto.setFirstName("John");
        ownerDto.setLastName("Doe");
        ownerDto.setDob("new Date()");
        ownerDto.setRole("Owner");
        ownerDto.setCountry("USA");

        Owner owner = modelMapper.map(ownerDto, Owner.class);

        // Mock the repository method to throw an exception
        when(ownerRepository.save(owner)).thenThrow(new RuntimeException("Failed to create owner"));

        // Call the service method and expect an exception
        Assertions.assertThrows(TransactionException.class, () -> ownerService.createOwner(ownerDto));

        verify(ownerRepository, times(1)).save(owner);
    }

    @Test
    void testGetOwnerById_ExceptionDuringRetrieval() {
        // Prepare test data
        Long ownerId = 1L;

        // Mock the repository method to throw an exception
        when(ownerRepository.findById(ownerId)).thenThrow(new RuntimeException("Failed to retrieve owner"));

        // Call the service method and expect an exception
        Assertions.assertThrows(TransactionException.class, () -> ownerService.getOwnerById(ownerId));

        verify(ownerRepository, times(1)).findById(ownerId);
    }

    @Test
    void testGetAllOwner_ExceptionDuringRetrieval() {
        // Mock the repository method to throw an exception
        when(ownerRepository.findAll()).thenThrow(new RuntimeException("Failed to retrieve owners"));

        // Call the service method and expect an exception
        Assertions.assertThrows(TransactionException.class, ownerService::getAllOwner);

        verify(ownerRepository, times(1)).findAll();
    }
}
