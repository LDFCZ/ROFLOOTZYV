package ru.rofloozyv.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rofloozyv.backend.entities.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    public Optional<User> findByUserName(String userName);

    public boolean existsByUserName(String userName);
}
