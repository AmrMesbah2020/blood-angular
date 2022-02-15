import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isActive: boolean | undefined;

  active() {
      this.isActive= true;
    }

  navbarfixed:boolean = false;
  @HostListener('window:scroll',['$event'])onScroll(){
    if(window.scrollY >50){
      this.navbarfixed = true;
    }
    else{
      this.navbarfixed = false;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
