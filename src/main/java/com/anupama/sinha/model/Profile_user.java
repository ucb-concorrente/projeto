package com.anupama.sinha.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
public class Profile_user {
  @OneToOne
  @JoinColumn(name = "id_profile", referencedColumnName = "id")
  private Profile profile;
  @OneToOne
  @JoinColumn(name = "id_user", referencedColumnName = "id")
  private User user;

}
