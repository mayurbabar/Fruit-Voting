import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FruitvotingService {
  checkMe:any;

  constructor(private _http:Http) { }

  loginRequest(email, password){
    return this._http.post("http://fruitvoting.epizy.com/fruitvoting/login.php/",{'email':email, 'password':password})
      .map(res=>{
        this.checkMe = res;

        if (this.checkMe._body !== "0"){
          //console.log("Correct Details: ", this.checkMe)
        }
        else{
          //console.log("Wrong Details: ", this.checkMe)
        }
        return res.json()
      });    
  }

  register(info){
    return this._http.post("http://fruitvoting.epizy.com/fruitvoting/register.php",info)
      .map(()=>"");
  }

  getFruits(){
    return this._http.get("http://fruitvoting.epizy.com/fruitvoting/getFruits.php/")
      .map(res=>{
        this.checkMe = res;

        if(this.checkMe._body !== "0"){
           return res.json()
        }

      });
  }

  addFruit(newFruit){
    return this._http.post("http://fruitvoting.epizy.com/fruitvoting/addFruit.php",{'newFruit':JSON.stringify(newFruit)})
      .map(res=>{
        this.checkMe = res;
      });
  }

  vote(info){
    return this._http.post("http://fruitvoting.epizy.com/fruitvoting/vote.php",JSON.stringify(info))
      .map(res=>{
        this.checkMe = res;
      });
  }

  viewVotes(){
    return this._http.get("http://fruitvoting.epizy.com/fruitvoting/viewvotes.php/")
      .map(res=>{
        this.checkMe = res;

        if(this.checkMe._body !== "0"){
           return res.json()
        }

      });
  }

  userHistory(id){
    return this._http.post("http://fruitvoting.epizy.com/fruitvoting/uservotes.php/", {'userID':id})
      .map(res=>{
        this.checkMe = res;

        if(this.checkMe._body !== "0"){
           return res.json()
        }

      });
  }

}
