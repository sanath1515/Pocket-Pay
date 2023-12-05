package com.pocketpay.user.controllers;

import com.pocketpay.user.dto.BusinessDto;
        import com.pocketpay.user.exception.NotFoundException;
        import lombok.RequiredArgsConstructor;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;
        import org.springframework.web.client.RestTemplate;

        import java.util.List;

@RestController
@RequestMapping("users/business")
@RequiredArgsConstructor
public class BusinessController {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping
    public ResponseEntity<List<BusinessDto>> getAllBusinessDetails() {
        try {
            List<BusinessDto> businesses = restTemplate.getForObject("http://BUSINESS-SERVICE/business", List.class);
            return new ResponseEntity<>(businesses, HttpStatus.OK);
        } catch (Exception e) {
            throw new NotFoundException("Failed to retrieve business details");
        }
    }
}