import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private router: Router, private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.userService.isAdmin());

console.log("dkemdkemkf");

    // if(this.userService.isAdmin()){
    //   this.router.navigate(['/login']);
    // }
    // if (localStorage.getItem('Token') == null) {
    //   this.router.navigate(['/login']);
    // }

  }

}
