package ru.rofloozyv.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.rofloozyv.backend.dto.CommentDTO;
import ru.rofloozyv.backend.dto.MessageResponseDTO;
import ru.rofloozyv.backend.mappers.CommentListMapper;
import ru.rofloozyv.backend.mappers.CommentMapper;
import ru.rofloozyv.backend.models.Comment;
import ru.rofloozyv.backend.models.Review;
import ru.rofloozyv.backend.repositories.CommentRepository;
import ru.rofloozyv.backend.repositories.ReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;

    private ReviewRepository reviewRepository;

    private CommentListMapper commentListMapper;

    private CommentMapper commentMapper;

    @Autowired
    public CommentServiceImpl
            (CommentRepository commentRepository, ReviewRepository reviewRepository,
             CommentListMapper commentListMapper, CommentMapper commentMapper) {
        this.commentRepository = commentRepository;
        this.reviewRepository = reviewRepository;
        this.commentListMapper = commentListMapper;
        this.commentMapper = commentMapper;
    }

    public ResponseEntity<List<CommentDTO>> getReviewComments(Long id) {
        List<Comment> commentList = commentRepository.getCommentsByReviewId(id);

        if (commentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(commentListMapper.toCommentListDTO(commentList), HttpStatus.OK);
    }

    public ResponseEntity<?> addNewComment(Long reviewId, CommentDTO commentDTO) {
        Optional<Review> review = reviewRepository.findById(reviewId);

        if (review.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponseDTO("review not found"));
        }

        review.get().getComments().add(commentMapper.toCommentModel(commentDTO));
        reviewRepository.save(review.get());
        return ResponseEntity.ok(new MessageResponseDTO("new comment successfully saved"));
    }
}