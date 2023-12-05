package com.pocketpay.user.controllers;

import com.pocketpay.user.dto.AddressDto;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.service.AddressService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class AddressControllerTest {

    @Mock
    private AddressService addressService;

    @InjectMocks
    private AddressController addressController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllAddressDetails_ReturnsAddressList_WhenServiceReturnsAddressList() {

        List<AddressDto> addressList = Arrays.asList(
                new AddressDto(1L, "Country 1", "House 1", "Pincode 1", "City 1"),
                new AddressDto(2L, "Country 2", "House 2", "Pincode 2", "City 2")
        );

        when(addressService.getAllAddressDetails()).thenReturn(addressList);


        ResponseEntity<List<AddressDto>> response = addressController.getAllAddressDetails();


        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(addressList, response.getBody());
        verify(addressService, times(1)).getAllAddressDetails();
    }

    @Test
    void getAllAddressDetails_ThrowsNotFoundException_WhenServiceThrowsException() {

        when(addressService.getAllAddressDetails()).thenThrow(new NotFoundException("Failed to retrieve address details"));


        try {
            addressController.getAllAddressDetails();
        } catch (NotFoundException e) {
            assertEquals("Failed to retrieve address details", e.getMessage());
            verify(addressService, times(1)).getAllAddressDetails();
        }
    }
}
