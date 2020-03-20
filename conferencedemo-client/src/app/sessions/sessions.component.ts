import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Session } from '../models/session';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.sass']
})
export class SessionsComponent implements OnInit, OnDestroy {

  conferenceSessions: Session[] = [];

  constructor(private sessionService: SessionService) { }



  ngOnInit(): void {
    this.sessionService.getSessions().subscribe(data => {
      this.conferenceSessions = data;
    });

  }

  ngOnDestroy(): void {

  }

}
