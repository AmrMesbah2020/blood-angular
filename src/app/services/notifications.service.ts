import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService,private router:Router) { }


  toastrSuccessOnTap(title:string,content:string,route:string){
    this.toastr.success(title, content)
    .onTap
    .pipe(take(1))
    .subscribe(() => this.toasterClickedHandler(route));
  }
  toasterClickedHandler(route:string) {
    this.router.navigate([route]);
  }


  toastrWarningOnTap(title:string,content:string,route:string){
    this.toastr.warning(title, content,{
      positionClass:'toast-center-center',
  
    })
    .onTap
    .pipe(take(1))
    .subscribe(() => this.toasterClickedHandler(route));
  }


}

