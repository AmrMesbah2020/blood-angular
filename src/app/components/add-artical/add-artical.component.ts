import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-artical',
  templateUrl: './add-artical.component.html',
  styleUrls: ['./add-artical.component.css']
})
export class AddArticalComponent implements OnInit  {

  addArtical =new FormGroup({});

  constructor(private _formBuilder:FormBuilder){
  }
  ngOnInit(): void {
    this.addArtical=this._formBuilder.group({
  title:["",[Validators.required,Validators.minLength(6),Validators.maxLength(50),Validators.pattern('^[a-zA-Z \-\']+')]],
  resources:["",[Validators.required,Validators.minLength(6),Validators.maxLength(50),Validators.pattern('^[a-zA-Z \-\']+')]],
  content:["",[Validators.required,Validators.minLength(50),Validators.maxLength(500)]],
  img:["",[Validators.required,]],
  
  
    });
  }
  
  login():void{
  
  }
  isValid(name:string):boolean{
    return this.addArtical.controls[name].valid;
  
  }
  isValidControl(name:string):boolean{
    return this.addArtical.controls[name].valid;

  }
  // isInValidAndTouched(name:string):boolean{
  //   return this.addArtical.controls[name].errors? && (this.addArtical.controls[name].touched) && (this.addArtical.controls[name].dirty);
  // }
  }
   