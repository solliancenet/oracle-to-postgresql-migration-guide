package com.yourcompany.conferencedemo.repositories;

import com.yourcompany.conferencedemo.models.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
}
