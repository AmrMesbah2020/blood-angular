import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../models/post';
// import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // isActive:boolean = true ;


  posts: Post[] = [];
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  errorMessage: any;
  post = new Post;


  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log(this.token);

    this._httpClient.get("http://localhost:8000/api/allposts", { headers: this.headers }).subscribe(

      (response: any) => {
        this.posts = response.data;
        console.log(this.token);
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )


  }


  delete(id: number) {

    if(confirm("Are you sure to delete "+id)) {


    this._httpClient.post(`http://localhost:8000/api/delete-post/`+ id,null,{ headers: this.headers }).subscribe(


      (response: any) => {
        this.posts = response.data;
        console.log(response);

      },
      (error: any) => {
        console.log(error);
      }
    )}
    this.router.navigate(['/admin/adminn/posts-admin'])
    .then(() => {

      // window.location.reload();
      this.ngOnInit()
    });
  }


  puplish(id: number): void {


    this._httpClient.post(`http://localhost:8000/api/publishpost/` + id,null, { headers: this.headers }).subscribe(

      (response: any) => {

        this.posts = response.data;
        // this.isActive = !this.isActive;
        console.log(this.posts);

      },
      (error: any) => {
        console.log(error);
      }
    )
    this.router.navigate(['/admin/adminn/posts-admin'])
    .then(() => {
      // window.location.reload();
      this.ngOnInit();
    });
  }
}
