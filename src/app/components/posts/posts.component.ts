import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  formPost=new FormGroup({});
  //post:Post=new Post();
  posts:Post[]=[];
  //rate:number=0;
  topRatePost:Post[]=[];
   liked_posts:number[]=[];
   
   

  user=new User;
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);



  constructor(private _activatedRoute:ActivatedRoute , private _httpClient:HttpClient,private _postService:PostService,private _formBuilder: FormBuilder,private router:Router) { }
   
  ngOnInit(): void {

    if(localStorage.getItem('Token')==null){
      this.router.navigate(['/login']);
  }
    console.log(this.liked_posts)  
    // get the user
    this._httpClient.get("http://localhost:8000/api/user", 
    { headers: this.headers }).subscribe(

      (response:any)=>{
         this.user=response.data[0];
         console.log(this.user);
      },
      (error:any)=>{
        console.log(error);
      }
   )

   //post form validation
   this.formPost = this._formBuilder.group({

    title:['' , [Validators.required],],
    content:['' , [Validators.required],],
    img:['',[Validators.required],]
 
  })

  //get all posts
    this._postService.get()
    .subscribe(
      (response:any)=>{
       JSON.stringify(response.data);
        this.posts=response.data;
       // this.rate=response.data.rate;
        console.log(this.posts)
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );

  //get top rated post
    this._postService.topRatedPost()
    .subscribe(
      (response:any)=>{
       JSON.stringify(response.data);
        this.topRatePost=response.data;
        console.log(this.topRatePost)
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );


  }

  //add post
  addPost():void{
    let post=new Post();
    post.title=this.formPost.value.title;
    post.content=this.formPost.value.content;
    post.image=this.formPost.value.img;
    console.log(post.image);
    this._httpClient.post("http://localhost:8000/api/post",post,{ headers: this.headers }).subscribe(

      (response:any)=>{
         console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
   )
  }

  //form validation functions
  isValidControl(name:string):boolean
  {
    return this.formPost.controls[name].valid;
  }

  isInValidAndTouched(name:string):boolean
  {
    return  this.formPost.controls[name].invalid && (this.formPost.controls[name].dirty || this.formPost.controls[name].touched);
  }

  isControlHasError(name:string,error:string):boolean
  {
    return  this.formPost.controls[name].invalid && this.formPost.controls[name].errors?.[error];
  }
  

  //post like function
  
   postLike(rate:number,id:number):void {
    let postid=id;
     if(this.liked_posts.includes(postid)){
       rate--;
       let index = this.liked_posts.findIndex(x => x== postid);
        this.liked_posts.splice(index, 1);
        console.log(this.liked_posts);
       
       
     }
     else{
      rate++;
      this.liked_posts.push(postid);
      console.log(this.liked_posts);
     }
     
     console.log(rate)
    
    
     console.log(postid)
     this._httpClient.post(`http://localhost:8000/api/rate/`+postid,rate,
     { headers: this.headers }).subscribe(

      (response:any)=>{
         console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
   )
  
  }


  

}
