package com.hrsproject.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "shifts")
public class Shift {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Column(name = "shift_code")
	private String shiftCode;
	
	
	@Column(name = "description")
	private String description;

	@NotBlank
	@Column(name = "time_in")
	private Integer timeIn;
	
	@NotBlank
	@Column(name="time_out")
	private Integer timeOut;
	
	public Shift() {
		
	}
	
	

	public Shift(String shiftCode, String description, Integer timeIn, Integer timeOut) {
		super();
		this.id=id;
		this.shiftCode = shiftCode;
		this.description = description;
		this.timeIn = timeIn;
		this.timeOut = timeOut;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getShiftCode() {
		return shiftCode;
	}

	public void setShiftCode(String shiftCode) {
		this.shiftCode = shiftCode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getTimeIn() {
		return timeIn;
	}

	public void setTimeIn(Integer timeIn) {
		this.timeIn = timeIn;
	}

	public Integer getTimeOut() {
		return timeOut;
	}

	public void setTimeOut(Integer timeOut) {
		this.timeOut = timeOut;
	}
	
	

}
