package ru.rofloozyv.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.rofloozyv.backend.dto.CommentDTO;
import ru.rofloozyv.backend.services.CommentService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class CommentController {

    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("comments/{reviewId}")
    public ResponseEntity<List<CommentDTO>> getCommentsByReviewId (@PathVariable Long reviewId){
        try {
            return commentService.getReviewComments(reviewId);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("comments/{reviewId}")
    public ResponseEntity<?> addCommentToReview (@PathVariable Long reviewId, @Valid @RequestBody CommentDTO commentDTO) {
        try {
            return commentService.addNewComment(reviewId, commentDTO);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
