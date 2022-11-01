package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class LoginRequestDTO {

    @JsonProperty("user_name")
    private String userName;

    @JsonProperty("password")
    private String password;
}
