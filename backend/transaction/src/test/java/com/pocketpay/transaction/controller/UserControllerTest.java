package com.pocketpay.transaction.controller;

import com.pocketpay.transaction.exception.NotFoundException;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class UserControllerTest {
    @Test
    void getAllUser_Failure() {
        // Mock the RestTemplate to simulate an exception
        RestTemplate restTemplate = Mockito.mock(RestTemplate.class);
        when(restTemplate.getForObject("http://USER-SERVICE/users", List.class))
                .thenThrow(new RuntimeException("Failed to retrieve users"));

        // Create the UserController instance
        UserController userController = new UserController();

        // Perform the getAllUser method and expect a NotFoundException
        NotFoundException exception = org.junit.jupiter.api.Assertions.assertThrows(
                NotFoundException.class,
                () -> userController.getAllUser()
        );

        // Verify the exception message
        assertEquals("Failed to retrieve users from the user microservice", exception.getMessage());
    }
}
