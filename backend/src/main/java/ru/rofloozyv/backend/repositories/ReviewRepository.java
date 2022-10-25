package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.rofloozyv.backend.entities.Review;

public interface ReviewRepository extends CrudRepository<Review, Long> {
}
