import { ToastrService } from 'ngx-toastr';
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
  topRatePost:Post[]=[];
  liked_posts:number[]=[];
  image:any=null;
  title:string='';
  content:string='';


  user=new User;
  token:any=localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  myNameElem: any;



  constructor(private _activatedRoute:ActivatedRoute , private _httpClient:HttpClient,private _postService:PostService,private _formBuilder: FormBuilder,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

    //navigation to login page to unauthorized users

  //   if(localStorage.getItem('Token')==null){
  //     this.router.navigate(['/login']);
  // }

    //getAllPosts function calling
    this.getAllPosts();
   this.createForm();
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



   //get liked posts by the user

   this._httpClient.get("http://localhost:8000/api/liked-posts",
   { headers: this.headers }).subscribe(

     (response:any)=>{
        this.liked_posts=response;
        console.log(this.liked_posts);
     },
     (error:any)=>{
       console.log(error);
     }
  )





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
        console.log(error);
      }
    );


  }

  //post image
  onfile(event:any){
    this.image=event.target.files[0];
    console.log(this.image);
   }

   createForm(){
    this.formPost = this._formBuilder.group({

      title:['' , [Validators.required,Validators.minLength(10),Validators.maxLength(50)],],
      content:['' , [Validators.required,Validators.minLength(20),Validators.maxLength(250)],],
      image:[null,]

    })
   }
  //add post
  addPost():void{
    let post=new Post();
    let formData=new FormData();
    if(this.image != null){
   formData.append("image",this.image,this.image.name);}
   formData.append("title",this.formPost.value.title);
   formData.append("content",this.formPost.value.content);
    // post.title=this.formPost.value.title;
    // post.content=this.formPost.value.content;
    formData.forEach(file => console.log("File:", file));

    this._httpClient.post("http://localhost:8000/api/post",formData,{ headers: this.headers }).subscribe(

      (response:any)=>{
         console.log(response);
         this.toaster.success('Our Admins Will Review Your Post','Thank You')
      },
      (error:any)=>{
        console.log(error);
      }

   )
   this.title='';
   this.content="";

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

//function to get all posts
  getAllPosts():void{
    this._postService.get()
    .subscribe(
      (response:any)=>{
       JSON.stringify(response.data);
      this.posts=response.data;
      console.log(this.posts)
       // this.rate=response.data.rate;
        console.log(this.posts)
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );
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
         this.getAllPosts();
      },
      (error:any)=>{
        console.log(error);
      }
   );




  }




}
