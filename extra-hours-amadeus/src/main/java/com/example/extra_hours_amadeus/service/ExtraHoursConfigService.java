package com.example.extra_hours_amadeus.service;

import com.example.extra_hours_amadeus.model.ExtraHoursConfig;
import com.example.extra_hours_amadeus.repository.ExtraHoursConfigRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExtraHoursConfigService {

    private final ExtraHoursConfigRepository configRepository;

    @Autowired
    public ExtraHoursConfigService(ExtraHoursConfigRepository configRepository) {
        this.configRepository = configRepository;
    }

    public ExtraHoursConfig getConfig() {
        return configRepository.findById(1L).orElseThrow(() -> new RuntimeException("Config not found"));
    }

    public ExtraHoursConfig updateConfig(ExtraHoursConfig config) {
        config.setId(1L); // Asegurarse de que solo existe un registro
        return configRepository.save(config);
    }
}
