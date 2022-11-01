package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rofloozyv.backend.models.Review;

import java.util.List;


@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {
    List<Review> findAllByNameContainingIgnoreCaseAnd(String name);
}
