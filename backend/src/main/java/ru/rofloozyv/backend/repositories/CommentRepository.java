package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rofloozyv.backend.models.Comment;
import ru.rofloozyv.backend.models.Review;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {

    List<Comment> getCommentsByReview(Review review);
}
