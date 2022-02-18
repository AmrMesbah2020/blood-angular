import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {



  article:Article=new Article();
  articles:Article[]=[];
  router: any;
  private _httpClient: any;

  constructor() { }

  ngOnInit(): void {


    if(localStorage.getItem('Token')==null){
      this.router.navigate(['/login']);
  }
}
// public addPost(postData: Object) {
//   let endPoints = "/posts"
//   this._httpClient.post('https://jsonplaceholder.typicode.com/posts'), postData)
//   .subscribe((data: any) => {
//     console.log(data);
//   });
// }


}
