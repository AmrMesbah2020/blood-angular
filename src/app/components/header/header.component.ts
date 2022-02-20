import { Component, HostListener, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from '../../services/user.service';
=======
import { NotificationsService } from 'src/app/services/notifications.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { json } from 'stream/consumers';
import { Request } from 'src/app/models/request';
import { Session } from 'inspector';
>>>>>>> aa275dc35714c4e692c3488ad7664d43208023e8

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
<<<<<<< HEAD
  isLogged=false;
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    // this.isLogged=this._userService,this.isLoggIn();
=======
  
  flag:any='';
  notificationInfo=new Request();
  token:any=localStorage.getItem("Token");
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  listOfNotification:any=[];
  numberOfNotification:number=0;

  constructor(private toastr: NotificationsService,private router:Router,private _httpClint:HttpClient) { }

  ngOnInit(): void {

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
>>>>>>> aa275dc35714c4e692c3488ad7664d43208023e8

 this._userService.logged.subscribe(status=>{
   this.isLogged=status;
 });
  } 

  
}
