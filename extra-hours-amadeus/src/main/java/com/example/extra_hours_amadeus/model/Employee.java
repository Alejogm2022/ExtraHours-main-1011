package com.example.extra_hours_amadeus.model;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @Column(name = "id", nullable = false)
    private Long   id;
    private String name;
    private String position;
    private Double salary;
    private String manager;

    @Column(name = "managerId", nullable = false)
    private int managerId;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public int getManagerId() {
        return managerId;
    }

    public void setManagerId(int managerId) {
        this.managerId = managerId;
    }
}
