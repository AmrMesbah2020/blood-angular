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
  articles:Article[]=[];
  lenght:number=0;
  constructor(private _articleService:ArticleService) { }

  ngOnInit(): void {

    this._articleService.get()
    .subscribe(
      (response:any)=>{
       JSON.stringify(response.data);
        this.articles=response;
        console.log(this.articles)
        this.lenght=this.articles.length;
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );
  }

}
