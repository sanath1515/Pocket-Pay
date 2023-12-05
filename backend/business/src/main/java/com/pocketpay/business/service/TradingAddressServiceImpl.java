package com.pocketpay.business.service;

import com.pocketpay.business.dto.TradingAddressDto;
import com.pocketpay.business.entity.TradingAddress;
import com.pocketpay.business.exception.NotFoundException;
import com.pocketpay.business.repository.BusinessRepository;
import com.pocketpay.business.repository.TradingAddressRepository;
import com.pocketpay.business.exception.NewException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TradingAddressServiceImpl implements TradingAddressService {

    @Autowired
    private TradingAddressRepository tradingAddressRepository;

    @Autowired
    private BusinessRepository businessRepository;

    private ModelMapper modelMapper;

    public TradingAddressServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public TradingAddressDto createTradingAddress(TradingAddressDto tradingAddressDto) {
        try {
            TradingAddress tradingAddress = modelMapper.map(tradingAddressDto, TradingAddress.class);
            TradingAddress savedTradingAddress = tradingAddressRepository.save(tradingAddress);
            modelMapper.getConfiguration().setAmbiguityIgnored(true);
            return modelMapper.map(savedTradingAddress, TradingAddressDto.class);
        } catch (Exception e) {
            throw new NewException("Failed to create trading address: " + e.getMessage(), e);
        }
    }

    @Override
    public List<TradingAddressDto> getAllTradingAddress() {
        try {
            List<TradingAddress> tradingAddresses = tradingAddressRepository.findAll();
            return tradingAddresses.stream()
                    .map(tradingAddress -> modelMapper.map(tradingAddress, TradingAddressDto.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new NewException("Failed to retrieve trading addresses: " + e.getMessage(), e);
        }
    }

    @Override
    public TradingAddressDto getTradingAddressById(Long id) {
        Optional<TradingAddress> tradingAddress = tradingAddressRepository.findById(id);
        if (tradingAddress.isPresent()) {
            return modelMapper.map(tradingAddress.get(), TradingAddressDto.class);
        } else {
            throw new NotFoundException("TradingAddress not found");
        }
    }
}
