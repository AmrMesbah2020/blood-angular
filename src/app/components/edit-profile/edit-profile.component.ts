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
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  userInfo=new User();
  editProfile =new FormGroup({});
  name:string[]=[];

  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router: Router){
  }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:8000/api/user',{headers:this.headers}).subscribe(
      (response:any)=>{

        this.userInfo=response.data[0];
        console.log(this.userInfo.wieght);
        let name =this.userInfo.name.split(' ');
        console.log(name[1]);


      },
      (error:any)=>{

      }
    )

   console.log(this.userInfo);
this.editProfile=this. _formBuilder.group({

  firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  phone:[``,[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.maxLength(15),Validators.minLength(11)]],
  email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.minLength(7),Validators.maxLength(40)]],
  weight:["",[Validators.required,Validators.maxLength(3),Validators.minLength(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  address:["",[Validators.required,Validators.minLength(20),Validators.maxLength(150),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*') ]],



})
}

isValid(name:string):boolean{
  return this.editProfile.controls[name].valid;
}

update():void{

  let user=new User();
  user.firstName=this.editProfile.value.firstName;
  user.lastName=this.editProfile.value.lastName;
  user.name=user.getFullName();
  user.email=this.editProfile.value.email;
  user.phone=this.editProfile.value.phone;
  user.wieght=this.editProfile.value.wieght;
  user.city=this.editProfile.value.city;
  user.state=this.editProfile.value.state;
  user.street=this.editProfile.value.street;
  user.address=user.Adress();

  console.log(user);


  this._httpClient.post('http://localhost:8000/api/update-profile',user,{headers:this.headers}).subscribe(
    (response:any)=>{
      console.log(response)
    },
    (error:any)=>{
      console.log(error);

    }
  )


}



  }

