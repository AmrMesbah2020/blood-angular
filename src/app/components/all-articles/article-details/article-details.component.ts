import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article:Article=new Article();
  articles:Article[]=[];
  article_details:Article[]=[];
  lastArticles:Article[]=[];

  constructor(private _activatedRoute:ActivatedRoute,private _httpClient:HttpClient,private _articleService:ArticleService,private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('Token')==null){
      this.router.navigate(['/login']);
  }

    this._activatedRoute.paramMap.subscribe(params=>{

      let id=params.get('id');
      console.log(id);
this._httpClient.get(`http://localhost:8000/api/articles/${id}`)
.subscribe(
  (response:any)=>{
    JSON.stringify(response.data);
    this.article_details=response;
  console.log(this.article_details) ;
  },
  (error:any)=>{}
)

    })


    this._articleService.getLastArticle()
    .subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
        this.lastArticles=response;
        console.log(this.lastArticles)
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );
  }

}
