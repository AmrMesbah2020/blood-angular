import { Router } from '@angular/router';
import { Feedback } from './../../models/feedback.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm=new FormGroup({});
 Feedback=new Feedback();
 flagList:any=[];
 name:string = '';
 email:string = '';
 message:string = '';
  constructor(private _formBuilder:FormBuilder,private _httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
   
    if(localStorage.getItem('Token')==null){
      this.router.navigate(['/login']);
  }

    this.contactForm=this._formBuilder.group({
      message:['' , [Validators.required],],
      name:['' , [Validators.required],],
      email:['' , [Validators.required ,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],],

    });
  }

  isValidControl(name:string):boolean
  {
    return this.contactForm.controls[name].valid;
  }

  isInValidAndTouched(name:string):boolean
  {
    return  this.contactForm.controls[name].invalid && (this.contactForm.controls[name].dirty || this.contactForm.controls[name].touched);
  }

  isControlHasError(name:string,error:string):boolean
  {
    return  this.contactForm.controls[name].invalid && this.contactForm.controls[name].errors?.[error];
  }

  feedback(flag:string):void{
  
   let feedback=new Feedback();



   feedback.message=this.contactForm.value.message;
   feedback.email=this.contactForm.value.email;
   feedback.name=this.contactForm.value.name;

   this._httpClient.post("http://localhost:8000/api/feedback",feedback).subscribe(

      (response:any)=>{
        
         console.log(JSON.stringify(response));
         
      },
      (error:any)=>{
         
      }
   )
   this.flagList=flag;
   this.name = ' ';
   this.email = ' ';
   this.message = ' ';


  }

}
