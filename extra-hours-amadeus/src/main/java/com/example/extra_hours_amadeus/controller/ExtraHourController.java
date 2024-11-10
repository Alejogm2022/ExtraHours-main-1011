package com.example.extra_hours_amadeus.controller;

import com.example.extra_hours_amadeus.model.ExtraHour;
import com.example.extra_hours_amadeus.repository.ExtraHourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/extra-hour")
public class ExtraHourController {

    @Autowired
    private ExtraHourRepository extraHourRepository;

    @PostMapping
    public ResponseEntity<ExtraHour> createExtraHour(@RequestBody ExtraHour extraHour) {
        ExtraHour savedExtraHour = extraHourRepository.save(extraHour);
        return ResponseEntity.ok(savedExtraHour);
    }

    @GetMapping
    public List<ExtraHour> getAllExtraHours() {
        return extraHourRepository.findAll();
    }
}
