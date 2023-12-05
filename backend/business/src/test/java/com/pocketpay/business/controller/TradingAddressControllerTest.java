package com.pocketpay.business.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pocketpay.business.dto.BusinessDto;
import com.pocketpay.business.dto.TradingAddressDto;
import com.pocketpay.business.exception.NotFoundException;
import com.pocketpay.business.exception.PostException;
import com.pocketpay.business.service.BusinessService;
import com.pocketpay.business.service.TradingAddressService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;
import java.util.List;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@Slf4j
public class TradingAddressControllerTest {

    @Mock
    private TradingAddressService tradingAddressService;
    private MockMvc mockMvc;
    @Mock
    private BusinessService businessService;

    @InjectMocks
    private TradingAddressController tradingAddressController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void getAllTradingAddress_Success() throws PostException {
        TradingAddressDto tradingAddressDto = new TradingAddressDto();
        tradingAddressDto.setId(1L);
        tradingAddressDto.setAddress("Test Address");

        List<TradingAddressDto> tradingAddressList = Collections.singletonList(tradingAddressDto);

        when(tradingAddressService.getAllTradingAddress()).thenReturn(tradingAddressList);

        ResponseEntity<List<TradingAddressDto>> responseEntity = tradingAddressController.getAllTradingAddress();

        assertEquals(tradingAddressList, responseEntity.getBody());
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());

        verify(tradingAddressService, times(1)).getAllTradingAddress();
    }

    @Test
    void getAllTradingAddress_Exception() throws PostException {
        when(tradingAddressService.getAllTradingAddress()).thenThrow(new PostException("Failed to retrieve trading addresses"));

        ResponseEntity<List<TradingAddressDto>> responseEntity = tradingAddressController.getAllTradingAddress();
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());

        verify(tradingAddressService, times(1)).getAllTradingAddress();
    }

    @Test
    void testGetTradingAddressById() {
        Long id = 1L;
        TradingAddressDto tradingAddressDto = new TradingAddressDto();
        tradingAddressDto.setId(id);
        when(tradingAddressService.getTradingAddressById(id)).thenReturn(tradingAddressDto);

        ResponseEntity<TradingAddressDto> responseEntity = tradingAddressController.getTradingAddressById(id);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(tradingAddressDto, responseEntity.getBody());

        verify(tradingAddressService, times(1)).getTradingAddressById(id);
    }
    @Test
    void testGetTradingAddressById_NotFound() {
        Long id = 1L;
        when(tradingAddressService.getTradingAddressById(id)).thenThrow(NotFoundException.class);

        assertThrows(NotFoundException.class, () -> tradingAddressController.getTradingAddressById(id));

        verify(tradingAddressService, times(1)).getTradingAddressById(id);
    }

    @Test
    public void testCreateTradingAddress_Success() throws Exception {
        Long generatedBusinessId = 12345L;

        TradingAddressDto tradingAddressDto = new TradingAddressDto();
        tradingAddressDto.setAddress("Test Address");

        BusinessDto businessDto = new BusinessDto();
        businessDto.setId(generatedBusinessId);

        tradingAddressDto.setBusiness(businessDto);

        TradingAddressDto savedTradingAddressDto = new TradingAddressDto();
        savedTradingAddressDto.setId(1L);
        savedTradingAddressDto.setAddress("Test Address");
        savedTradingAddressDto.setBusiness(businessDto);

        when(tradingAddressService.createTradingAddress(any(TradingAddressDto.class))).thenReturn(savedTradingAddressDto);
        when(businessService.createBusiness(any(BusinessDto.class))).thenReturn(businessDto);

        mockMvc = MockMvcBuilders.standaloneSetup(tradingAddressController).build();

        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/business/trading_address")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(tradingAddressDto)))
                .andReturn();

        int expectedStatusCode = HttpStatus.CREATED.value();
        String expectedResponseBody = asJsonString(savedTradingAddressDto);

        int actualStatusCode = mvcResult.getResponse().getStatus();
        String actualResponseBody = mvcResult.getResponse().getContentAsString();

        assert actualStatusCode == expectedStatusCode;
        assert actualResponseBody.equals(expectedResponseBody);
    }

    private static String asJsonString(Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    @Test
    public void testCreateTradingAddress_PostException() {
        when(tradingAddressService.createTradingAddress(any(TradingAddressDto.class)))
                .thenThrow(new PostException("Failed to create trading address"));

        TradingAddressDto tradingAddressDto = new TradingAddressDto();
        BusinessDto businessDto=new BusinessDto();
        businessDto.setBusinessName("test");
        tradingAddressDto.setBusiness(businessDto);
        tradingAddressDto.setAddress("Test Address");
        ResponseEntity<TradingAddressDto> response = tradingAddressController.createTradingAddress(tradingAddressDto);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals(null, response.getBody());
    }
}
