import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-add-artical',
  templateUrl: './add-artical.component.html',
  styleUrls: ['./add-artical.component.css']
})
export class AddArticalComponent implements OnInit {

  image: any;
  addArtical = new FormGroup({});
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  article = new Article();
  errMsg: any;

  constructor(private _formBuilder: FormBuilder, private _httpClient: HttpClient, private router: Router) {
  }
  ngOnInit(): void {

    if (localStorage.getItem('Token') == null) {
      this.router.navigate(['/login']);
    }

    this.addArtical = this._formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]],
      resources: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
      content: ["", [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      image: [null,],


    });




  }
  isValid(name: string): boolean {
    return this.addArtical.controls[name].valid;

  }
  isValidControl(name: string): boolean {
    return this.addArtical.controls[name].valid;

  }
  // isInValidAndTouched(name:string):boolean{
  //   return this.addArtical.controls[name].errors? && (this.addArtical.controls[name].touched) && (this.addArtical.controls[name].dirty);
  // }

  onfile(event: any) {
    this.image = event.target.files[0];
    console.log(this.image);
  }

  addArticle() {
    
    let formData = new FormData;
    formData.append('image',this.image,this.image.name);
    formData.append('title',this.addArtical.value.title);
    formData.append('resources',this.addArtical.value.resources);
    formData.append('content',this.addArtical.value.content);

    let article = new Article()
    // article.title = this.addArtical.value.title;
    // article.resources = this.addArtical.value.resources;
    // article.content = this.addArtical.value.content;
    formData.forEach(file => console.log("File:", file));

    this._httpClient.post('http://localhost:8000/api/add-article/', formData, { headers: this.headers }).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        this.errMsg = error;
        console.log(this.errMsg);

      }
    );this.router.navigate(['/admin/adminn/articles-admin'])
    .then(() => {
      
      window.location.reload()
    })
  } 
 
}