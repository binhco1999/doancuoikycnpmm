package com.hrsproject.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hrsproject.backend.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	Boolean existsByempCode(String empCode);
	
	Boolean existsByemailId(String emailId);

}
