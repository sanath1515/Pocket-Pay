package com.pocketpay.business.service;

import com.pocketpay.business.dto.TradingAddressDto;
import com.pocketpay.business.entity.TradingAddress;
import com.pocketpay.business.exception.NewException;
import com.pocketpay.business.repository.BusinessRepository;
import com.pocketpay.business.repository.TradingAddressRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class TradingAddressServiceImplTest {

    @Mock
    private TradingAddressRepository tradingAddressRepository;

    @Mock
    private BusinessRepository businessRepository;

    @InjectMocks
    private TradingAddressServiceImpl tradingAddressService;

    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        modelMapper = new ModelMapper();
    }

    @Test
    void createTradingAddress_Success() throws NewException {
        TradingAddressDto tradingAddressDto = new TradingAddressDto();
        tradingAddressDto.setAddress("Test Address");

        TradingAddress tradingAddress = modelMapper.map(tradingAddressDto, TradingAddress.class);
        TradingAddress savedTradingAddress = new TradingAddress();
        savedTradingAddress.setId(1L);
        savedTradingAddress.setAddress("Test Address");

        when(tradingAddressRepository.save(tradingAddress)).thenReturn(savedTradingAddress);

        TradingAddressDto savedTradingAddressDto = tradingAddressService.createTradingAddress(tradingAddressDto);

        assertEquals(savedTradingAddress.getId(), savedTradingAddressDto.getId());
        assertEquals(savedTradingAddress.getAddress(), savedTradingAddressDto.getAddress());

        verify(tradingAddressRepository, times(1)).save(tradingAddress);
    }

    @Test
    void createTradingAddress_Exception() {
        // Prepare test data
        TradingAddressDto tradingAddressDto = new TradingAddressDto();
        tradingAddressDto.setAddress("Test Address");

        TradingAddress tradingAddress = modelMapper.map(tradingAddressDto, TradingAddress.class);

        when(tradingAddressRepository.save(tradingAddress)).thenThrow(new RuntimeException("Failed to save trading address"));

        try {
            tradingAddressService.createTradingAddress(tradingAddressDto);
        } catch (NewException e) {
            assertEquals("Failed to create trading address: Failed to save trading address", e.getMessage());
        }

        verify(tradingAddressRepository, times(1)).save(tradingAddress);
    }

    @Test
    void getAllTradingAddress_Success() throws NewException {
        TradingAddress tradingAddress1 = new TradingAddress();
        tradingAddress1.setId(1L);
        tradingAddress1.setAddress("Address 1");

        TradingAddress tradingAddress2 = new TradingAddress();
        tradingAddress2.setId(2L);
        tradingAddress2.setAddress("Address 2");

        List<TradingAddress> tradingAddressList = new ArrayList<>();
        tradingAddressList.add(tradingAddress1);
        tradingAddressList.add(tradingAddress2);

        when(tradingAddressRepository.findAll()).thenReturn(tradingAddressList);

        List<TradingAddressDto> tradingAddressDtoList = tradingAddressService.getAllTradingAddress();

        assertEquals(tradingAddressList.size(), tradingAddressDtoList.size());
        for (int i = 0; i < tradingAddressList.size(); i++) {
            assertEquals(tradingAddressList.get(i).getId(), tradingAddressDtoList.get(i).getId());
            assertEquals(tradingAddressList.get(i).getAddress(), tradingAddressDtoList.get(i).getAddress());
        }

        verify(tradingAddressRepository, times(1)).findAll();
    }

    @Test
    void getAllTradingAddress_Exception() throws NewException {
        when(tradingAddressRepository.findAll()).thenThrow(new RuntimeException("Failed to retrieve trading addresses"));

        try {
            tradingAddressService.getAllTradingAddress();
        } catch (NewException e) {
            assertEquals("Failed to retrieve trading addresses: Failed to retrieve trading addresses", e.getMessage());
        }

        verify(tradingAddressRepository, times(1)).findAll();
    }

}
