package ru.rofloozyv.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.rofloozyv.backend.models.Review;
import ru.rofloozyv.backend.dto.MiniReviewDTO;
import ru.rofloozyv.backend.repositories.ReviewRepository;

import java.util.List;

@Service
public class ReviewService {

    private ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public ResponseEntity<List<MiniReviewDTO>> findReviewsByName(String name) {
        List<Review> reviewList = reviewRepository.findAllByNameContainingIgnoreCaseAnd(name);
        return null;
    }

    public ResponseEntity<List<MiniReviewDTO>> findAllReviews() {
        return null;
    }
}
