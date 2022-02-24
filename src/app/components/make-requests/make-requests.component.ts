import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Request } from 'src/app/models/request';




@Component({
  selector: 'app-make-requests',
  templateUrl: './make-requests.component.html',
  styleUrls: ['./make-requests.component.css']
})
export class MakeRequestsComponent implements OnInit {

  formRequest=new FormGroup({});
  request=new Request();
  user=new User;
  errMsg:any=[];
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  constructor(private _formBuilder: FormBuilder,private _httpClient:HttpClient,private router:Router){}

  ngOnInit(): void {


    this._httpClient.get("http://localhost:8000/api/user", { headers: this.headers }).subscribe(

      (response:any)=>{
         this.user=response.data[0];
         console.log(this.user);
      },
      (error:any)=>{
        console.log(error);
      }
   )
    this.formRequest = this._formBuilder.group({
      phone :new FormControl("", [Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.maxLength(15),Validators.minLength(11)]),
      // address :new FormControl("",Validators.required),
      city :new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]),
      street :new FormControl("",[Validators.required,Validators.maxLength(60),Validators.pattern('[a-zA0-Z9\u0600-\u06FF ]*')]),
      state :new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]),
      zip :new FormControl("",[Validators.required,Validators.pattern("^([0-9]{5})([\-]{1}[0-9]{4})?$")]),
      description :new FormControl("",[Validators.required,Validators.pattern('[a-zA0-Z9\u0600-\u06FF ]*'),Validators.minLength(20)]),
      date: new FormControl("",Validators.required),
      blood_group:new FormControl(),rhd:new FormControl(),quantity:new FormControl()
    })

  }

  isValidControl(name:string):boolean
  {
    return this.formRequest.controls[name].valid;
  }

  isInValidAndTouched(name:string):boolean
  {
    return  this.formRequest.controls[name].invalid && (this.formRequest.controls[name].dirty || this.formRequest.controls[name].touched);
  }

  isControlHasError(name:string,error:string):boolean
  {
    return  this.formRequest.controls[name].invalid && this.formRequest.controls[name].errors?.[error];
  }


  onSubmit() {
    let request=new Request();
    let token=localStorage.getItem('Token');
    request.phone=this.formRequest.value.phone;
    request.description=this.formRequest.value.description;
    request.date=this.formRequest.value.date;
    request.quantity=this.formRequest.value.quantity;
    request.city=this.formRequest.value.city;
    request.state=this.formRequest.value.state;
    request.street=this.formRequest.value.street;
    request.blood_group=this.formRequest.value.blood_group;
    request.rhd=this.formRequest.value.rhd;
    request.zip=this.formRequest.value.zip;

    request.address=request.getAddress();

    console.log(request);
    this._httpClient.post("http://localhost:8000/api/request",request, { headers: this.headers }).subscribe(

      (response:any)=>{
         console.log(response);
         this.router.navigate(['/profile']);
      },
      (error:any)=>{
        this.errMsg.push(error.error.errors.date[0]);
        console.log(this.errMsg[0]);

        

      }
   )

  }

}
