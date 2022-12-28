import { Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';




@Component({
  
  selector: 'app-contact',
 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers:[
     {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue:{showErrror: true},
     },
  ],
})


export class ContactComponent   {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
 
 
  constructor(private  _formBuilder: FormBuilder) {

    this._formBuilder=_formBuilder;
  }

  
}
