package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.dto.UserDto;
import com.pocketpay.transaction.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("transactions/users")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUser() {

        try {
            List<UserDto> users;
            users = restTemplate.getForObject("http://USER-SERVICE/users", List.class);
            return new ResponseEntity<>(users, HttpStatus.OK);

        } catch (Exception e) {
            throw new NotFoundException("Failed to retrieve users from the user microservice");
        }
    }
}
