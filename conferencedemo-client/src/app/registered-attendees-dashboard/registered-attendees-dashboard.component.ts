import { Component, OnInit, OnDestroy } from '@angular/core';
import { AttendeeService } from '../services/attendee.service';
import { Attendee } from '../models/attendee';

@Component({
  selector: 'app-registered-attendees-dashboard',
  templateUrl: './registered-attendees-dashboard.component.html'
})
export class RegisteredAttendeesDashboardComponent implements OnInit, OnDestroy {

  attendees: Attendee[] = [];

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit(): void {
    this.attendeeService.getAttendees().subscribe(data => {
      this.attendees = data;
    });
  }

  ngOnDestroy(): void {
  }

}
