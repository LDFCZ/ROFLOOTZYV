package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class LoginRequestDTO {

    @NotBlank
    @Size(max = 20)
    @JsonProperty("user_name")
    private String userName;

    @NotBlank
    @Size(max = 120)
    @JsonProperty("password")
    private String password;
}
