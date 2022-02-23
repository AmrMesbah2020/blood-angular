import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blood } from 'src/app/models/blood';
import { Request } from 'src/app/models/request';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {


  requests: Request[] = [];
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  errorMessage: any;
  request = new Request;

  blood=new Blood;
  

 

  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {


    
    this._httpClient.get("http://localhost:8000/api/allrequests").subscribe(

      (response: any) => {
        this.requests = response.data;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )

  }


}
