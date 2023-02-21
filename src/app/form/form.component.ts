import { Component, OnInit } from '@angular/core';
import {FormControl, Validators , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
interface States {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor(private _Router:Router) { }


  myForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.maxLength(50), Validators.minLength(4)]),
    Position: new FormControl('',[Validators.maxLength(50), Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    AvailabilityDate: new FormControl('',[Validators.maxLength(50), Validators.minLength(4), Validators.required] ),
    ExpectedSalary: new FormControl('',[Validators.max(15000), Validators.min(5000)]),
    DateOfBirth: new FormControl('',[Validators.required]),
    Address: new FormControl('',[Validators.maxLength(200), Validators.minLength(5)]),
    PhoneNumber: new FormControl('',[Validators.maxLength(11), Validators.minLength(11)]),
    // MaritalStatus: new FormControl(''),
    // AttachFile: new FormControl('',[Validators.required]),

  })

  getErrorMessageEmail() {
    if (this.myForm.get('email')?.getError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.get('email')?.getError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePosition() {
    if (this.myForm.get('Position')?.getError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.get('Position')?.errors ? 'Length between 4 to 50 char' : '';
  }
  getErrorMessageName() {
    if (this.myForm.get('name')?.getError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.get('name')?.errors ? 'Length between 4 to 50 char' : '';
  }

  getErrorMessageExpectedSalary() {
    if (this.myForm.get('ExpectedSalary')?.getError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.get('ExpectedSalary')?.errors ? 'The Salary between 15000EG to 5000EG' : '';
  }
  getErrorMessageAddress() {
    if (this.myForm.get('Address')?.getError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.get('Address')?.errors ? 'Length between 5 to 200 char' : '';
  }
  getErrorMessagePhoneNumber() {
    if (this.myForm.get('PhoneNumber')?.getError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.get('PhoneNumber')?.errors ? '11 Numper' : '';
  }
  ngOnInit(): void {

  }

  Status: States[] = [
    {value: 'GotEngaged', viewValue: 'Got Engaged'},
    {value: 'single', viewValue: 'single'},
    {value: 'Married', viewValue: 'Married'},
  ];
  file:any
  getFile(event:any){
    this.file = event.target.files[0];
    console.log('file',this.file)
  }
  submit(myForm:FormGroup){
    console.log(myForm)
    this._Router.navigate(['/thanks'])

  }
  startDate = new Date(1990, 0, 1);
}

