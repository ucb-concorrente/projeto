package com.anupama.sinha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.anupama.sinha.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

  public User findByCpfEquals(String cpf);
}