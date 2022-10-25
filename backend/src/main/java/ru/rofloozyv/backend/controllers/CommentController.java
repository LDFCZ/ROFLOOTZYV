package ru.rofloozyv.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.rofloozyv.backend.models.Comment;
import ru.rofloozyv.backend.models.CommentList;

import javax.validation.Valid;

@RestController
@RequestMapping("/")
public class CommentController {

    @GetMapping("comments/{reviewId}")
    public ResponseEntity<CommentList> getCommentsByReviewId (@PathVariable Long reviewId){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("comments/{reviewId}")
    public ResponseEntity<?> addCommentToReview (@PathVariable String reviewId, @Valid @RequestBody Comment comment) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
