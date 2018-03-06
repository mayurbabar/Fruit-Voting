import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
    
  }

  clearCookie(){
    if(this._cookieService.get('userData')){
      this._cookieService.remove('userData');
      //console.log("Cookie after logout: ", JSON.parse(this._cookieService.get('userData')))
    }
  }

}
