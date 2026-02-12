import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone:true,
  imports: [MatIconModule,MatIcon],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav {
  isslideOut = true;
  constructor( private router:Router){}

  toggleSlideOut(): void{
    this.isslideOut = !this.isslideOut;
  }
  onDash(){
    this.router.navigate(['dashboard']);
  }
   onProfile(){
    this.router.navigate(['profile']);
  }
   onHistory(){
    this.router.navigate(['history']);
  }
   onLogout(){
    this.router.navigate(['login']);
  }

}
