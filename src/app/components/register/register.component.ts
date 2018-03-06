import { Component, OnInit } from '@angular/core';
import { FruitvotingService} from '../../services/fruitvoting.service';
import { User } from '../../user';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    private fruitvotingService: FruitvotingService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  model = new User();
  confirmPassword: string;
  
  addUser(){
      this.fruitvotingService
        .register(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/login']);
  }

}
