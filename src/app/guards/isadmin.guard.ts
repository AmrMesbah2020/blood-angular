import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsadminGuard implements CanActivate {
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  constructor(private _httpClient:HttpClient,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve=>{
        this._httpClient.get('http://donnatelife.herokuapp.com/api/user',{ headers: this.headers }).subscribe(
          (response:any)=>{
            console.log(response);
            if  (response.data[0].isAdmin == 0){
              this._router.navigate(['/']);
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
