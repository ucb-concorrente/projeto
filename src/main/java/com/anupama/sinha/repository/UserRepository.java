package com.anupama.sinha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anupama.sinha.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}