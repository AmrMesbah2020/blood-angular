import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-conditions',
  templateUrl: './medical-conditions.component.html',
  styleUrls: ['./medical-conditions.component.css']
})
export class MedicalConditionsComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
