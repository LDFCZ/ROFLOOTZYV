package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CommentDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("author_name")
    private UserDTO user;

    @JsonProperty("text")
    private String commentText;

    @JsonProperty("grade")
    private String grade;
}
