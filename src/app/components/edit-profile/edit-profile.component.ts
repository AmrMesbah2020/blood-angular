import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user=new User();
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);


  editProfile =new FormGroup({});

  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router: Router){
  }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:8000/api/user',{headers:this.headers}).subscribe(
      (response:any)=>{
        this.user=response.data[0];
        console.log(this.user);

      },
      (error:any)=>{

      }
    )


this.editProfile=this. _formBuilder.group({

  firstName:["44444444444444444",[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  phone:[`${this.user.phone}`,[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.maxLength(15),Validators.minLength(11)]],
  email:[this.user.email,[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.minLength(7),Validators.maxLength(40)]],
  weight:[this.user.weight,[Validators.required,Validators.maxLength(3),Validators.minLength(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  street:["",[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*') ]],
  city:["",[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  state:["",[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],




})
}

isValid(name:string):boolean{
  return this.editProfile.controls[name].valid;
}

update():void{

}



  }

