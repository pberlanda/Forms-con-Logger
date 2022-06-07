import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from './shared/log.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  appName = 'Angular ' + VERSION.major;
  name: string;
  email: string;
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private myLog: LogService) {
    this.createForm();
    this.myLog.log("form creato e log della creazione del form");
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required]
    });
  }

  invia() {
    this.myLog.log("btn invia");
  }
}
