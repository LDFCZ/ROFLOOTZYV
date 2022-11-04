package ru.rofloozyv.backend.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import ru.rofloozyv.backend.dto.CommentDTO;
import ru.rofloozyv.backend.models.Comment;

import java.util.List;

@Mapper(componentModel = "spring", uses = CommentMapper.class, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface CommentListMapper {

    List<CommentDTO> toCommentListDTO(List<Comment> commentList);

    List<Comment> toCommentListModel(List<CommentDTO> commentDTOList);
}
