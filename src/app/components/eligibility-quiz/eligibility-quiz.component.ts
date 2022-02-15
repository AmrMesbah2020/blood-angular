import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-eligibility-quiz',
  templateUrl: './eligibility-quiz.component.html',
  styleUrls: ['./eligibility-quiz.component.css']
})
export class EligibilityQuizComponent implements OnInit {
  question_num:number=1;
  
  isChecked: boolean = false;
  addDonnerForm=new FormGroup({});
  donatedbefore: any=this.addDonnerForm.value.donatedbefore;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
   
    this.addDonnerForm=this._formBuilder.group({
      bloodgroup:['' , [Validators.required],],
      bloodrh:['' , [Validators.required],],
      donatedbefore:['' , [Validators.required],],
      lastdonatedate:['' , [Validators.required],],

    });

  }
  

   nextQuation():void {

   this.question_num++;
    
  }

  previoustQuation():void {

    this.question_num--;
     
   }

   ineligiblMessage():void{
     this.question_num =0;
   } 

  //  addDonner():void{
  //   student:[]=this.addDonnerForm.value
  //  }


   isValidControl(name:string):boolean
  {
    return this.addDonnerForm.controls[name].valid;
  }

  isInValidAndTouched(name:string):boolean
  {
    return  this.addDonnerForm.controls[name].invalid && (this.addDonnerForm.controls[name].dirty || this.addDonnerForm.controls[name].touched);
  }

  isControlHasError(name:string,error:string):boolean
  {
    return  this.addDonnerForm.controls[name].invalid && this.addDonnerForm.controls[name].errors?.[error];
  }

}
