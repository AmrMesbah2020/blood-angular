import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  

  // userId:any= null;
  // private sub: Subscription = new Subscription;
  // user:user=null;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('Token')==null){
      this.router.navigate(['/login']);
  }
  }

}
