import { Article } from './../models/article';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private _apiService:ApiService) { }

  get() {
    return this._apiService.get(`allarticles`)
     
   }

   getLastArticle(){
    return this._apiService.get(`last-article`)
   }
 
 
   add(article:Article) {
     return this._apiService.post(`add-article`,article)
      
    }

    deleteArticle(id:number){
      return this._apiService.post(`delete-article`,id)
    }
}
