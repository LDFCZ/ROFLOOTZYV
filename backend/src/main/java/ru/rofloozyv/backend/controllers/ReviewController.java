package ru.rofloozyv.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.rofloozyv.backend.dto.FullReviewDTO;
import ru.rofloozyv.backend.dto.MiniReviewDTO;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/")
public class ReviewController {

    @GetMapping("reviews")
    public ResponseEntity<List<MiniReviewDTO>> getAllMiniReviews(@RequestParam(required = false) String name) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("reviews/{id}")
    public ResponseEntity<FullReviewDTO> getFullReviewById(@PathVariable Long id) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("reviews")
    public ResponseEntity<?> createNewReview(@Valid @RequestBody FullReviewDTO fullReviewDTO) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
