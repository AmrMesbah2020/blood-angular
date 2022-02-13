import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-requests',
  templateUrl: './make-requests.component.html',
  styleUrls: ['./make-requests.component.css']
})
export class MakeRequestsComponent implements OnInit {

  formRequest = new FormGroup ({
    phone:new FormControl(),
    description:new FormControl(),

  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

    this.formRequest = this.fb.group({

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
