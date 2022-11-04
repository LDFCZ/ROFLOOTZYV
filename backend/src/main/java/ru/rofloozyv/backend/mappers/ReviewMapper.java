package ru.rofloozyv.backend.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import ru.rofloozyv.backend.dto.FullReviewDTO;
import ru.rofloozyv.backend.dto.MiniReviewDTO;
import ru.rofloozyv.backend.models.Review;

@Mapper(componentModel = "spring", uses = {UserMapper.class, CommentListMapper.class}, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface ReviewMapper {

    MiniReviewDTO toMiniReviewDTO(Review review);

    FullReviewDTO toFullReviewDTO(Review review);

    Review toReviewModel(FullReviewDTO fullReviewDTO);
}
