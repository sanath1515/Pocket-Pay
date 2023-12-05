package com.pocketpay.user.controllers;

import com.pocketpay.user.controllers.BusinessController;
import com.pocketpay.user.dto.BusinessDto;
import com.pocketpay.user.exception.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BusinessControllerTest {

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private BusinessController businessController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllBusinessDetails_ReturnsBusinessList_WhenRestTemplateReturnsBusinessList() {
        List<BusinessDto> businessList = Arrays.asList(
                new BusinessDto(1L, "Business 1", "Registration 1", "Size 1", "Category 1", "Subcategory 1", "Address 1"),
                new BusinessDto(2L, "Business 2", "Registration 2", "Size 2", "Category 2", "Subcategory 2", "Address 2")
        );

        when(restTemplate.getForObject(anyString(), any())).thenReturn(businessList);

        ResponseEntity<List<BusinessDto>> response = businessController.getAllBusinessDetails();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(businessList, response.getBody());
        verify(restTemplate, times(1)).getForObject(anyString(), any());
    }

    @Test
    void getAllBusinessDetails_ThrowsNotFoundException_WhenRestTemplateThrowsException() {
        when(restTemplate.getForObject(anyString(), any())).thenThrow(new RuntimeException("Failed to retrieve business details"));

        try {
            businessController.getAllBusinessDetails();
        } catch (NotFoundException e) {
            assertEquals("Failed to retrieve business details", e.getMessage());
            verify(restTemplate, times(1)).getForObject(anyString(), any());
        }
    }
}
