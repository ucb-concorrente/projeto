package com.anupama.sinha.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Boolean halfprice;

    @ManyToOne
    @JoinColumn(name = "id_event", referencedColumnName = "id")//id do evento
    private Event event;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")//id do user
    private User user;

}
