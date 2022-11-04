package ru.rofloozyv.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.rofloozyv.backend.dto.LoginRequestDTO;
import ru.rofloozyv.backend.dto.MessageResponseDTO;
import ru.rofloozyv.backend.dto.SignupRequestDTO;
import ru.rofloozyv.backend.dto.UserDTO;
import ru.rofloozyv.backend.models.User;
import ru.rofloozyv.backend.repositories.UserRepository;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<?> registerUser(SignupRequestDTO signupRequestDTO) {
        if (userRepository.existsByUserName(signupRequestDTO.getUserName())) {
            return ResponseEntity.badRequest().body(new MessageResponseDTO(signupRequestDTO.getUserName() + " is already taken!"));
        }

        User newUser = new User(signupRequestDTO.getUserName(), signupRequestDTO.getPassword());

        newUser = userRepository.save(newUser);
        return ResponseEntity.ok(new UserDTO(newUser.getId(), newUser.getUserName(), newUser.getPassword()));
    }

    @Override
    public ResponseEntity<?> authenticateUser(LoginRequestDTO loginRequestDTO) {
        Optional<User> optionalUser = userRepository.findByUserName(loginRequestDTO.getUserName());
        if (optionalUser.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponseDTO(loginRequestDTO.getUserName() + " - no such user!"));
        }

        if (!optionalUser.get().getPassword().equals(loginRequestDTO.getPassword())) {
            return ResponseEntity.badRequest().body(new MessageResponseDTO("Wrong password!"));
        }

        return ResponseEntity.ok(new UserDTO(optionalUser.get().getId(), optionalUser.get().getUserName(), optionalUser.get().getPassword()));
    }
}
