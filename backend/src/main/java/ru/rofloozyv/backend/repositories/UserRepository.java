package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.rofloozyv.backend.models.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUserName(String userName);

    boolean existsByUserName(String userName);
}
