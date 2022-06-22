package com.anupama.sinha.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
  
  @OneToOne
  private Profile_user profile_user;
  
  private String name;
  private String email;
  private String password;
  private String cpf;


  //Acredito q o relacionamento seja one to many, pois um usuario pode ter varios tickets, e um ticket tem apenas um usuario
  @OneToMany(mappedBy = "user")
  private List<Ticket> ticket;

}
