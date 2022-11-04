package ru.rofloozyv.backend.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import ru.rofloozyv.backend.dto.UserDTO;
import ru.rofloozyv.backend.models.User;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface UserMapper {
    UserDTO toUserDTO(User user);

    User toUserModel(UserDTO userDTO);
}
