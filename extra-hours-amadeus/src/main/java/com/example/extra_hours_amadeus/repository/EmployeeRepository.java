package com.example.extra_hours_amadeus.repository;

import com.example.extra_hours_amadeus.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
