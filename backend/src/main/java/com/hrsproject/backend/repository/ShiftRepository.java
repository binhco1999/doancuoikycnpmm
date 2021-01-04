package com.hrsproject.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hrsproject.backend.model.Shift;

@Repository
public interface ShiftRepository extends JpaRepository<Shift, Long> {

}
