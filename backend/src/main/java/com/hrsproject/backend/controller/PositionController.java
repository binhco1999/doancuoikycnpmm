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
import com.hrsproject.backend.model.Position;
import com.hrsproject.backend.repository.PositionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/test")
public class PositionController {
	@Autowired
	private PositionRepository positionRepository;
	
	@GetMapping("/positions")
	public List<Position> getAllPosition(){
		return positionRepository.findAll();
	}
	
	
	@PostMapping("/positions")
	public Position createPosition(@RequestBody Position position) {
		return positionRepository.save(position);
	}
	
	// get employee by id rest api
	@GetMapping("/positions/{id}")
	public ResponseEntity<Position> getPositionById(@PathVariable Long id) {
		Position position = positionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Position not exist with id :" + id));
		return ResponseEntity.ok(position);
	}
	
	// update position rest api
	
	@PutMapping("/positions/{id}")
	public ResponseEntity<Position> updatePosition(@PathVariable Long id, @RequestBody Position positionDetail){
		Position position = positionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Position not exist with id :" + id));
		
		position.setPositionName(positionDetail.getPositionName());
		
		Position updatedPosition = positionRepository.save(position);
		return ResponseEntity.ok(updatedPosition);
	}
	
	// delete position rest api
	@DeleteMapping("/positions/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePosition(@PathVariable Long id){
		Position position = positionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Position not exist with id :" + id));
		
		positionRepository.delete(position);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
