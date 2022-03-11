import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  user=new User;
  admin:any;
  constructor(private _httpClient: HttpClient, private router: Router, private userService:UserService) { }

  ngOnInit(): void {
    
  //  this.userService.isAdmin();
  //   this._httpClient.get("http://localhost:8000/api/user",
  //   { headers: this.headers }).subscribe(
    
  //     (response:any)=>{
  //        this.user=response.data[0];
  //        this.admin =this.user.isAdmin
  //        console.log(this.admin);
  //        if(this.admin==0){
  //         this.router.navigate(['/login']);
  //       }
  //    },
  //     (error:any)=>{
  //       console.log(error);
  //     }
  //  )
 
    // if (localStorage.getItem('Token') == null) {
    //   this.router.navigate(['/login']);
    // }

  }

}
