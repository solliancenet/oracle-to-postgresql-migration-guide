package com.yourcompany.conferencedemo.services;

import com.yourcompany.conferencedemo.models.Session;
import com.yourcompany.conferencedemo.repositories.SessionRepository;
import org.springframework.stereotype.Service;

@Service
public class SessionServiceImpl {

    private final SessionRepository sessionRepository;

    public SessionServiceImpl(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }


//    public List<Session>

}
