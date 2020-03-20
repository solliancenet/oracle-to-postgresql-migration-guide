import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionSpeakerComponent } from './session-speaker/session-speaker.component'


const routes: Routes = [
  { path: 'event-dashboard', component: EventDashboardComponent },
  { path: 'session', component: SessionsComponent },
  { path: '', redirectTo: 'event-dashboard', pathMatch: 'full' },
  { path: 'sessionspeaker/:eventId', component: SessionSpeakerComponent },
  { path: '', component: EventDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
