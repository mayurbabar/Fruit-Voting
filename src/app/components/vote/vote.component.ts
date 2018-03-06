import { Component, OnInit } from '@angular/core';
import { FruitvotingService} from '../../services/fruitvoting.service';
import { Vote } from '../../vote';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {

  private _fruitvotingService:FruitvotingService;
  fruits:any;
  userVotes:any;
  entries = [];
  newFruit:string;
  NewVote = new Vote();
  selectedFruitName:string;
  selectedFruitID:number;
  selectedFruit:any;
  userData;
  userName:string;
  userID: number;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private fruitvotingService: FruitvotingService,
    private _cookieService:CookieService
  ) { }

  ngOnInit() {
    
    if (this._cookieService.get('userData') === undefined){
      this.router.navigate(['/login']);
    }
    else{
      this.userData = atob(this._cookieService.get('userData'));
      this.userData = JSON.parse(this.userData);
      
      this.userID =  this.userData[0].ID;
      this.userName =  this.userData[0].name;

      this.showFruits();
      this.userHistory();
    }
  }

  authenticateUser(){
    if (this._cookieService.get('userData') === undefined){
      this.router.navigate(['/login']);
    }
  }
    

  showFruits(){
    this.fruitvotingService
      .getFruits()
      .subscribe(fruits => {
        this.fruits = fruits;
        this.selectedFruit = this.fruits[0].fruit_id;
      } );
  }

  userHistory(){
    this.fruitvotingService
        .userHistory(this.userID)
        .subscribe(fruits => {
          this.userVotes = fruits
      } );
  }

  addFruit(){
    this.fruitvotingService
      .addFruit(this.newFruit)
      .subscribe(()=> {
        this.showFruits();
      } )
      this.newFruit = ""
  }

  vote(){
    this.NewVote.dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.NewVote.userID = this.userID;
    this.NewVote.fruitID=this.selectedFruit;
    
    this.fruitvotingService
      .vote(this.NewVote)
      .subscribe(()=> {
        this.viewVotes();
      } )
    
  }
 
  viewVotes(){
    this.router.navigate(['/viewvotes']);
  }

}
