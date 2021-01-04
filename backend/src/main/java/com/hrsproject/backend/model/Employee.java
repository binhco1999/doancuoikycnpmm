package com.hrsproject.backend.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.hrsproject.backend.model.Department;


import lombok.Data;

@Entity
@Data
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "emp_code")
	private String empCode;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	
	@Column(name="gender")
	private Boolean gender;
	
	@Column(name = "date_of_birth")
	private LocalDate dateOfBirth;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "phonenumber")
	private long phoneNumber;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "start_date")
	private LocalDate startDate;
	
	@Column(name = "end_date")
	private LocalDate endDate;
	
	@ManyToOne
	@JoinColumn(name="deptid")
	private Department department;
	
	
	
	public Employee() {
		
	}
	
	public Employee(String empCode, String firstName, String lastName,LocalDate dateOfBirth,String address,long phoneNumber, String emailId, LocalDate startDate,LocalDate endDate) {
		super();
		this.empCode = empCode;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender=gender;
		this.dateOfBirth =dateOfBirth;
		this.address=address;
		this.phoneNumber=phoneNumber;
		this.emailId = emailId;
		this.startDate=startDate;
		this.endDate=endDate;
		
	}
	public Employee(String empCode, String firstName, String lastName,LocalDate dateOfBirth,String address,long phoneNumber, String emailId, LocalDate startDate,LocalDate endDate, Department dept) {
		super();
		this.empCode = empCode;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender=gender;
		this.dateOfBirth =dateOfBirth;
		this.address=address;
		this.phoneNumber=phoneNumber;
		this.emailId = emailId;
		this.startDate=startDate;
		this.endDate=endDate;
		this.department=dept;
		
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getEmpCode() {
		return empCode;
	}

	public void setEmpCode(String empCode) {
		this.empCode = empCode;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Boolean getGender()
	{
		return gender;
	}
	public void setGender(Boolean gender) {
		this.gender=gender;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
	

	
	
	
}
