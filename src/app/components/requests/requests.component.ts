import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import { NotificationsService } from 'src/app/services/notifications.service';


// import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})


export class RequestsComponent implements OnInit {
  requests:Request[]=[];
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  constructor(private _httpClint:HttpClient,private toast:NotificationsService) { }

  ngOnInit(): void {

    this._httpClint.get('http://donnatelife.herokuapp.com/api/allrequests').subscribe(
      (response:any)=>{
        this.requests=response.data
        console.log(this.requests);
      },
      (error:any)=>{

      }
    )


  }

  apply(id:number):void{
    this._httpClint.post(`http://donnatelife.herokuapp.com/api/apply/${id}`,null,{headers:this.headers}).subscribe(
      (response:any)=>{
        console.log(response);
        this.toast.tosterSuccess(response,'')
        this.ngOnInit()
      },
      (error:any)=>{
        console.log(error);
        // alert(error.error);
        if(error.error == 'already applied'){
          this.toast.tosterWarning(error.error,'Hint');

        }else{
          this.toast.toastrWarningOnTap(error.error,'Hint','eligibilty-quiz');

        }

      }
    )
  }

}


