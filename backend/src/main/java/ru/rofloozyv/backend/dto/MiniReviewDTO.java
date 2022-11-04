package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class MiniReviewDTO {

    @JsonProperty("id")
    private Long id;

    @NotBlank
    @Size(max = 25)
    @JsonProperty("review_name")
    private String reviewName;

    @NotBlank
    @JsonProperty("author_name")
    private UserDTO user;

    @NotBlank
    @Size(max = 50)
    @JsonProperty("short_description")
    private String shortDescription;

    @NotBlank
    @Size(max = 50)
    @JsonProperty("grade")
    private String grade;
}
