package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.rofloozyv.backend.models.Review;

import java.util.List;


public interface ReviewRepository extends CrudRepository<Review, Long> {
    List<Review> findAllByReviewNameContainingIgnoreCase(String name);
}
