import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { MovieComponent } from './dashboard/movie/movie.component';
import { AddMovieComponent } from './navigation-panel/add-movie/add-movie.component';
import { RegisterCustomerComponent } from './navigation-panel/register-customer/register-customer.component';

import {RouterModule, Routes} from '@angular/router';




const appRoutes: Routes = [
  {path:'home', component:DashboardComponent},
  {path:'addMovie', component:AddMovieComponent},
  {path:'registerCustomer',component:RegisterCustomerComponent},
  {path:'**',component:DashboardComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DashboardComponent,
    NavigationPanelComponent,
    MovieComponent,
    AddMovieComponent,
    RegisterCustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
