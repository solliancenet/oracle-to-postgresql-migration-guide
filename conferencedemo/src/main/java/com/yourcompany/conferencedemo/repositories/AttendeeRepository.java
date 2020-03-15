package com.yourcompany.conferencedemo.repositories;


import com.yourcompany.conferencedemo.models.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {


}
