import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsVerifiedGuard implements CanActivate {
  constructor(private _userService:UserService,private _router:Router,private toaster:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let verified=this._userService.isVerified();
      if(!verified)
      this.toaster.warning('Please Verify Your Email','Sorry')
      this._router.navigateByUrl('/home');

        return verified;
  }

}
