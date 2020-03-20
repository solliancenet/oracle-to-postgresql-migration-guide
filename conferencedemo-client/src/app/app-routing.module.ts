import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { SessionsComponent } from './sessions/sessions.component';


const routes: Routes = [
  { path: 'event-dashboard', component: EventDashboardComponent },
  { path: 'session', component: SessionsComponent },
  { path: '', component: EventDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
