package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class CommentDTO {

    @JsonProperty("id")
    private Long id;

    @NotBlank
    @JsonProperty("author_name")
    private UserDTO user;

    @NotBlank
    @Size(max = 1000)
    @JsonProperty("text")
    private String commentText;

    @NotBlank
    @Size(max = 50)
    @JsonProperty("grade")
    private String grade;
}
