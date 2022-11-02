package ru.rofloozyv.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.rofloozyv.backend.dto.CommentDTO;
import ru.rofloozyv.backend.mappers.CommentListMapper;
import ru.rofloozyv.backend.models.Comment;
import ru.rofloozyv.backend.repositories.CommentRepository;
import ru.rofloozyv.backend.repositories.ReviewRepository;

import java.util.List;

@Service
public class CommentServiceImpl {

    private CommentRepository commentRepository;

    private CommentListMapper commentListMapper;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository, CommentListMapper commentListMapper) {
        this.commentRepository = commentRepository;
        this.commentListMapper = commentListMapper;
    }

    public ResponseEntity<List<CommentDTO>> getReviewComments(Long id) {
        List<Comment> commentList = commentRepository.getCommentsByReviewId(id);

        if (commentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(commentListMapper.toCommentListDTO(commentList), HttpStatus.OK);
    }
}
