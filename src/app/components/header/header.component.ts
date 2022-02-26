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
import {GlobalsService} from '../../services/globals.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen:boolean= false;
  user: any;

  toggleNavbar(){
    this.isOpen=!this.isOpen
  }

  isActive: boolean | undefined;

  active() {
      this.isActive= true;
    }

  navbarfixed:boolean = false;
  @HostListener('window:scroll',['$event'])onScroll(){
    if(window.scrollY >60){
      this.navbarfixed = true;
    }
    else{
      this.navbarfixed = false;
    }
  }
  isLogged:boolean=false;
  admin:any;

  flag:any='';
  notificationInfo=new Request();
  token:any=localStorage.getItem("Token");
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  listOfNotification:any=[];
  numberOfNotification:number=0;

  constructor(private toastr: NotificationsService,private router:Router,private _userService:UserService,private _httpClint:HttpClient,private global:GlobalsService) { }

  ngOnInit(): void {



    this._httpClint.get("http://localhost:8000/api/user",
    { headers: this.headers }).subscribe(
    
      (response:any)=>{
         this.user=response.data[0];
         this.admin =this.user.isAdmin
        // console.log(this.admin);
        
     }
      
   );
  
  




    this._userService.logged.subscribe(status=>{
      this.isLogged=status;
    });
    console.log(this.headers);

    // this._userService.issadmin.subscribe(status=>{
    //   this.isAdmin=status;
    // });


if(this.isLogged){
this.GetNotification();
}
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
   if(this.isLogged){
  this._httpClint.get(`http://127.0.0.1:8000/api/getUserNotification`,{headers:this.headers}).subscribe(
    (response:any)=>{

             this.listOfNotification=response[0];
            this.numberOfNotification=response[1];
    },
    (error:any)=>{
      console.log(error.error);
    }
  )

  this._httpClint.get(`http://localhost:8000/api/getRequestNotification`).subscribe(
    (response:any)=>{
      // console.log(response.data);
        this.notificationInfo=JSON.parse(response.data).data;
        // console.log(this.notificationInfo);
        if(this.global.flag ==this.notificationInfo.id){}else{
        let title:string=this.notificationInfo.owner_details.name+' need blood of type '+this.notificationInfo.blood.blood_group+this.notificationInfo.blood.rhd;
        let content:string=this.notificationInfo.description;
        this.toastr.toastrInfoOnTap(content,title,'/requests');
        this.global.flag=this.notificationInfo.id;
        }

    },
    (error:any)=>{

    }
  )

   }
 }, 10000);



 markAsRead(){
   this._httpClint.post('http://127.0.0.1:8000/api/mark-as-read',null,{headers:this.headers}).subscribe(
     (response:any)=>{
       console.log(response);
       this.GetNotification();
     },
     (error:any)=>{
       console.log(error);

     }
     )
 }




}
