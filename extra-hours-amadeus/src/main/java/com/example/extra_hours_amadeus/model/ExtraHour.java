package com.example.extra_hours_amadeus.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "extra_hours")
public class ExtraHour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer registry;
    private Long id;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private Double diurnal;
    private Double nocturnal;
    private Double diurnalHoliday;
    private Double nocturnalHoliday;
    private Double extrasHours;
    private String observations;

    public Integer getRegistry() {
        return registry;
    }

    public void setRegistry(Integer registry) {
        this.registry = registry;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public Double getDiurnal() {
        return diurnal;
    }

    public void setDiurnal(Double diurnal) {
        this.diurnal = diurnal;
    }

    public Double getNocturnal() {
        return nocturnal;
    }

    public void setNocturnal(Double nocturnal) {
        this.nocturnal = nocturnal;
    }

    public Double getDiurnalHoliday() {
        return diurnalHoliday;
    }

    public void setDiurnalHoliday(Double diurnalHoliday) {
        this.diurnalHoliday = diurnalHoliday;
    }

    public Double getNocturnalHoliday() {
        return nocturnalHoliday;
    }

    public void setNocturnalHoliday(Double nocturnalHoliday) {
        this.nocturnalHoliday = nocturnalHoliday;
    }

    public Double getExtrasHours() {
        return extrasHours;
    }

    public void setExtrasHours(Double extrasHours) {
        this.extrasHours = extrasHours;
    }

    public String getObservations() {
        return observations;
    }

    public void setObservations(String observations) {
        this.observations = observations;
    }
}
