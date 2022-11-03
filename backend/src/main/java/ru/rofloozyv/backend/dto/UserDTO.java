package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserDTO {

    @JsonProperty("id")
    private Long id;

    @NotBlank
    @Size(max = 20)
    @JsonProperty("user_name")
    private String userName;

    @NotBlank
    @Size(max = 120)
    @JsonProperty("password")
    private String password;

    public UserDTO() {}

    public UserDTO(Long id, String userName, String password) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }
}
