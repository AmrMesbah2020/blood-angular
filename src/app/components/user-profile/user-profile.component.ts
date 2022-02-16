import { Request } from './../../models/request';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user=new User;
  post=new Post;
  request=new Request();
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  donnationData:any=[];
  numberOfPosts:number=0;
  numberOfRequests:number=0;
  numberOfDonnation:number=0;
  userRequests:Request[]=[];
  userPosts:Post[]=[];


  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get("http://localhost:8000/api/user", { headers: this.headers }).subscribe(

      (response:any)=>{
         this.user=response.data[0];
         this.donnationData.push(this.user.donnation_data);

        //  console.log(this.donnationData);
      },
      (error:any)=>{
        console.log(error);
      }
   )

   this._httpClient.get("http://localhost:8000/api/userposts", { headers: this.headers }).subscribe(

    (response:any)=>{
      this.userPosts=response[0];
      console.log(this.userPosts);
      
       this .numberOfPosts=response[1];

      //  console.log(this.post);
    },
    (error:any)=>{
      console.log(error);
    }
 )

 this._httpClient.get("http://localhost:8000/api/userrequests", { headers: this.headers }).subscribe(

  (response:any)=>{
    this.userRequests=response[0];
console.log(this.userRequests);

    this.numberOfRequests=response[1];
    //  console.log(response);
  },
  (error:any)=>{
    console.log(error);
  }
)

this._httpClient.get("http://localhost:8000/api/donner-applies", { headers: this.headers }).subscribe(

  (response:any)=>{
    this.numberOfDonnation=response;
     console.log(response);
  },
  (error:any)=>{
    console.log(error);
  }
)


  }

}
