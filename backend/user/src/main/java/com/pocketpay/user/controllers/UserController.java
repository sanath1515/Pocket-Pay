package com.pocketpay.user.controllers;

import com.pocketpay.user.dto.AddressDto;
import com.pocketpay.user.dto.UserDto;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.service.AddressService;
import com.pocketpay.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final AddressService addressService;

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        try {
            List<UserDto> users = userService.getAllUsers();
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            throw new NotFoundException("Failed to retrieve user details");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        try {
            UserDto userDto = userService.getUserById(id);
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        } catch (Exception e) {
            throw new NotFoundException("User not found with ID: " + id);
        }
    }

    @PostMapping("")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        try {
            if (userDto.getAddress() != null && userDto.getAddress().getId() != null) {
                UserDto savedUserDto = userService.createUser(userDto);
                return new ResponseEntity<>(savedUserDto, HttpStatus.CREATED);
            } else {
                userDto.getAddress().setId(generateNewAddressId());
                AddressDto createdAddress = addressService.createAddress(userDto.getAddress());
                userDto.setAddress(createdAddress);
                UserDto savedUserDto = userService.createUser(userDto);
                return new ResponseEntity<>(savedUserDto, HttpStatus.CREATED);
            }
        } catch (Exception e) {
            throw new NotFoundException("Failed to create user");
        }
    }
    private Long generateNewAddressId() {
        UUID uuid = UUID.randomUUID();

        return uuid.getMostSignificantBits() & Long.MAX_VALUE;
    }

    @GetMapping("user/{email}")
    public ResponseEntity<UserDto> getByEmail(@PathVariable String email) {
        UserDto userDto = userService.getByEmail(email);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
