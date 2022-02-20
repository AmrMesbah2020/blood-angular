import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {


    if (localStorage.getItem('Token') == null) {
      this.router.navigate(['/login']);
    }
  }

}
