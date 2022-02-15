import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-requests',
  templateUrl: './make-requests.component.html',
  styleUrls: ['./make-requests.component.css']
})
export class MakeRequestsComponent implements OnInit {

  reqForm=new FormGroup({});

constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.reqForm=this._formBuilder.group({
      description:['' , [Validators.required , Validators.minLength(6)],],
      zip:['' , [Validators.required , Validators.minLength(4),Validators.maxLength(8)],],
      state:['' , [Validators.required , Validators.minLength(4),Validators.maxLength(8)],],
      city:['' , [Validators.required , Validators.minLength(3),Validators.maxLength(8)],],
      street:['' , [Validators.required , Validators.minLength(4),Validators.maxLength(8)],],
      phone:['', [Validators.required, Validators.pattern("01[0125][0-9]{8}$")],]
    });
  }

  isValidControl(name:string):boolean
  {
    return this.reqForm.controls[name].valid;
  }

  isInValidAndTouched(name:string):boolean
  {
    return  this.reqForm.controls[name].invalid && (this.reqForm.controls[name].dirty || this.reqForm.controls[name].touched);
  }

  isControlHasError(name:string,error:string):boolean
  {
    return  this.reqForm.controls[name].invalid && this.reqForm.controls[name].errors?.[error];
  }

}
