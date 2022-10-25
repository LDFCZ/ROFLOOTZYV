package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.rofloozyv.backend.entities.Comment;

public interface CommentRepository extends CrudRepository<Comment, Long> {
}
