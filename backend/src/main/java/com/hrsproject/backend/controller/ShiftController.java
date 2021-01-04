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
import com.hrsproject.backend.model.Employee;
import com.hrsproject.backend.model.Shift;
import com.hrsproject.backend.repository.ShiftRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/test")
public class ShiftController {
	
	@Autowired
	private ShiftRepository shiftRepository;
	
	
		@GetMapping("/shifts")
		public List<Shift> getAllShift(){
			return shiftRepository.findAll();
		}
		
		
		@PostMapping("/shifts")
		public Shift createShift(@RequestBody Shift shift) {
			return shiftRepository.save(shift);
		}
		
		// get employee by id rest api
		@GetMapping("/shifts/{id}")
		public ResponseEntity<Shift> getShiftById(@PathVariable Long id) {
			Shift shift = shiftRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Shift not exist with id :" + id));
			return ResponseEntity.ok(shift);
		}
		
		// update shift rest api
		
		@PutMapping("/shifts/{id}")
		public ResponseEntity<Shift> updateShift(@PathVariable Long id, @RequestBody Shift shiftDetails){
			Shift shift = shiftRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Shift not exist with id :" + id));
			
			shift.setShiftCode(shiftDetails.getShiftCode());
			shift.setDescription(shiftDetails.getDescription());
			shift.setTimeIn(shiftDetails.getTimeIn());
			shift.setTimeOut(shiftDetails.getTimeOut());
			
			Shift updatedShift = shiftRepository.save(shift);
			return ResponseEntity.ok(updatedShift);
		}
		
		// delete shift rest api
		@DeleteMapping("/shifts/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteShift(@PathVariable Long id){
			Shift shift = shiftRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Shift not exist with id :" + id));
			
			shiftRepository.delete(shift);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
