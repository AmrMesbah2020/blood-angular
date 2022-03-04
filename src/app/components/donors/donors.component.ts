import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private _httpClint:HttpClient) { }

  ngOnInit(): void {
    this._httpClint.get('http://127.0.0.1:8000/api/donners').subscribe(
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

}
