package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class MiniReviewDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("review_name")
    private String reviewName;

    @JsonProperty("author_name")
    private UserDTO user;

    @JsonProperty("short_description")
    private String shortDescription;

    @JsonProperty("grade")
    private String grade;
}
