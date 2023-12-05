package com.pocketpay.business.controller;

import com.pocketpay.business.dto.BusinessDto;
import com.pocketpay.business.exception.PostException;
import com.pocketpay.business.exception.NotFoundException;
import com.pocketpay.business.service.BusinessService;
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

public class BusinessControllerTest {

    @Mock
    private BusinessService businessService;

    @InjectMocks
    private BusinessController businessController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createBusiness_Success() throws PostException, NotFoundException {
        // Prepare test data
        BusinessDto businessDto = new BusinessDto();
        businessDto.setBusinessName("Test Business");

        // Mock the businessService.createBusiness method
        when(businessService.createBusiness(businessDto)).thenReturn(businessDto);

        // Perform the POST request
        ResponseEntity<BusinessDto> responseEntity = businessController.createBusiness(businessDto);

        // Verify the response
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(businessDto, responseEntity.getBody());

        // Verify that businessService.createBusiness was called once
        verify(businessService, times(1)).createBusiness(businessDto);
    }

    @Test
    void createBusiness_PostException() throws PostException, NotFoundException {
        // Prepare test data
        BusinessDto businessDto = new BusinessDto();
        businessDto.setBusinessName("Test Business");

        // Mock the businessService.createBusiness method to throw PostException
        when(businessService.createBusiness(businessDto)).thenThrow(new PostException("Failed to create business"));

        // Perform the POST request
        ResponseEntity<BusinessDto> responseEntity = businessController.createBusiness(businessDto);

        // Verify the response
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());

        // Verify that businessService.createBusiness was called once
        verify(businessService, times(1)).createBusiness(businessDto);
    }

    @Test
    void createBusiness_NotFoundException() throws PostException, NotFoundException {
        // Prepare test data
        BusinessDto businessDto = new BusinessDto();
        businessDto.setBusinessName("Test Business");

        when(businessService.createBusiness(businessDto)).thenThrow(new NotFoundException("Business not found"));

        ResponseEntity<BusinessDto> responseEntity = businessController.createBusiness(businessDto);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());

        // Verify that businessService.createBusiness was called once
        verify(businessService, times(1)).createBusiness(businessDto);
    }

    @Test
    void getAllBusiness_Success() {
        BusinessDto business1 = new BusinessDto();
        business1.setId(1L);
        business1.setBusinessName("Business 1");

        BusinessDto business2 = new BusinessDto();
        business2.setId(2L);
        business2.setBusinessName("Business 2");

        List<BusinessDto> businessList = new ArrayList<>();
        businessList.add(business1);
        businessList.add(business2);

        // Mock the businessService.getAllBusiness method
        when(businessService.getAllBusiness()).thenReturn(businessList);

        // Perform the getAllBusiness method
        ResponseEntity<List<BusinessDto>> responseEntity = businessController.getAllBusiness();

        // Verify the result
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(businessList.size(), responseEntity.getBody().size());
        assertEquals(businessList, responseEntity.getBody());

        // Verify that businessService.getAllBusiness was called once
        verify(businessService, times(1)).getAllBusiness();
    }

    @Test
    void getAllBusiness_NotFoundException() {
        // Mock the businessService.getAllBusiness method to throw a NotFoundException
        when(businessService.getAllBusiness()).thenThrow(new NotFoundException("Businesses not found"));

        // Perform the getAllBusiness method
        ResponseEntity<List<BusinessDto>> responseEntity = businessController.getAllBusiness();

        // Verify the result
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());

        // Verify that businessService.getAllBusiness was called once
        verify(businessService, times(1)).getAllBusiness();
    }

}
