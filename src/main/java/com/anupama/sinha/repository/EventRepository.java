package com.anupama.sinha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anupama.sinha.model.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

}