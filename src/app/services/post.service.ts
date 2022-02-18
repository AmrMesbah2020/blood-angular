import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _apiService:ApiService) { }

  get() {
    return this._apiService.get(`posts`)
     
   }

   topRatedPost(){
    return this._apiService.get(`toprated`)
   }
 
 
   add(post:Post) {
     return this._apiService.post(`post`,post)
      
    }
    delete(id:Number){
      return this._apiService.post(`post`,`/${id}`)

    }
    publish(id:Number){
      return this._apiService.post(`post`,`/${id}`)

    }
    
    
}
