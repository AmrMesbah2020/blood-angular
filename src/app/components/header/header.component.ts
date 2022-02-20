import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

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
  isLogged=false;
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    // this.isLogged=this._userService,this.isLoggIn();

 this._userService.logged.subscribe(status=>{
   this.isLogged=status;
 });
  } 

  
}
