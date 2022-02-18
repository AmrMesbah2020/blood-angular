import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../../models/article';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:Article[]=[];


  article =new Article();
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
 

  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {


    if(localStorage.getItem('Token')==null){
      this.router.navigate(['/login']);
  }


this._httpClient.get("http://localhost:8000/api/allarticles").subscribe(

      (response: any) => {
        this.articles = response.data;
        console.log(this.token);
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )


  

  }


  deleteArticle(id: number): void {
    this._httpClient.post(`http://localhost:8000/api/delete-article/`+ id,null,{ headers: this.headers }).subscribe(


      (response: any) => {
        this.articles = response.data;
        console.log(this.articles);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }


}
    
