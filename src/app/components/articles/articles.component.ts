import { Router } from '@angular/router';
import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  

  article:Article=new Article();
  articles:Article[]=[];
  lastArticle:Article[]=[];

  constructor(private _articleService:ArticleService ,private router:Router) { }

  ngOnInit(): void {
  
    if(localStorage.getItem('Token')==null){
      this.router.navigate(['/login']);
  }

    this._articleService.get()
    .subscribe(
      (response:any)=>{
       JSON.stringify(response.data);
        this.articles=response;
        console.log(this.articles)
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );


    this._articleService.getLastArticle()
    .subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
        this.lastArticle=response;
        console.log(this.lastArticle)
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );

  }

}
