package com.pocketpay.user.controllers;

import com.pocketpay.user.controllers.UserController;
import com.pocketpay.user.dto.UserDto;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllUsers_ReturnsUserList_WhenUserServiceReturnsUserList() {
        // Arrange
        List<UserDto> userList = Arrays.asList(
                new UserDto(1L, "John Doe", "password1", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null),
                new UserDto(2L, "Jane Smith", "password2", "jane@example.com", "Premium", "9876543210.0", "new Date()", null, null)
        );

        when(userService.getAllUsers()).thenReturn(userList);

        // Act
        ResponseEntity<List<UserDto>> response = userController.getAllUsers();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(userList, response.getBody());
        verify(userService, times(1)).getAllUsers();
    }

    @Test
    void getAllUsers_ThrowsNotFoundException_WhenUserServiceThrowsException() {
        // Arrange
        when(userService.getAllUsers()).thenThrow(new RuntimeException("Failed to retrieve user details"));

        // Act and Assert
        try {
            userController.getAllUsers();
        } catch (NotFoundException e) {
            assertEquals("Failed to retrieve user details", e.getMessage());
            verify(userService, times(1)).getAllUsers();
        }
    }

    @Test
    void getUserById_ReturnsUserDto_WhenUserServiceReturnsUserDto() {
        // Arrange
        Long userId = 1L;
        UserDto userDto = new UserDto(userId, "John Doe", "password1", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null);

        when(userService.getUserById(userId)).thenReturn(userDto);

        // Act
        ResponseEntity<UserDto> response = userController.getUserById(userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(userDto, response.getBody());
        verify(userService, times(1)).getUserById(userId);
    }

    @Test
    void getUserById_ThrowsNotFoundException_WhenUserServiceThrowsException() {
        // Arrange
        Long userId = 1L;
        when(userService.getUserById(userId)).thenThrow(new RuntimeException("User not found with ID: " + userId));

        // Act and Assert
        try {
            userController.getUserById(userId);
        } catch (NotFoundException e) {
            assertEquals("User not found with ID: " + userId, e.getMessage());
            verify(userService, times(1)).getUserById(userId);
        }
    }




}
