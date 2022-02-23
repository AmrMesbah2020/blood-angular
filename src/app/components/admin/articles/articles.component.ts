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

  articles: Article[] = [];
  article_details:Article[]=[];


  // article =new Article;
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);


  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {


  

    this._httpClient.get("http://localhost:8000/api/allarticles").subscribe(

      (response: any) => {
        this.articles = response;
        // console.log(this.token);
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )




  }


  deleteArticle(id: number): void {

    if(confirm("Are you sure to delete "+id)) {
    this._httpClient.post(`http://localhost:8000/api/delete-article/` + id, null, { headers: this.headers }).subscribe(


      (response: any) => {
        this.articles = response[0];
        console.log(this.articles);

      },
      (error: any) => {
        console.log(error);
      }


    )}
    this.router.navigate(['/admin/adminn/articles-admin'])
      .then(() => {
        window.location.reload();
      });

  }

  // viewArticle(id: number): void {
  //   this._httpClient.post(`http://localhost:8000/api/articles/`+ id,null).subscribe(


  //     (response: any) => {
  //       this.articles = response[0];
  //       console.log(this.articles);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   )
  // }

}

