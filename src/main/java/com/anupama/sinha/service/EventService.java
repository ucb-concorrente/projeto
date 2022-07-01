package com.anupama.sinha.service;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.anupama.sinha.model.Event;
import com.anupama.sinha.repository.EventRepository;

@Service
public class EventService {

  @Autowired
  private EventRepository eventRepository;

  @Async
  public CompletableFuture<List<Event>> getAllEvents() {
    final List<Event> events = eventRepository.findAll();
    return CompletableFuture.completedFuture(events);
  }
}
