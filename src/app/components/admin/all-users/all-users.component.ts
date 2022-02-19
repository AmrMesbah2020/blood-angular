import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  users: User[] = [];
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  user = new User;
  
  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('Token') == null) {
      this.router.navigate(['/login']);
    }

    this._httpClient.get("http://localhost:8000/api/users",{ headers: this.headers }).subscribe(

      (response: any) => {
        this.users = response;
        console.log(this.token);
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )

  }

}
