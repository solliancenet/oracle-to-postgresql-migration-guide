import { NgModule, Pipe, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterAttendeesService } from '../services/register-attendees.service';
import { Attendee } from '../models/attendee';
import { Registration } from '../models/registration';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  ControlContainer,
  FormBuilder
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ngModuleJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-register-attendees',
  templateUrl: './register-attendees.component.html',
  styleUrls: ['./register-attendees.component.sass']
})

export class RegisterAttendeesComponent implements OnInit, OnDestroy {

  attendees: Attendee[] = [];
  dtRegistration: Registration[] = [];
  registration: Registration;
  sessionId: number;
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;

  constructor(private route: ActivatedRoute, private registerAttendeesService: RegisterAttendeesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: {sessionId: string}) =>{
      this.sessionId = +params.sessionId;
    })
    this.createFormControls();
    this.createForm();
  }
  submitRegister() {
    this.validateAllFormFields(this.myform);
    if (this.myform.valid) {
      this.registerAttendeesService.postAttendee(this.myform.value).subscribe(data => {
        this.attendees = data;
      });
      if (this.attendees != null) {
        this.registerAttendeesService.postRegistration(null);
      }
    }
    else {
      this.validateAllFormFields(this.myform);
    }
  }

  createFormControls() {
    this.myform = new FormGroup({
      firstName: new FormControl('', [Validators.requiredTrue]),
      lastName: new FormControl('', [Validators.requiredTrue]),
      email: new FormControl('', [
        Validators.requiredTrue,
        Validators.pattern('[^ @]*@[^ @]*')
      ])
    });
  }

  createForm() {
    this.myform = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ngOnDestroy(): void {

  }
}