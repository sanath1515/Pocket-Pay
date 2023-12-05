package com.pocketpay.user.service;

import com.pocketpay.user.dto.AddressDto;
import com.pocketpay.user.entity.Address;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.repository.AddressRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AddressServiceImplTest {

    @Mock
    private AddressRepository addressRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private AddressServiceImpl addressService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllAddressDetails_ReturnsAddressDtoList_WhenAddressRepositoryReturnsAddressList() {
        // Arrange
        List<Address> addressList = Arrays.asList(
                new Address(1L, "Country 1", "House No 1", "Pincode 1", "City 1"),
                new Address(2L, "Country 2", "House No 2", "Pincode 2", "City 2")
        );
        List<AddressDto> expectedDtoList = Arrays.asList(
                new AddressDto(1L, "Country 1", "House No 1", "Pincode 1", "City 1"),
                new AddressDto(2L, "Country 2", "House No 2", "Pincode 2", "City 2")
        );

        when(addressRepository.findAll()).thenReturn(addressList);
        when(modelMapper.map(any(Address.class), eq(AddressDto.class))).thenReturn(expectedDtoList.get(0), expectedDtoList.get(1));

        // Act
        List<AddressDto> resultDtoList = addressService.getAllAddressDetails();

        // Assert
        assertEquals(expectedDtoList.size(), resultDtoList.size());
        assertEquals(expectedDtoList.get(0), resultDtoList.get(0));
        assertEquals(expectedDtoList.get(1), resultDtoList.get(1));
        verify(addressRepository, times(1)).findAll();
        verify(modelMapper, times(2)).map(any(Address.class), eq(AddressDto.class));
    }

    @Test
    void getAllAddressDetails_ThrowsNotFoundException_WhenAddressRepositoryThrowsException() {
        // Arrange
        when(addressRepository.findAll()).thenThrow(new RuntimeException("Failed to retrieve address details"));

        // Act and Assert
        try {
            addressService.getAllAddressDetails();
        } catch (NotFoundException e) {
            assertEquals("Failed to retrieve address details", e.getMessage());
            verify(addressRepository, times(1)).findAll();
        }
    }
}
