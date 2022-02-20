import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {

  
  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('Token') == null) {
      this.router.navigate(['/login']);
    }
  }

}
