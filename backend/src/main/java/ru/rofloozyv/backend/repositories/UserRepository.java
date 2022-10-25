package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.rofloozyv.backend.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
