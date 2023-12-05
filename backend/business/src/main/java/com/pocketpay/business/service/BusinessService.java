package com.pocketpay.business.service;

import com.pocketpay.business.dto.BusinessDto;

import java.util.List;

public interface BusinessService {

   BusinessDto createBusiness(BusinessDto businessDto);

   List<BusinessDto> getAllBusiness();
}
