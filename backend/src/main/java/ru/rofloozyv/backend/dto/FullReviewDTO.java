package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.Column;
import java.util.List;

@Data
public class FullReviewDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("review_name")
    private String name;

    @JsonProperty("author_name")
    private UserDTO user;

    @JsonProperty("short_description")
    private String shortDescription;

    @JsonProperty("full_description")
    private String fullDescription;

    @JsonProperty("grade")
    private String grade;

    @JsonProperty("comments")
    private List<CommentDTO> comments;
}
