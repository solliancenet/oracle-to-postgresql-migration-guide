import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakerComponent } from './speaker/speaker.component';
import {SessionSpeakerComponent} from './session-speaker/session-speaker.component'
import { RegisteredAttendeesDashboardComponent } from './registered-attendees-dashboard/registered-attendees-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventDashboardComponent,
    SessionsComponent,
    SpeakerComponent,
    SessionSpeakerComponent,
    RegisteredAttendeesDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
