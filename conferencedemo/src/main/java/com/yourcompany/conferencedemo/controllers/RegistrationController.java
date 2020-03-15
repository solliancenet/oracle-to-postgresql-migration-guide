package com.yourcompany.conferencedemo.controllers;


import com.yourcompany.conferencedemo.models.Registration;
import com.yourcompany.conferencedemo.repositories.RegistrationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/registrations")
@CrossOrigin(origins="http://localhost:4200")
public class RegistrationController {

    private final RegistrationRepository registrationRepository;

    public RegistrationController(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }


    @GetMapping
    public List<Registration> getRegistrations() {
        return registrationRepository.findAll();
    }

}
