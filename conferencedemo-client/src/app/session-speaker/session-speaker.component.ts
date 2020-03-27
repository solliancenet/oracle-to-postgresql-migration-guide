import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionSpeakerService } from '../services/sessionspeaker.service';
import { SessionSpeaker } from '../models/session-speaker';
import { EventService } from '../services/event.service';
import { Event } from '../models/Event';
import { RegisterAttendeesService } from '../services/register-attendees.service';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-session-speaker',
  templateUrl: './session-speaker.component.html',
  styleUrls: ['./session-speaker.component.sass']
})
export class SessionSpeakerComponent implements OnInit, OnDestroy {

  conferenceSessionsSpeakers: SessionSpeaker[] = [];
  attendeeId: number = +sessionStorage.getItem('loggedInAttendeeId');

  event: Event;
  eventId: number;
  registration: Registration;
  registrationReponse: Registration[] = [];
  isSuccess: boolean;
  currentDate: any;

  constructor(private route: ActivatedRoute, private sessionSpeakerService: SessionSpeakerService, private eventService: EventService,
    private registerAttendeesService: RegisterAttendeesService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: {eventId: string}) =>{
      this.eventId = +params.eventId;
    })

    this.sessionSpeakerService.getSessionSpeaker(this.eventId).subscribe(data => {
      this.conferenceSessionsSpeakers = data;
    });

    this.eventService.getEvents().subscribe(data => {
      if (data.length > 0) {
        this.event = data.filter(a => a.id === this.eventId)[0];
      }
      else {
        this.event = null;
      }
    });
  }

  // Post Registration Method (Called on Button Click)
  postRegistration(sessionId: number) {
    this.registration = new Registration();
    this.registration.attendeeId = this.attendeeId;
    this.registration.sessionId = sessionId;
    this.currentDate = new Date();

    this.registerAttendeesService.postRegistration(this.registration).subscribe(data => {
      this.registrationReponse = data;
      if (data != null) {
        this.isSuccess = true;
        const sessionSpeaker = this.conferenceSessionsSpeakers.filter(a => a.sessionId === this.registration.sessionId)[0];
        sessionSpeaker.isRegistered = true;
      }
      else {
        this.isSuccess = false;
      }
    });
  }

  ngOnDestroy(): void {

  }

}
