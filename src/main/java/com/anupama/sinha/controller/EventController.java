package com.anupama.sinha.controller;

import com.anupama.sinha.model.Event;
import com.anupama.sinha.repository.EventRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/event")
@CrossOrigin(origins = "*")
public class EventController {

  @Autowired
  private EventRepository eventRepository;

  @GetMapping("/")
  public List<Event> getEvents() {
    return this.eventRepository.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Event> getEventById(@PathVariable("id") Long id) {
    if (this.eventRepository.findById(id).isPresent()) {
      return this.eventRepository.findById(id);
    }
    return null;
  }

  @PostMapping("/add")
  public Event addEvent(@RequestBody Event event) {
    this.eventRepository.save(event);
    return event;
  }

  @DeleteMapping("/{id}")
  public void deleteEvent(@PathVariable("id") Long id) {
    this.eventRepository.deleteById(id);
  }

}
