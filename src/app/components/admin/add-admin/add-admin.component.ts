import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  adminForm = new FormGroup({});
  token: any = localStorage.getItem('Token');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  admin = new User()
  email: string = '';
  done:boolean=false;
  errorMsg:any=[];
  constructor(private _formBuilder: FormBuilder, private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {



    this.adminForm = this._formBuilder.group({

      email: ['', [Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],],
    });

  }


  isValidControl(name: string): boolean {
    return this.adminForm.controls[name].valid;
  }

  isInValidAndTouched(name: string): boolean {
    return this.adminForm.controls[name].invalid && (this.adminForm.controls[name].dirty || this.adminForm.controls[name].touched);
  }

  isControlHasError(name: string, error: string): boolean {
    return this.adminForm.controls[name].invalid && this.adminForm.controls[name].errors?.[error];
  }



  add() {
    let admin = new User()
    admin.email = this.adminForm.value.email;

    this._httpClient.post('http://localhost:8000/api/add-admin', admin, { headers: this.headers }).subscribe(
      (response: any) => {
        console.log(response);
        this.done=true
        console.log(this.done);

      },
      (error: any) => {
        this.errMsg = error;
        this.errorMsg.push(error.error);
        console.log(this.errMsg);

      }
    )
  }
  errMsg(errMsg: any) {
    throw new Error('Method not implemented.');
  }
}






