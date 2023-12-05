package com.pocketpay.user.service;

import com.pocketpay.user.dto.UserDto;

import com.pocketpay.user.entity.User;
import com.pocketpay.user.exception.NotFoundException;
import com.pocketpay.user.exception.PostException;
import com.pocketpay.user.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    private ModelMapper modelMapper;

    public UserServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public List<UserDto> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            return users.stream()
                    .map(user -> modelMapper.map(user, UserDto.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new NotFoundException("Failed to retrieve users");
        }
    }

    @Override
    public UserDto getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return modelMapper.map(user.get(), UserDto.class);
        } else {
            throw new NotFoundException("User not found");
        }
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        try {
            User user = modelMapper.map(userDto, User.class);
            User savedUser = userRepository.save(user);
            return modelMapper.map(savedUser, UserDto.class);
        } catch (Exception e) {
            throw new PostException("Failed to create user");
        }
    }

    @Override
    public UserDto getByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("User not found with email: " + email));
        return modelMapper.map(user, UserDto.class);
    }
}
