package ru.rofloozyv.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.rofloozyv.backend.models.FullReview;
import ru.rofloozyv.backend.models.MiniRewiewList;

import javax.validation.Valid;

@RestController
@RequestMapping("/")
public class ReviewController {

    @GetMapping("reviews")
    public ResponseEntity<MiniRewiewList> getAllMiniReviews() {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("reviews/{id}")
    public ResponseEntity<FullReview> getFullReviewById(@PathVariable Long id) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("reviews")
    public ResponseEntity<?> createNewReview(@Valid @RequestBody FullReview fullReview) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
