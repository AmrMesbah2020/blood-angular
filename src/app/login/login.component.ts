import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm =new FormGroup({});
user=new User();
errMsg:any=[];

constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router: Router){
}
ngOnInit(): void {
  this.loginForm=this._formBuilder.group({
email:['x.name@gmail.com',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.minLength(7),Validators.maxLength(40)]],
password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$" )]]


  });
}

login():void{
   let user=new User();
  user.email=this.loginForm.value.email
  user.password=this.loginForm.value.password

  this._httpClient.post('http://localhost:8000/api/login',user).subscribe(
        (response:any)=>{

        console.log(JSON.stringify(response.date));
        console.log(response);
        this.router.navigate(['home']);
        localStorage.setItem("Token",response[1].token)
      },
        (error:any)=>{
          this.errMsg = error;
          console.log(this.errMsg);

        }
      )


}
isValid(name:string):boolean{
  return this.loginForm.controls[name].valid;

}
}




