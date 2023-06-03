import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  show:boolean=false;


  activeMenuItem:number=1;

  setItemMenu(value:number){
    this.activeMenuItem=value
  }


  get menuAtivo(){
    return this.activeMenuItem    }
}
