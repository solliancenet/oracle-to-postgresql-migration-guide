package com.yourcompany.conferencedemo.controllers;


import com.yourcompany.conferencedemo.models.Attendee;
import com.yourcompany.conferencedemo.repositories.AttendeeRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/attendees")
@CrossOrigin(origins="http://localhost:4200")
public class AttendeeController  {

    private final AttendeeRepository attendeeRepository;

    public AttendeeController(AttendeeRepository attendeeRepository) {
        this.attendeeRepository = attendeeRepository;
    }


    @GetMapping
    public List<Attendee> getAttendees() {
        return attendeeRepository.findAll();
    }

    @GetMapping("/randomAttendee")
    public Attendee getRandomAttendInfo () {
        return null;
    }
}
