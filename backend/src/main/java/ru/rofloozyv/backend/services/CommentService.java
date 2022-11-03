package ru.rofloozyv.backend.services;

import org.springframework.http.ResponseEntity;
import ru.rofloozyv.backend.dto.CommentDTO;

import java.util.List;

public interface CommentService {

    ResponseEntity<List<CommentDTO>> getReviewComments(Long id);

    ResponseEntity<?> addNewComment(Long reviewId, CommentDTO commentDTO);
}
