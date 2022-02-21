import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { json } from 'stream/consumers';
import { Request } from 'src/app/models/request';
import { Session } from 'inspector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen:boolean= false;

  toggleNavbar(){
    this.isOpen=!this.isOpen
  }

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
isLogged=false;
  flag:any='';
  notificationInfo=new Request();
  token:any=localStorage.getItem("Token");
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  listOfNotification:any=[];
  numberOfNotification:number=0;

  constructor(private toastr: NotificationsService,private router:Router,private _userService:UserService,private _httpClint:HttpClient) { }

  ngOnInit(): void {


    this._userService.logged.subscribe(status=>{
      this.isLogged=status;
    });

this.GetNotification();
    
  }



 GetNotification():void{
   this._httpClint.get(`http://127.0.0.1:8000/api/getUserNotification`,{headers:this.headers}).subscribe(
  (response:any)=>{

          //  console.log(response[1]);
           this.listOfNotification=response[0];
          //  console.log(this.listOfNotification);
          this.numberOfNotification=response[1];


  },
  (error:any)=>{
    console.log(error.error);
  }
)
 }



 notification:any=setInterval(()=>{
  this._httpClint.get(`http://127.0.0.1:8000/api/getUserNotification`,{headers:this.headers}).subscribe(
    (response:any)=>{
  
             this.listOfNotification=response[0];
            this.numberOfNotification=response[1];
    },
    (error:any)=>{
      console.log(error.error);
    }
  )
 }, 3000);



 
 markAsRead(){
   this._httpClint.post('http://127.0.0.1:8000/api/mark-as-read',null,{headers:this.headers}).subscribe(
     (response:any)=>{
       console.log(response);
     },
     (error:any)=>{
       console.log(error);
       
     }
     )
 }

  

  
}
