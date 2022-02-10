import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-counter',
  templateUrl: './dash-counter.component.html',
  styleUrls: ['./dash-counter.component.css']
})
export class DashCounterComponent implements OnInit {


  reciever:number = 0;
  doonerscount:number = 0;
  donatelifecount:number = 0;


  constructor() { }

  ngOnInit(): void {
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
    this.donatelifecount++;
    if(this.donatelifecount == 50)
    {
      
      clearInterval(this. donatelifecountstop);
    }
  },1000)




}
