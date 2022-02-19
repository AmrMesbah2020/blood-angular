import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _apiService:ApiService) { }

  get() {
    return this._apiService.get(`all-feedback`)
     
   }

}
