package com.example.extra_hours_amadeus.service;

import com.example.extra_hours_amadeus.model.Employee;
import com.example.extra_hours_amadeus.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Optional<Employee> findById(Long id) { return employeeRepository.findById(id); }

    public List<Employee> getAllEmployees() { return employeeRepository.findAll(); }

    public Employee addEmployee(Employee employee) { return employeeRepository.save(employee); }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            Employee employee = optionalEmployee.get();

            employee.setName(employeeDetails.getName());
            employee.setPosition(employeeDetails.getPosition());
            employee.setSalary(employeeDetails.getSalary());
            employee.setManagerId(employeeDetails.getManagerId());
            employee.setManager(employeeDetails.getManager());

            return employeeRepository.save(employee);
        } else {
            return null;
        }
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

}
