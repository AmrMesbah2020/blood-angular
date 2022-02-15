import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm =new FormGroup({});

constructor(private _formBuilder:FormBuilder){
}
ngOnInit(): void {
  this.loginForm=this._formBuilder.group({
email:['x.name@gmail.com',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.minLength(7),Validators.maxLength(20)]],
password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$" )]]


  });
}

login():void{

}
isValid(name:string):boolean{
  return this.loginForm.controls[name].valid;

}
}
 
 


 
