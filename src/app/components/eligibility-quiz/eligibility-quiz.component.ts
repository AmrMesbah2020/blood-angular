import { DonnationData } from './../../models/donnationData';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';

class DonnerData{
  last_date_of_donnation=new Date(10);
  blood_group:string='';
  rhd:string='';
}



@Component({
  selector: 'app-eligibility-quiz',
  templateUrl: './eligibility-quiz.component.html',
  styleUrls: ['./eligibility-quiz.component.css']
})
export class EligibilityQuizComponent implements OnInit {
  question_num:number=1;
  
  isChecked: boolean = false;
  addDonnerForm=new FormGroup({});
  donnatinData=new DonnationData();

  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  constructor(private _formBuilder: FormBuilder,private _httpClient:HttpClient){}
 
  ngOnInit(): void {
   
    this.addDonnerForm=this._formBuilder.group({
      bloodgroup:['' , [Validators.required],],
      bloodrh:['' , [Validators.required],],
      lastdonatedate:['' , [Validators.required],]

    });

  }



  addDonner():void{

  let  donnatinData=new DonnerData();

   donnatinData.last_date_of_donnation=this.addDonnerForm.value.lastdonatedate;
   donnatinData.blood_group=this.addDonnerForm.value.bloodgroup;
   donnatinData.rhd=this.addDonnerForm.value.bloodrh;


   this._httpClient.post("http://localhost:8000/api/donnation",donnatinData,{headers:this.headers}).subscribe(

      (response:any)=>{
        
         console.log((response));
      },
      (error:any)=>{
        console.log(error);

      }
   )


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
