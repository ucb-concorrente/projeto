package com.anupama.sinha.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
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
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String name;
  private String email;
  private String password;
  private String cpf;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinTable(name = "user_ticket", joinColumns = {
      @JoinColumn(name = "user_id", referencedColumnName = "id") }, inverseJoinColumns = {
          @JoinColumn(name = "ticket_id", referencedColumnName = "id") })
  private Ticket ticket;

}
