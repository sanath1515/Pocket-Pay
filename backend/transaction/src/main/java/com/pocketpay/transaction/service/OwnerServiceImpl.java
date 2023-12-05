package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.OwnerDto;
import com.pocketpay.transaction.entity.Owner;
import com.pocketpay.transaction.exception.TransactionException;
import com.pocketpay.transaction.repository.OwnerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OwnerServiceImpl implements OwnerService {

    @Autowired
    private OwnerRepository ownerRepository;

    private ModelMapper modelMapper;

    public OwnerServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public OwnerDto createOwner(OwnerDto ownerDto) {
        try {
            Owner owner = modelMapper.map(ownerDto, Owner.class);
            Owner savedOwner = ownerRepository.save(owner);
            return modelMapper.map(savedOwner, OwnerDto.class);
        } catch (Exception e) {
            throw new TransactionException("Failed to create owner: " + e.getMessage());
        }
    }

    @Override
    public OwnerDto getOwnerById(Long id) {
        try {
            Optional<Owner> owner = ownerRepository.findById(id);
            return owner.map(value -> modelMapper.map(value, OwnerDto.class)).orElse(null);
        } catch (Exception e) {
            throw new TransactionException("Failed to retrieve owner: " + e.getMessage());
        }
    }

    @Override
    public List<OwnerDto> getAllOwner() {
        try {
            List<Owner> ownerList = ownerRepository.findAll();
            return ownerList.stream()
                    .map(owner -> modelMapper.map(owner, OwnerDto.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new TransactionException("Failed to retrieve owners: " + e.getMessage());
        }
    }
}
