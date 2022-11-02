package ru.rofloozyv.backend.services;

import org.springframework.http.ResponseEntity;
import ru.rofloozyv.backend.dto.LoginRequestDTO;
import ru.rofloozyv.backend.dto.SignupRequestDTO;

public interface UserService {
    ResponseEntity<?> registerUser(SignupRequestDTO signupRequestDTO);

    ResponseEntity<?> authenticateUser(LoginRequestDTO loginRequestDTO);
}
