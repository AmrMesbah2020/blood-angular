import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  user=new User;
  admin:any;
  verified:boolean=false;

  logged=new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private _httpClient: HttpClient,private router: Router,private toaster:ToastrService) { }
  login(token: string) {
    localStorage.setItem("Token", token);
    this.logged.next(true);
  }
  isLoggedIn(): boolean {
    let token = localStorage.getItem("Token")
    return token != null;
  }
  logout() {
    localStorage.removeItem("Token")
    this.logged.next(false);


  }



 async  isVerified() {
    const response=await this._httpClient.get('http://donnatelife.herokuapp.com/api/verified',{ headers: this.headers }).toPromise()
      //  this.verified=
      console.log(response);
      return response;

  }

}
