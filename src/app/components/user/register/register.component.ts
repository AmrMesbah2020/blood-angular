import { UserService } from 'src/app/services/user.service';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup,FormBuilder, ValidationErrors, AbstractControl, ValidatorFn} from "@angular/forms";
import { Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  registerForm =new FormGroup({});
  user=new User;
  errMsg:any=[];
  checkbox=false;


  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router: Router,private _userService:UserService){
  }
  ngOnInit(): void {
    this.registerForm=this._formBuilder.group({

  firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('^[A-Za-z][A-Za-z]*$')]],
  lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('^[A-Za-z][A-Za-z]*$')]],
  birthdate:["",Validators.required],
  gender:["",[Validators.required]],
  password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$" )]],
  weight:["",[Validators.required,Validators.maxLength(3),Validators.minLength(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  email:['',[Validators.required,Validators.email,Validators.minLength(7),Validators.maxLength(40)]],
  phone:["",[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.maxLength(15),Validators.minLength(11)]],
  street:["",[Validators.required,Validators.minLength(4),Validators.maxLength(60),Validators.pattern('[a-zA0-Z9\u0600-\u06FF ]*') ]],
  city:["",[Validators.required,Validators.minLength(4),Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  state:["",[Validators.required,Validators.minLength(4),Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],

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




  sign_up():void{
    let user=new User();

      user.firstName=this.registerForm.value.firstName
      user.lastName=this.registerForm.value.lastName
      user.birthdate=this.registerForm.value.birthdate
      user.email=this.registerForm.value.email
      user.phone=this.registerForm.value.phone
      user.wieght=this.registerForm.value.weight;
      user.street=this.registerForm.value.street
      user.city=this.registerForm.value.city
      user.state=this.registerForm.value.state
      user.password=this.registerForm.value.password
      user.gender=this.registerForm.value.gender
      user.name=user.getFullName();
      user.address=user.Adress();


      // console.log(user);

      this._httpClient.post('http://donnatelife.herokuapp.com/api/register',user).subscribe(
        (response:any)=>{

        console.log(response);
        this._userService.login(response[1].token);

        this.router.navigate(['home']);

      },
        (error:any)=>{
          this.errMsg.push(error.error.errors);
          console.log(error);
        }
      )



  }

  // login():void{

  // }
  isValid(name:string):boolean{
    return this.registerForm.controls[name].valid;

  }

  }

// function confirmValidatorPassword(arg0: string): any {
//   throw new Error('Function not implemented.');
// }
  // export function matchValidator(
  //   matchTo: string,
  //   reverse?: boolean
  // ): ValidatorFn {
  //   return (control: AbstractControl):
  //   ValidationErrors | null => {
  //     if (control.parent && reverse) {
  //       const c = (control.parent?.controls as any)[matchTo]
  //       as AbstractControl;
  //       if (c) {
  //         c.updateValueAndValidity();
  //       }
  //       return null;
  //     }
  //     return !!control.parent &&
  //       !!control.parent.value &&
  //       control.value ===
  //       (control.parent?.controls as any)[matchTo].value
  //       ? null
  //       : { matching: true };
  //   };
  // }
