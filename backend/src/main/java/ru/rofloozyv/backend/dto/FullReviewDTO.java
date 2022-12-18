package ru.rofloozyv.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class FullReviewDTO {

    @JsonProperty("id")
    private Long id;

    @NotBlank
    @Size(max = 25)
    @JsonProperty("review_name")
    private String reviewName;

    @JsonProperty("author_name")
    private UserDTO user;
    
    @NotBlank
    @Size(max = 50)
    @JsonProperty("short_description")
    private String shortDescription;

    @NotBlank
    @Size(max = 1000)
    @JsonProperty("full_description")
    private String fullDescription;

    @NotBlank
    @Size(max = 50)
    @JsonProperty("grade")
    private String grade;

    @JsonProperty("comments")
    private List<CommentDTO> comments;
}
