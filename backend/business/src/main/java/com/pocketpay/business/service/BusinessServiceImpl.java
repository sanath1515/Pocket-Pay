package com.pocketpay.business.service;

import com.pocketpay.business.dto.BusinessDto;
import com.pocketpay.business.entity.Business;
import com.pocketpay.business.repository.BusinessRepository;
import com.pocketpay.business.exception.NewException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BusinessServiceImpl implements BusinessService {

    @Autowired
    private BusinessRepository businessRepository;

    private ModelMapper modelMapper;

    public BusinessServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public BusinessDto createBusiness(BusinessDto businessDto) {
        try {
            Business business = modelMapper.map(businessDto, Business.class);
            Business savedBusiness = businessRepository.save(business);
            return modelMapper.map(savedBusiness, BusinessDto.class);
        } catch (Exception e) {
            throw new NewException("Failed to create business: " + e.getMessage(), e);
        }
    }

    @Override
    public List<BusinessDto> getAllBusiness() {
        try {
            List<Business> businesses = businessRepository.findAll();
            return businesses.stream()
                    .map(data -> modelMapper.map(data, BusinessDto.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new NewException("Failed to retrieve businesses: " + e.getMessage(), e);
        }
    }
}
