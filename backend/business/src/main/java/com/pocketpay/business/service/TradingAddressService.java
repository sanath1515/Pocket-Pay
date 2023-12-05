package com.pocketpay.business.service;

import com.pocketpay.business.dto.TradingAddressDto;

import java.util.List;

public interface TradingAddressService {

    TradingAddressDto createTradingAddress(TradingAddressDto tradingAddressDto);

    List<TradingAddressDto> getAllTradingAddress();
    TradingAddressDto getTradingAddressById(Long id);
}
