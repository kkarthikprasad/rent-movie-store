import { MoviesServices } from './moviesService';
import { Movie } from './movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[MoviesServices]
})
export class DashboardComponent implements OnInit {

  moviesList : Movie[] = [
  ];

  // mo:Movie =  { name:"Spidy", picturePath:"pic path",isAvailable:"yup", movieDescription:"movie description" , genre:"action" ,rating:4,trailerLink:"asdfasf"};
  
  constructor(private _movieService: MoviesServices) 
  {

  }

  ngOnInit() {

    // this.moviesList = this._movieService.getMovies();

    this._movieService.getMovies().subscribe(moviesData => this.moviesList =moviesData);
  }

}
