package com.hrsproject.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "departments")
public class Department {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "dept_code")
	private String deptCode;
	
	@Column(name = "dept_name")
	private String deptName;
	
	@Column(name = "dept_location")
	private String deptLocation;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDeptCode() {
		return deptCode;
	}

	public void setDeptCode(String deptCode) {
		this.deptCode = deptCode;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public String getDeptLocation() {
		return deptLocation;
	}

	public void setDeptLocation(String deptLocation) {
		this.deptLocation = deptLocation;
	}
	
	public Department() {
		
	}

	public Department(long id, String deptCode, String deptName, String deptLocation) {
		super();
		this.id = id;
		this.deptCode = deptCode;
		this.deptName = deptName;
		this.deptLocation = deptLocation;
	}
	
	
	

	
}
