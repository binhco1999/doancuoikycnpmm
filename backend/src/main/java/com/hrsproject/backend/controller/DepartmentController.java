package com.hrsproject.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrsproject.backend.exeption.ResourceNotFoundException;
import com.hrsproject.backend.model.Department;
import com.hrsproject.backend.model.Employee;
import com.hrsproject.backend.repository.DepartmentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/test")
public class DepartmentController {
	
	@Autowired
	private DepartmentRepository departmentRepository;
	
	// get all department
		@GetMapping("/departments")
		public List<Department> getAllDepartment(){
			return departmentRepository.findAll();
		}		
		
		// create employee rest api
		@PostMapping("/departments")
		public Department createDepartment(@RequestBody Department department) {
			return departmentRepository.save(department);
		}
		
		// get employee by id rest api
		@GetMapping("/departments/{id}")
		public ResponseEntity<Department> getDepartmentById(@PathVariable Long id) {
			Department department = departmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Department not exist with id :" + id));
			return ResponseEntity.ok(department);
		}
		
		// update department rest api
		
		@PutMapping("/departments/{id}")
		public ResponseEntity<Department> updateDepartment(@PathVariable Long id, @RequestBody Department departmentDetails){
			Department department = departmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Department not exist with id :" + id));
			department.setDeptCode(departmentDetails.getDeptCode());
			department.setDeptName(departmentDetails.getDeptName());
			department.setDeptLocation(departmentDetails.getDeptLocation());
			
			Department updatedDepartment = departmentRepository.save(department);
			return ResponseEntity.ok(updatedDepartment);
		}
		
		// delete department rest api
		@DeleteMapping("/departments/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteDepartment(@PathVariable Long id){
			Department department = departmentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Department not exist with id :" + id));
			
			departmentRepository.delete(department);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
