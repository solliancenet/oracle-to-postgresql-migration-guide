package com.yourcompany.conferencedemo.controllers;

import com.yourcompany.conferencedemo.models.Session;
import com.yourcompany.conferencedemo.repositories.SessionRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sessions")
@CrossOrigin(origins="http://localhost:4200")
public class SessionController {


    private final SessionRepository sessionRepository;

    public SessionController(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }


    @GetMapping
    public List<Session> getSessions() {
        return sessionRepository.findAll();
    }

}
