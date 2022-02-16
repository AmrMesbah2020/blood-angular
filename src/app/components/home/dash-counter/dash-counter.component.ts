import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dash-counter',
  templateUrl: './dash-counter.component.html',
  styleUrls: ['./dash-counter.component.css']
})
export class DashCounterComponent implements OnInit {


  reciever:number = 1;
  doonerscount:number = 0;
  donatelifecount:number = 0;
  Blood:string="";


  constructor(private _httpClint:HttpClient) { }

  ngOnInit(): void {
    this._httpClint.get('http://127.0.0.1:8000/api/overall-requests').subscribe(
      (response:any)=>{
        this.donatelifecount=response;
      },
      (error:any)=>{
      }
    )
    this._httpClint.get('http://127.0.0.1:8000/api/blood-availability').subscribe(
      (response:any)=>{
        this.Blood=response.data[response.data.length-1].blood_group+response.data[response.data.length-1].rhd;
      },
      (error:any)=>{
      }
    )

  }



  recieverstop:any = setInterval(()=>{
    this.reciever++;

    if(this.reciever ==60000)
    {
      clearInterval(this.recieverstop);
    }

  },2000)


  doonerscountstop:any = setInterval(()=>{
    this.doonerscount++;
    if(this.doonerscount == 45)
    {

      clearInterval(this.doonerscountstop);
    }
  },1000)


  donatelifecountstop:any = setInterval(()=>{
    this._httpClint.get('http://127.0.0.1:8000/api/blood-availability').subscribe(
      (response:any)=>{
        this.Blood=response.data[response.data.length-1].blood_group+response.data[response.data.length-1].rhd;
      },
      (error:any)=>{
      }
    )

    this._httpClint.get('http://127.0.0.1:8000/api/overall-requests').subscribe(
      (response:any)=>{
        this.donatelifecount=response;
      },
      (error:any)=>{
      }
    )
  },10000)









}
