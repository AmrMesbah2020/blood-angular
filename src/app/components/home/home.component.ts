import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  article:Article=new Article();
  lastArticles:Article[]=[];

  constructor(private _articleService:ArticleService) { }

  ngOnInit(): void {

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
