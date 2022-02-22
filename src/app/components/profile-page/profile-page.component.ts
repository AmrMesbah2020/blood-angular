import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user=new User();

  constructor(private _activatedRoute:ActivatedRoute , private _httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe(params=>{

        let id=params.get('id');
        console.log(id);
  this._httpClient.get(`http://localhost:8000/api/profile/${id}`)
  .subscribe(
    (response:any)=>{
      console.log(response);
      this.user=response.data;

    },
    (error:any)=>{}
  )

      })

  }

}
