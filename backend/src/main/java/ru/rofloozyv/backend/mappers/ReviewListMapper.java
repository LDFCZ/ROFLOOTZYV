package ru.rofloozyv.backend.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import ru.rofloozyv.backend.dto.MiniReviewDTO;
import ru.rofloozyv.backend.models.Review;

import java.util.List;

@Mapper(componentModel = "spring", uses = ReviewMapper.class, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface ReviewListMapper {

    List<MiniReviewDTO> toMiniReviewListDTO(List<Review> reviewList);

}
