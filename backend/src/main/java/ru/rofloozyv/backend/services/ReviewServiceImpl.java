package ru.rofloozyv.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.rofloozyv.backend.dto.FullReviewDTO;
import ru.rofloozyv.backend.dto.MessageResponseDTO;
import ru.rofloozyv.backend.mappers.ReviewListMapper;
import ru.rofloozyv.backend.mappers.ReviewMapper;
import ru.rofloozyv.backend.models.Review;
import ru.rofloozyv.backend.dto.MiniReviewDTO;
import ru.rofloozyv.backend.repositories.ReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService{

    private ReviewRepository reviewRepository;

    private ReviewMapper reviewMapper;

    private ReviewListMapper reviewListMapper;

    @Autowired
    public ReviewServiceImpl(ReviewRepository reviewRepository, ReviewMapper reviewMapper, ReviewListMapper reviewListMapper) {
        this.reviewRepository = reviewRepository;
        this.reviewMapper = reviewMapper;
        this.reviewListMapper = reviewListMapper;
    }

    @Override
    public ResponseEntity<List<MiniReviewDTO>> findReviewsByName(String name) {
        List<Review> reviewList = reviewRepository.findAllByReviewNameContainingIgnoreCase(name);

        if (reviewList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(reviewListMapper.toMiniReviewListDTO(reviewList), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<MiniReviewDTO>> findAllReviews() {
        List<Review> reviewList = (List<Review>) reviewRepository.findAll();

        if (reviewList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(reviewListMapper.toMiniReviewListDTO(reviewList), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> createNewReview(FullReviewDTO fullReviewDTO) {
        Review review = reviewMapper.toReviewModel(fullReviewDTO);

        reviewRepository.save(review);

        return ResponseEntity.ok(new MessageResponseDTO("new review successfully saved!"));
    }

    @Override
    public ResponseEntity<FullReviewDTO> getFullReview(Long id) {
        Optional<Review> review = reviewRepository.findById(id);

        if (review.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(reviewMapper.toFullReviewDTO(review.get()), HttpStatus.OK);
    }
}
