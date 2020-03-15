package com.yourcompany.conferencedemo.repositories;

import com.yourcompany.conferencedemo.models.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {
}
