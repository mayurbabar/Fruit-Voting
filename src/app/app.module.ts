import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VoteComponent } from './components/vote/vote.component';
import { ViewvotesComponent } from './components/viewvotes/viewvotes.component';
import { Chart } from 'chart.js';
import { EqualValidator } from './equal-validator.directive';

import { FruitvotingService } from './services/fruitvoting.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EqualValidator,
    RegisterComponent,
    VoteComponent,
    ViewvotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    FruitvotingService,
    CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
