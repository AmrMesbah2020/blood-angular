
import { Component, OnInit } from '@angular/core';

import {FormGroup,FormBuilder} from "@angular/forms";
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm =new FormGroup({});

  constructor(private _formBuilder:FormBuilder){
  }
  ngOnInit(): void {
    this.registerForm=this._formBuilder.group({
      // passwords:this._formBuilder.group({
        password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$" )]],
        confirmPassword:["",[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$" )]],

      // },
      // {
      //   validator:this.confirmPasswordMatch('password','confirmPassword')
      // }),
  email:['x.name@gmail.com',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.minLength(7),Validators.maxLength(20)]],
  firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  dateOfBirth:["",Validators.required],
  gender:["",[Validators.required]],
  phone:["",[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$")]],
  address:["",[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
  city:["",[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
  state:["",[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],

    });
  }
  // confirmPasswordMatch(controlName:string,matchingControlName:string){
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //     if (control.value !== matchingControl.value){
  //       matchingControl.setErrors({ confirmPasswordMatch:true});
  //     }
  //     else{
  //       matchingControl.setErrors
  //     }

  //   }

  // }
  
  login():void{
  
  }
  isValid(name:string):boolean{
    return this.registerForm.controls[name].valid;

  }
  }
