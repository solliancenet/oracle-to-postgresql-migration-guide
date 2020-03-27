import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionSpeakerComponent } from './session-speaker/session-speaker.component';
import { RegisterAttendeesComponent } from './register-attendees/Register-Attendees.component';
import { RegisteredAttendeesDashboardComponent } from './registered-attendees-dashboard/registered-attendees-dashboard.component';
import { SpeakerComponent } from './speaker/speaker.component'


const routes: Routes = [
  { path: 'event-dashboard', component: EventDashboardComponent },
  { path: 'session', component: SessionsComponent },
  { path: 'registration/:sessionId', component: RegisterAttendeesComponent },
  { path: 'registration', component: RegisterAttendeesComponent },
  { path: '', redirectTo: 'event-dashboard', pathMatch: 'full' },
  { path: 'sessionspeaker/:eventId', component: SessionSpeakerComponent },
  { path: 'attendees', component: RegisteredAttendeesDashboardComponent },
  { path: 'speaker/:speakerId', component: SpeakerComponent },
  { path: '', component: EventDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
