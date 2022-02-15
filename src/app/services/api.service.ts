import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url='http://localhost:8000/api';

  constructor(private _httpClient:HttpClient) { }


  get(url:string) {
    return this._httpClient.get(`${this.api_url}/${url}`)
     
   }
  
  
   post(url:string,body:any) {
     return this._httpClient.post(`${this.api_url}/${url}`,body)
      
    }
 
}
