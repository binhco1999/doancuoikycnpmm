package com.hrsproject.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hrsproject.backend.model.Position;

@Repository
public interface PositionRepository extends JpaRepository<Position, Long> {

}
