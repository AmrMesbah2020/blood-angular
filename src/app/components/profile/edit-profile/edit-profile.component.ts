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

  userInfo:any;
  editProfile =new FormGroup({});
  name:string[]=[];
  image:any;

  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router: Router){
  }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:8000/api/user',{headers:this.headers}).subscribe(
      (response:any)=>{

        this.userInfo=response.data[0];
        sessionStorage.setItem('user',JSON.stringify(this.userInfo))
        console.log(this.userInfo);
      },
      (error:any)=>{

      }
    )
    this.userInfo=sessionStorage.getItem('user');
    let name =JSON.parse(this.userInfo).name.split(' ');
this.editProfile=this. _formBuilder.group({
  firstName:[name[0],[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  lastName:[name[1],[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
  phone:[JSON.parse(this.userInfo).phone,[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.maxLength(15),Validators.minLength(11)]],
  email:[JSON.parse(this.userInfo).email,[Validators.required,Validators.email,Validators.minLength(7),Validators.maxLength(40)]],
  weight:[JSON.parse(this.userInfo).wieght,[Validators.required,Validators.maxLength(3),Validators.minLength(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  address:[JSON.parse(this.userInfo).address,[Validators.required,Validators.minLength(20),Validators.maxLength(150),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*') ]],
})
}

isValid(name:string):boolean{
  return this.editProfile.controls[name].valid;
}

onfile(event:any){
this.image=event.target.files[0];
}

update():void{

  let user=new User();


  user.firstName=this.editProfile.value.firstName;
  user.lastName=this.editProfile.value.lastName;
  user.name=user.getFullName();
  user.email=this.editProfile.value.email;
  user.phone=this.editProfile.value.phone;
  user.wieght=this.editProfile.value.weight;
  user.address=this.editProfile.value.address

  let data=new FormData();
  data.append('avatar',this.image,this.image.name);
  data.append('name',user.name);
  data.append('email',user.email)
  data.append('phone',user.phone);
  data.append('address',user.address);
  data.append('wieght',this.editProfile.value.weight);



  console.log(user);


  this._httpClient.post('http://localhost:8000/api/update-profile',data,{headers:this.headers}).subscribe(
    (response:any)=>{
      console.log(response)
    },
    (error:any)=>{
      console.log(error);

    }
  )

sessionStorage.setItem('user',JSON.stringify(user));
this.router.navigate(['/profile'])

}



  }

