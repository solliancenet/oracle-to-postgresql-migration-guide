import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionSpeakerService } from '../services/sessionspeaker.service';
import { SessionSpeaker } from '../models/session-speaker';
import { EventService } from '../services/event.service';
import { Event } from '../models/Event';

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

  constructor(private route: ActivatedRoute, private sessionSpeakerService: SessionSpeakerService, private eventService: EventService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.eventId = +params['eventId'];
    });


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


  ngOnDestroy(): void {

  }

}
