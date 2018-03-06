import { Component, OnInit } from '@angular/core';
import { FruitvotingService} from '../../services/fruitvoting.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private _fruitvotingService:FruitvotingService;
  userData:UserData[];
  checkMe:any;
  warning:string;
  email:any;
  password:any;
  

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private fruitvotingService: FruitvotingService,
    private _cookieService:CookieService
  ) { }

  ngOnInit() {
    this.clearCookie();
  }

  clearCookie(){
    if(this._cookieService.get('userData')){
      this._cookieService.remove('userData');
    }
  }
 
  loginRequest(){
    this.fruitvotingService.loginRequest(this.email, this.password)
      .subscribe(res=>{
        this.checkMe = res;
        //console.log("Return From service: ", this.checkMe)

        if(this.checkMe !== 0){
          this.userData = res

          this._cookieService.put("userData",btoa(JSON.stringify(this.userData)));
          this.goToVote()
              
          //console.log(this.userData[0].ID)
          //console.log(this.userData)
        }
        else{
          this.warning = "You have entered incorrect login details..."
          //console.log("Status: ", this.warning);
        }

      });    
  }

  goToVote(){
    //this.router.navigate(['/vote',{id:this.userData[0].ID, name:this.userData[0].name}]);
    this.router.navigate(['/vote']);
  }

  register(){
    this.router.navigate(['/register']);
  }

}

interface UserData{
  ID: number;
  name: string;
}
