import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Blood } from 'src/app/models/blood';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  blood=new Blood();
  // donner=new User();
  donners: any[]=[];
  searchResults:any[]=[];
  search:number=0;
  searchForm=new FormGroup({});

  searchval:string = '';
  
  
  constructor(private _formBuilder:FormBuilder,private _httpClint:HttpClient) { }

  
  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({

    searchval: new FormControl('', [Validators.maxLength(2),Validators.minLength(1)]),

    });


    this._httpClint.get('http://donnatelife.herokuapp.com/api/donners').subscribe(
      (response:any)=>{
        console.log(response.data);
          this.donners=response.data;
      },
      (error:any)=>{

      }
    )


  }
  getSearch(name:any){
    let keyWord=name.target.value;
    console.log(keyWord);
    
    
    this._httpClint.get(`http://donnatelife.herokuapp.com/api/search/${keyWord}`).subscribe(
    (response:any)=>{
    console.log(response);
    this.searchResults=response;
 },
    (error:any)=>{
    
    }
    )
    if(!keyWord){
      this.search=0

    }
    else{this.search=1}
   }

   isValidControl(name:string):boolean
   {
     return this.searchForm.controls[name].valid;
   }
 
   isInValidAndTouched(name:string):boolean
   {
     return  this.searchForm.controls[name].invalid && (this.searchForm.controls[name].dirty || this.searchForm.controls[name].touched);
   }
 
   isControlHasError(name:string,error:string):boolean
   {
     return  this.searchForm.controls[name].invalid && this.searchForm.controls[name].errors?.[error];
   }

}
