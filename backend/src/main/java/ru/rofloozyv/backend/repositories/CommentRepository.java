package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rofloozyv.backend.entities.Comment;
import ru.rofloozyv.backend.entities.Review;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {

    public List<Comment> getCommentsByReview(Review review);
}
