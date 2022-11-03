package ru.rofloozyv.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.rofloozyv.backend.dto.FullReviewDTO;
import ru.rofloozyv.backend.dto.MiniReviewDTO;
import ru.rofloozyv.backend.services.ReviewService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class ReviewController {

    private ReviewService reviewService;

    public  ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("reviews")
    public ResponseEntity<List<MiniReviewDTO>> getAllMiniReviews(@RequestParam(required = false) String name) {
        try {
            if (name != null)
                return reviewService.findReviewsByName(name);
            return reviewService.findAllReviews();
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("reviews/{id}")
    public ResponseEntity<FullReviewDTO> getFullReviewById(@PathVariable Long id) {
        try {
            return reviewService.getFullReview(id);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("reviews")
    public ResponseEntity<?> createNewReview(@Valid @RequestBody FullReviewDTO fullReviewDTO) {
        try {
            return reviewService.createNewReview(fullReviewDTO);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
