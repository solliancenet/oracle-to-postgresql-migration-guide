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

  dtAttendee: Attendee[] = [];
  dtRegistration: Registration[] = [];
  reg: Registration;

  sessionId: any;


  //form group
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  // form group ends


  constructor(private route: ActivatedRoute, private registerAttendeesService: RegisterAttendeesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.sessionId = +params['sessionId'];
    });

    this.createFormControls();
    this.createForm();
  }

  // Submitting Registeration Data
  submitRegister() {
    if (this.myform.valid) {
      /// Posting to Attendee.
      this.registerAttendeesService.postAttendee(this.myform.value).subscribe(data => {
        this.dtAttendee = data;
      });

      // Posting to Registration
      if (this.dtAttendee != null) {
        // {{ CurrentDate | date: 'dd/MM/yyyy' }}

        //this.reg.

        this.registerAttendeesService.postRegistration(null);

      }
    }
    else {
      debugger;
      this.validateAllFormFields(this.myform); ///
    }
  }


  /// Form Contrlos Validation
  createFormControls() {
    this.myform = new FormGroup({
      firstName: new FormControl('', [Validators.requiredTrue]),
      lastName: new FormControl('', [Validators.requiredTrue]),
      email: new FormControl('', [
        Validators.requiredTrue,
        Validators.pattern("[^ @]*@[^ @]*")
      ])
    });
  }

  // Form
  createForm() {
    this.myform = new FormGroup({

      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }

  ///
  validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

  ngOnDestroy(): void {

  }
}