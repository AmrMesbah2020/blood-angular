import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prediabetes',
  templateUrl: './prediabetes.component.html',
  styleUrls: ['./prediabetes.component.css']
})

export class PrediabetesComponent implements OnInit {
  isShown: boolean = false ;
  subTotal:number = + '';

  formPredibets = new FormGroup({});

  constructor(private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {


    this.formPredibets = this._formBuilder.group({
      old: new FormControl("", [Validators.required,]),
      gender: new FormControl("", [Validators.required,]),
      women: new FormControl("", [Validators.required,]),
      history: new FormControl("", [Validators.required,]),
      pressure: new FormControl("", [Validators.required,]),
      active: new FormControl("", [Validators.required,]),
      height: new FormControl("", [Validators.required,]),
      weight: new FormControl("", [Validators.required,]),
    });

  }
  
onsubmit(): void{


  
    this.subTotal=parseInt(this.formPredibets.value.old)
    +parseInt(this.formPredibets.value.gender)+parseInt(this.formPredibets.value.women)+parseInt(this.formPredibets.value.history)+
    parseInt(this.formPredibets.value.pressure)+parseInt(this.formPredibets.value.active)+parseInt(this.formPredibets.value.height)+parseInt(this.formPredibets.value.weight);
   
    this.isShown = ! this.isShown;


    // console.log(this.formPredibets.value.old);



    
  }
  
  
  // getValue(vall:any,val1:any,val2:any,val3:any,val4:any,val5:any,val6:any,val7:any){

  //   console.log(parseInt(vall));
  //   console.log(parseInt(val7));

  //  console.log(this.subTotal);



  // }


}
