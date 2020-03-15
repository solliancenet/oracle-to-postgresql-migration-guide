package com.yourcompany.conferencedemo.controllers;


import com.yourcompany.conferencedemo.models.Speaker;
import com.yourcompany.conferencedemo.repositories.SpeakerRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/speakers")
@CrossOrigin(origins="http://localhost:4200")
public class SpeakerController {

    private final SpeakerRepository speakerRepository;

    public SpeakerController(SpeakerRepository speakerRepository) {

        this.speakerRepository = speakerRepository;
    }

    @GetMapping
    public List<Speaker> getSpeakers() {
        return speakerRepository.findAll();
    }
}
