package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class UserDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("user_name")
    private String userName;
}
