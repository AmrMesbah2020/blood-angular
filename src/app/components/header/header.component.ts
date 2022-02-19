import { Component, HostListener, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { json } from 'stream/consumers';
import { Request } from 'src/app/models/request';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isActive: boolean | undefined;

  active() {
      this.isActive= true;
    }

  navbarfixed:boolean = false;
  @HostListener('window:scroll',['$event'])onScroll(){
    if(window.scrollY >50){
      this.navbarfixed = true;
    }
    else{
      this.navbarfixed = false;
    }
  }
  
  flag:any='';
  notificationInfo=new Request();

  constructor(private toastr: NotificationsService,private router:Router,private _httpClint:HttpClient) { }

  ngOnInit(): void {
    
  }

//  Notify():void{

//   this._httpClint.get(`http://127.0.0.1:8000/api/getNotification`).subscribe(
//     (response:any)=>{
//       console.log(JSON.parse(response.data));
//       this.flag=response.data.id;
//       console.log(this.flag);
      
//       this.toastr.toastrWarningOnTap('Notification ya sya3','am amr w samar','requests');

//     },
//     (error:any)=>{
//       console.log(error.error);
//       // alert(error.error);
//     }
//   )
//  }
  setFalg:any=localStorage.setItem('flag','');
 notification:any=setInterval( ()=>{

  this._httpClint.get(`http://127.0.0.1:8000/api/getNotification`).subscribe(
    (response:any)=>{
      // console.log(JSON.parse(response.data));
      this.notificationInfo=JSON.parse(response.data).data;

     
      // console.log(this.flag);

      if( ){
        
      
        this.toastr.toastrWarningOnTap('Notification ya sya3','am amr w samar','requests');

      }

    },
    (error:any)=>{
      console.log(error.error);
      // alert(error.error);
    }
  )
 

 }, 15000);

}
