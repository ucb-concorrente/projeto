package com.anupama.sinha.controller;

import com.anupama.sinha.model.Employee;
//import com.anupama.sinha.repository.EmpRepository;
import com.anupama.sinha.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmpController {

    @Autowired
    private EmpRepository empRepository;

    @GetMapping("/test")
    public String testApplication(){
        return "Hello World";
    }

    @GetMapping("/emp")
    public List<Employee> getAllEmployees() {
        return empRepository.findAll();
    }
}
