package com.pocketpay.business.service;

import com.pocketpay.business.dto.BusinessDto;
import com.pocketpay.business.entity.Business;
import com.pocketpay.business.exception.NewException;
import com.pocketpay.business.repository.BusinessRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class BusinessServiceImplTest {

    @Mock
    private BusinessRepository businessRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private BusinessServiceImpl businessService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createBusiness_Success() throws NewException {
        BusinessDto businessDto = new BusinessDto();
        businessDto.setBusinessName("Test Business");

        Business business = new Business();
        business.setBusinessName("Test Business");

        when(businessRepository.save(any(Business.class))).thenReturn(business);

        when(modelMapper.map(businessDto, Business.class)).thenReturn(business);
        when(modelMapper.map(business, BusinessDto.class)).thenReturn(businessDto);

        BusinessDto savedBusinessDto = businessService.createBusiness(businessDto);

        assertEquals(businessDto, savedBusinessDto);

        verify(businessRepository, times(1)).save(business);

        verify(modelMapper, times(1)).map(businessDto, Business.class);
        verify(modelMapper, times(1)).map(business, BusinessDto.class);
    }

    @Test
    void createBusiness_Exception() {
        BusinessDto businessDto = new BusinessDto();
        businessDto.setBusinessName("Test Business");

        when(businessRepository.save(any(Business.class))).thenThrow(new RuntimeException("Failed to save business"));

        when(modelMapper.map(businessDto, Business.class)).thenReturn(new Business());

        NewException exception = assertThrows(NewException.class, () -> businessService.createBusiness(businessDto));
        assertEquals("Failed to create business: Failed to save business", exception.getMessage());

        verify(businessRepository, times(1)).save(any(Business.class));

        verify(modelMapper, times(1)).map(businessDto, Business.class);
    }

    @Test
    void getAllBusiness_Success() {
        Business business1 = new Business();
        business1.setId(1L);
        business1.setBusinessName("Business 1");

        Business business2 = new Business();
        business2.setId(2L);
        business2.setBusinessName("Business 2");

        List<Business> businessList = new ArrayList<>();
        businessList.add(business1);
        businessList.add(business2);

        when(businessRepository.findAll()).thenReturn(businessList);

        List<BusinessDto> result = businessService.getAllBusiness();

        verify(businessRepository, times(1)).findAll();
    }

    @Test
    void getAllBusiness_Exception() {
        when(businessRepository.findAll()).thenThrow(new RuntimeException("Database connection error"));

        try {
            businessService.getAllBusiness();
        } catch (NewException e) {
            assertEquals("Failed to retrieve businesses: Database connection error", e.getMessage());
        }

        verify(businessRepository, times(1)).findAll();
    }
}
