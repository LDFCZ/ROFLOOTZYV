package ru.rofloozyv.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.rofloozyv.backend.dto.CommentDTO;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class CommentController {

    @GetMapping("comments/{reviewId}")
    public ResponseEntity<List<CommentDTO>> getCommentsByReviewId (@PathVariable Long reviewId){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("comments/{reviewId}")
    public ResponseEntity<?> addCommentToReview (@PathVariable String reviewId, @Valid @RequestBody CommentDTO commentDTO) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
