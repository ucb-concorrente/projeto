package com.anupama.sinha.controller;

import com.anupama.sinha.model.User;
import com.anupama.sinha.repository.UserRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.json.JSONObject;
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
@RequestMapping(path = "/users")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/")
  @CrossOrigin(origins = "http://localhost:8082")
  public List<User> getUsers() {
    return this.userRepository.findAll();
  }

  @PostMapping("/auth/{cpf}")
  @CrossOrigin(origins = "http://localhost:8082")
  public Boolean checkAuthentication(@PathVariable("cpf") String cpf, @RequestBody Map<String, String> password) {
    Boolean isAuthenticated = false;

    List<User> users = this.userRepository.findAll();

    for (User u : users) {
      System.out.println("u" + u.getPassword() + "pass" + password.get("password"));
      String incomingPassword = password.get("password");
      String savedPassword = u.getPassword();

      System.out.println("Saved" + savedPassword);
      System.out.println("Incoming" + incomingPassword);

      if (incomingPassword.equals(savedPassword)) {
        System.out.println("entrou");
        isAuthenticated = true;
        break;
      }
    }

    return isAuthenticated;
  }

  @GetMapping("/{id}")
  @CrossOrigin(origins = "http://localhost:8082")
  public Optional<User> getUserById(@PathVariable("id") Long id) {
    if (this.userRepository.findById(id).isPresent()) {
      return this.userRepository.findById(id);
    }
    return null;
  }

  @PostMapping("/add")
  @CrossOrigin(origins = "http://localhost:8082")
  public User addUser(@RequestBody User user) {
    this.userRepository.save(user);
    return user;
  }

  @DeleteMapping("/{id}")
  @CrossOrigin(origins = "http://localhost:8082")
  public void deleteUser(@PathVariable("id") Long id) {
    this.userRepository.deleteById(id);
  }

}
