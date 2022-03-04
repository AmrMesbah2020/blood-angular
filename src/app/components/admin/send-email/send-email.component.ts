import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
user=new User;
emailForm = new FormGroup({});
username:string='';
useremail:string='';
rejected:number=0;
  constructor(private _formBuilder: FormBuilder,private _activatedRoute:ActivatedRoute,private _httpClient:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(params=>{

      let id=params.get('id');
      console.log(id);
this._httpClient.get(`http://donnatelife.herokuapp.com/api/profile/${id}`)
.subscribe(
  (response:any)=>{
    JSON.stringify(response.data);
    this.user=response[0];
  console.log(this.user) ;
  this.username=this.user.name;
  this.useremail=this.user.email;
  },
  (error:any)=>{}
)

    })

    this.emailForm = this._formBuilder.group({

      email: ['', ],
      subject:['',[Validators.required]],
      message:['',[Validators.required]],
      

    });
  }

  sendEmail(){
    let formData=new FormData();
    formData.append("name",this.username);
    formData.append("email",this.useremail);
   
    formData.append("subject",this.emailForm.value.subject);
    formData.append("message",this.emailForm.value.message);

    this._httpClient.post("http://donnatelife.herokuapp.com/api/sendemail",formData, {responseType: 'text'}).subscribe(

      (response:any)=>{
       //  console.log(response);

         this.toastr.success('Send Succefully','',{
           timeOut:2000,
           progressBar:true
         }
         )
        this.emailForm.reset()
      },
      (error:any)=>{
        console.log(error);
        //this.emailForm.reset()
      }

   )
  }

}
