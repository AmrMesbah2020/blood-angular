import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Feedback } from 'src/app/models/feedback.model';
import { Feedback } from '../../../models/feedback.model';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: Feedback[] = [];
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  feedback = new Feedback;


  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {


    this._httpClient.get("http://donnatelife.herokuapp.com/api/all-feedback",{ headers: this.headers }).subscribe(

      (response: any) => {
        this.feedbacks = response;
        console.log(this.token);
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )


  }

  }


