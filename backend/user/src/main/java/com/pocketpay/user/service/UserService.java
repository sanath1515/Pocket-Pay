package com.pocketpay.user.service;


import com.pocketpay.user.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    List<UserDto> getAllUsers();
    UserDto getUserById(Long id);
    UserDto createUser(UserDto userDto);

    UserDto getByEmail(String email);

}
