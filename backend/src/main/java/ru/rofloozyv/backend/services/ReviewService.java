package ru.rofloozyv.backend.services;

import org.springframework.http.ResponseEntity;
import ru.rofloozyv.backend.dto.FullReviewDTO;
import ru.rofloozyv.backend.dto.MiniReviewDTO;

import java.util.List;

public interface ReviewService {

    ResponseEntity<List<MiniReviewDTO>> findReviewsByName(String name);

    ResponseEntity<List<MiniReviewDTO>> findAllReviews();

    ResponseEntity<?> createNewReview(FullReviewDTO fullReviewDTO);

    ResponseEntity<FullReviewDTO> getFullReview(Long id);
}
