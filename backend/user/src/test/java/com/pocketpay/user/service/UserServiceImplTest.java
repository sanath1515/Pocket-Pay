package com.pocketpay.user.service;

import com.pocketpay.user.dto.UserDto;
import com.pocketpay.user.entity.User;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.exception.PostException;
import com.pocketpay.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserServiceImpl userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllUsers_ReturnsUserDtoList_WhenUserRepositoryReturnsUserList() {
        // Arrange
        List<User> userList = Arrays.asList(
                new User(1L, "John Doe", "password1", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null),
                new User(2L, "Jane Smith", "password2", "jane@example.com", "Premium", "9876543210.0"," new Date()", null, null)
        );
        List<UserDto> expectedDtoList = Arrays.asList(
                new UserDto(1L, "John Doe", "password1", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null),
                new UserDto(2L, "Jane Smith", "password2", "jane@example.com", "Premium", "9876543210.0", "new Date()", null, null)
        );

        when(userRepository.findAll()).thenReturn(userList);
        when(modelMapper.map(any(User.class), eq(UserDto.class))).thenReturn(expectedDtoList.get(0), expectedDtoList.get(1));

        // Act
        List<UserDto> resultDtoList = userService.getAllUsers();

        // Assert
        assertEquals(expectedDtoList.size(), resultDtoList.size());
        assertEquals(expectedDtoList.get(0), resultDtoList.get(0));
        assertEquals(expectedDtoList.get(1), resultDtoList.get(1));
        verify(userRepository, times(1)).findAll();
        verify(modelMapper, times(2)).map(any(User.class), eq(UserDto.class));
    }

    @Test
    void getAllUsers_ThrowsNotFoundException_WhenUserRepositoryThrowsException() {
        // Arrange
        when(userRepository.findAll()).thenThrow(new RuntimeException("Failed to retrieve users"));

        // Act and Assert
        try {
            userService.getAllUsers();
        } catch (NotFoundException e) {
            assertEquals("Failed to retrieve users", e.getMessage());
            verify(userRepository, times(1)).findAll();
        }
    }

    @Test
    void getUserById_ReturnsUserDto_WhenUserExists() {
        // Arrange
        Long userId = 1L;
        User user = new User(userId, "John Doe", "password", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null);
        UserDto expectedDto = new UserDto(userId, "John Doe", "password", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(modelMapper.map(user, UserDto.class)).thenReturn(expectedDto);

        // Act
        UserDto resultDto = userService.getUserById(userId);

        // Assert
        assertEquals(expectedDto, resultDto);
        verify(userRepository, times(1)).findById(userId);
        verify(modelMapper, times(1)).map(user, UserDto.class);
    }

    @Test
    void getUserById_ThrowsNotFoundException_WhenUserDoesNotExist() {
        // Arrange
        Long userId = 1L;

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        // Act and Assert
        try {
            userService.getUserById(userId);
        } catch (NotFoundException e) {
            assertEquals("User not found", e.getMessage());
            verify(userRepository, times(1)).findById(userId);
        }
    }

    @Test
    void createUser_ReturnsCreatedUserDto_WhenUserIsCreatedSuccessfully() {
        // Arrange
        UserDto userDto = new UserDto(null, "John Doe", "password", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null);
        User user = new User(1L, "John Doe", "password", "john@example.com", "Standard", "1234567890.0"," new Date()", null, null);
        UserDto expectedDto = new UserDto(1L, "John Doe", "password", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null);

        when(modelMapper.map(userDto, User.class)).thenReturn(user);
        when(userRepository.save(user)).thenReturn(user);
        when(modelMapper.map(user, UserDto.class)).thenReturn(expectedDto);

        // Act
        UserDto resultDto = userService.createUser(userDto);

        // Assert
        assertEquals(expectedDto, resultDto);
        verify(modelMapper, times(1)).map(userDto, User.class);
        verify(userRepository, times(1)).save(user);
        verify(modelMapper, times(1)).map(user, UserDto.class);
    }

    @Test
    void createUser_ThrowsPostException_WhenFailedToCreateUser() {
        // Arrange
        UserDto userDto = new UserDto(null, "John Doe", "password", "john@example.com", "Standard", "1234567890.0", "new Date()", null, null);

        when(modelMapper.map(userDto, User.class)).thenReturn(new User());
        when(userRepository.save(any(User.class))).thenThrow(new RuntimeException("Failed to create user"));

        // Act and Assert
        try {
            userService.createUser(userDto);
        } catch (PostException e) {
            assertEquals("Failed to create user", e.getMessage());
            verify(modelMapper, times(1)).map(userDto, User.class);
            verify(userRepository, times(1)).save(any(User.class));
        }
    }
}
