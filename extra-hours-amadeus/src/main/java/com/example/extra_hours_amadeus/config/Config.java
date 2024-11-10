package com.example.extra_hours_amadeus.config;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalTime;

@Entity
public class Config {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double diurnal_multiplier;
    private double nocturnal_multiplier;
    private double diurnal_holiday_multiplier;
    private double nocturnal_holiday_multiplier;
    private LocalTime diurnal_start;
    private LocalTime diurnal_end;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getdiurnal_multiplier() {
        return diurnal_multiplier;
    }

    public void setdiurnal_multiplier(double diurnal_multiplier) {
        this.diurnal_multiplier = diurnal_multiplier;
    }

    public double getnocturnal_multiplier() {
        return nocturnal_multiplier;
    }

    public void setnocturnal_multiplier(double nocturnal_multiplier) {
        this.nocturnal_multiplier = nocturnal_multiplier;
    }

    public double getdiurnal_holiday_multiplier() {
        return diurnal_holiday_multiplier;
    }

    public void setdiurnal_holiday_multiplier(double diurnal_holiday_multiplier) {
        this.diurnal_holiday_multiplier = diurnal_holiday_multiplier;
    }

    public double getnocturnal_holiday_multiplier() {
        return nocturnal_holiday_multiplier;
    }

    public void setnocturnal_holiday_multiplier(double nocturnal_holiday_multiplier) {
        this.nocturnal_holiday_multiplier = nocturnal_holiday_multiplier;
    }

    public LocalTime getdiurnal_start() {
        return diurnal_start;
    }

    public void setdiurnal_start(LocalTime diurnal_start) {
        this.diurnal_start = diurnal_start;
    }

    public LocalTime getdiurnal_end() {
        return diurnal_end;
    }

    public void setdiurnal_end(LocalTime diurnal_end) {
        this.diurnal_end = diurnal_end;
    }
}
