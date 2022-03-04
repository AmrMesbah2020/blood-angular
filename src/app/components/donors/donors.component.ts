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

  constructor(private _httpClint:HttpClient) { }

  ngOnInit(): void {
    this._httpClint.get('http://donnatelife.herokuapp.com/api/donners').subscribe(
      (response:any)=>{
        console.log(response.data);
          this.donners=response.data;
      },
      (error:any)=>{

      }
    )


  }

}
