package com.example.extra_hours_amadeus.repository;

import com.example.extra_hours_amadeus.model.ExtraHoursConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExtraHoursConfigRepository extends JpaRepository<ExtraHoursConfig, Long>  {
}
