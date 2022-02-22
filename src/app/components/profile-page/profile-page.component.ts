import { Request } from './../../models/request';
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
  requests:number=0;
  posts:number=0;
  applies:number=0;

  constructor(private _activatedRoute:ActivatedRoute , private _httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe(params=>{

        let id=params.get('id');
        console.log(id);

   //user data
  this._httpClient.get(`http://localhost:8000/api/profile/${id}`)
  .subscribe(
    (response:any)=>{
      console.log(response);
      this.user=response.data;

    },
    (error:any)=>{}
  )

   //posts count
   this._httpClient.get(`http://localhost:8000/api/posts-count/${id}`).subscribe(
    (response:any)=>{
    // console.log(response);
    this.posts=response;

    },
    (error:any)=>{

    }
    )

    //requests count
    this._httpClient.get(`http://localhost:8000/api/requests-count/${id}`).subscribe(
      (response:any)=>{
      // console.log(response);
      this.requests=response;
  
      },
      (error:any)=>{
  
      }
      )

      //applies count
      this._httpClient.get(`http://localhost:8000/api/apply-count/${id}`).subscribe(
        (response:any)=>{
        // console.log(response);
        this.applies=response;
    
        },
        (error:any)=>{
    
        }
        )


      })



      



  }

}
