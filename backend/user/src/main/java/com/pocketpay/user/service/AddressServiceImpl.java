package com.pocketpay.user.service;

import com.pocketpay.user.dto.AddressDto;
import com.pocketpay.user.entity.Address;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.exception.PostException;
import com.pocketpay.user.repository.AddressRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepository addressRepository;

    private ModelMapper modelMapper;

    public AddressServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public List<AddressDto> getAllAddressDetails() {
        try {
            List<Address> addresses = addressRepository.findAll();
            return addresses.stream()
                    .map(data -> modelMapper.map(data, AddressDto.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new NotFoundException("Failed to retrieve address details");
        }
    }

    @Override
    public AddressDto createAddress(AddressDto addressDto) {
        try {
            Address address = modelMapper.map(addressDto, Address.class);
            Address savedAddress = addressRepository.save(address);
            return modelMapper.map(savedAddress, AddressDto.class);
        } catch (Exception e) {
            throw new PostException("Failed to create Address");
        }
    }
}
