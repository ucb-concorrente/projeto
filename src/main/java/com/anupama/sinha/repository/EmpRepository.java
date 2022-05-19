package com.anupama.sinha.repository;

import com.anupama.sinha.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpRepository extends JpaRepository<Employee,Integer> {

}
