import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsVerifiedGuard implements CanActivate {
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  constructor(private _httpClient:HttpClient,private _router:Router,private toaster:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise(resolve=>{
        this._httpClient.get('http://donnatelife.herokuapp.com/api/verified',{ headers: this.headers }).subscribe(
          (response:any)=>{
            console.log(response);
            if  (response == null){
              this.toaster.warning('Please Verify Your Account','Sorry')
              return resolve(false)
            }else{
              return resolve(true)
            }
          },(error:any)=>{
            console.log(error);
          }
        )
      })



      }


}


