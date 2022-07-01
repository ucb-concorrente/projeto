package com.anupama.sinha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anupama.sinha.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long>{
    
}
