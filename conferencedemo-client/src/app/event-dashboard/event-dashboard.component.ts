import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EventService } from '../services/event.service';
import { Event} from '../models/Event';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.sass']
})
export class EventDashboardComponent implements OnInit, OnDestroy {

  conferenceEvents: Event[] = [];
  imgEvent: SafeResourceUrl;

  constructor(
    private eventService: EventService,
    private _sanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
        this.conferenceEvents = data;
    });
  }

  ngOnDestroy(): void {

  }
}
