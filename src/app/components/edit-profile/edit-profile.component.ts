import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  editProfile =new FormGroup({});

  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router: Router){
  }

  ngOnInit(): void {
this.editProfile=this. _formBuilder.group({

  firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  phone:["",[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.maxLength(15),Validators.minLength(11)]],
  email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.minLength(7),Validators.maxLength(40)]],
  weight:["",[Validators.required,Validators.maxLength(3),Validators.minLength(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  street:["",[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*') ]],
  city:["",[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  state:["",[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],


})
}

isValid(name:string):boolean{
  return this.editProfile.controls[name].valid;

}



  }

