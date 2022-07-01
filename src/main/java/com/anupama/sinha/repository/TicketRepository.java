package com.anupama.sinha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anupama.sinha.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long>{

}
