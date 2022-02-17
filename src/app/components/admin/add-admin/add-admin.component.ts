import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  adminForm=new FormGroup({});

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.adminForm=this._formBuilder.group({

      email:['' , [Validators.required ,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],],
    password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
      });
  
    }


    isValidControl(name:string):boolean
    {
      return this.adminForm.controls[name].valid;
    }
  
    isInValidAndTouched(name:string):boolean
    {
      return  this.adminForm.controls[name].invalid && (this.adminForm.controls[name].dirty || this.adminForm.controls[name].touched);
    }
  
    isControlHasError(name:string,error:string):boolean
    {
      return  this.adminForm.controls[name].invalid && this.adminForm.controls[name].errors?.[error];
    }
}
