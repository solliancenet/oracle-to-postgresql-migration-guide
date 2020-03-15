import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../services/event-service';
import { Event} from '../models/Event';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.sass']
})
export class EventDashboardComponent implements OnInit, OnDestroy {

  conferenceEvents: Event[] = [];

  constructor(private eventService: EventService) { }


  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
        this.conferenceEvents = data;
    });

  }

  ngOnDestroy(): void {

  }
}
