<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-requests',
  templateUrl: './make-requests.component.html',
  styleUrls: ['./make-requests.component.css']
})
export class MakeRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-requests',
  templateUrl: './make-requests.component.html',
  styleUrls: ['./make-requests.component.css']
})
export class MakeRequestsComponent implements OnInit {

public formRequest !: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.formRequest = this.formBuilder.group({

      // phone:[''],
      'phone' :new FormControl(" ",
      [Validators.required,
       Validators.pattern('/^(?=\d{11}$)(011|012|015)\d+/')
    ]),
      'address' :new FormControl("",Validators.required),
      'description' :new FormControl("",[Validators.required,
      Validators.minLength(6)]),
    });
  }

   
  onSubmit() {
    console.log(this.formRequest.value);
  }

}
>>>>>>> b67066c359c0da758243db92d1df366b25ff6bfb
