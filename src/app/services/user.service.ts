import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  user=new User;

  logged=new BehaviorSubject<boolean>(this.isLoggedIn());
  private _httpClient: any;
  constructor() { }
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
  isAdmin():void{
    this._httpClient.get("http://localhost:8000/api/user",{ headers: this.headers }).subscribe(

      (response:any)=>{
         this.user=response.data;
         console.log(this.user);
      },
      (error:any)=>{
        console.log(error);
      }

   );  let isAdmin=this.user.isAdmin;
   if(this.user.isAdmin == 1){
    
      isAdmin=1;
   }  
  // return isAdmin;
  }

}
