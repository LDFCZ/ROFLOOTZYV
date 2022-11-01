package ru.rofloozyv.backend.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import ru.rofloozyv.backend.dto.CommentDTO;
import ru.rofloozyv.backend.models.Comment;

@Mapper(componentModel = "spring", uses = UserMapper.class, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface CommentMapper {

    CommentDTO toCommentDTO(Comment comment);

    Comment toCommentModel(CommentDTO commentDTO);
}
