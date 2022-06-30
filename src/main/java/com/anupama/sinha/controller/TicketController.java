package com.anupama.sinha.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.anupama.sinha.model.Ticket;
import com.anupama.sinha.repository.TicketRepository;

public class TicketController {

  @Autowired
  private TicketRepository ticketRepository;

  @GetMapping("/")
  public List<Ticket> getTickets() {
    return this.ticketRepository.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Ticket> getTicketById(@PathVariable("id") Long id) {
    if (this.ticketRepository.findById(id).isPresent()) {
      return this.ticketRepository.findById(id);
    }
    return null;
  }

  @PostMapping("/add")
  public Ticket addTicket(@RequestBody Ticket Ticket) {
    this.ticketRepository.save(Ticket);
    return Ticket;
  }

  @DeleteMapping("/{id}")
  public void deleteTicket(@PathVariable("id") Long id) {
    this.ticketRepository.deleteById(id);
  }
}
