import { Component, OnInit } from '@angular/core';
import { FruitvotingService} from '../../services/fruitvoting.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as Chart from 'chart.js';
import { Color } from 'ng2-charts';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-viewvotes',
  templateUrl: './viewvotes.component.html',
  styleUrls: ['./viewvotes.component.css']
})
export class ViewvotesComponent implements OnInit {

  fruits;
  
  public fruitName = [];
  public fruitCount = [];
  public doughnutChartType:string = 'doughnut';
  public colorsEmptyObject = [{}];
  public backgroundColor = [];
  public hoverBackgroundColor = [];
  public datasets: any[];
  
  
  public doughnutChartColors = //[]  
  
  [
    {
        backgroundColor: 'rgba(127,255,212,2.2)',
        hoverBackgroundColor: 'rgba(30,144,255,2.2)',
        borderColor: '#F0FFFF'
    }
  ]
  

  constructor(
    private fruitvotingService: FruitvotingService,
    private router: Router,
    private _cookieService:CookieService
  ) { }

  ngOnInit() {

    if (this._cookieService.get('userData') === undefined){
      this.router.navigate(['/login']);
    }
    else{
      this.getResult();
    }

  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color         /*{
      backgroundColor: color,
      borderColor: '#FFFFFF'
      }; */
  }

  public chartClicked(e:any):void {
    //console.log("Tick");
  }
 
  public chartHovered(e:any):void {
    //console.log("Tick");
  }x

  getResult(){
    
    this.fruitvotingService
        .viewVotes()
        .subscribe(fruits => {
          this.fruits = fruits

          this.getChartData()
      } );
      
  }

  getChartData(){

    for (let i=0; i< this.fruits.length; i++)   {
      this.fruitName.push(this.fruits[i].fruit);
      this.fruitCount = [...this.fruitCount,  this.fruits[i].fruit_count];

      this.backgroundColor = [...this.backgroundColor, this.getRandomColor()]
      this.hoverBackgroundColor = [...this.hoverBackgroundColor, this.backgroundColor[i]]
    }

    this.generateDatasets();   
  }

  generateDatasets(){
    this.datasets = [
      {
        data: this.fruitCount,
        backgroundColor: this.backgroundColor,
        hoverBackgroundColor: this.hoverBackgroundColor
      }];
  }
  

}

