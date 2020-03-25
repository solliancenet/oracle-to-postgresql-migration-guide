import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterAttendeesService } from '../services/register-attendees.service';
import { Attendee} from '../models/attendee';

@Component({
  selector: 'app-registered-attendees-dashboard',
  templateUrl: './registered-attendees-dashboard.component.html',
  styleUrls: ['./registered-attendees-dashboard.component.sass']
})
export class RegisteredAttendeesDashboardComponent implements OnInit, OnDestroy {

  dtattendee: Attendee[] = [];

  constructor(private registerAttendeeService: RegisterAttendeesService) { }

  ngOnInit(): void {
    this.registerAttendeeService.getAttendees().subscribe(data => {     
      this.dtattendee = data;
    });
  }

  ngOnDestroy(): void {

  }

}
