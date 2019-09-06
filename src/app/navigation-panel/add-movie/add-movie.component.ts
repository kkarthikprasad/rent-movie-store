import { MoviesServices } from './../../dashboard/moviesService';
import { AddMovieService } from '../addMovieService';
import { Component, OnInit } from '@angular/core';
import {Movie} from '../../dashboard/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers:[MoviesServices]
})
export class AddMovieComponent implements OnInit {
  addedMovie:any;

  constructor(private _movieService: MoviesServices) { 
    
  }

  ngOnInit() {
  }
  
  addMovie(form:any):void{


    
   
    this.addedMovie = form;
    console.log("creating  Movie objet  to be added to the database");
    console.log( this.addedMovie.genre);

    // let movie = {
    //   "name" : this.addedMovie.MovieName,
    //   "picturePath" : this.addedMovie.picturePath,
    //   "isAvailable" : this.addedMovie.isAvailable,
    //   "movieDescription" : this.addedMovie.movieDescription,
    //   "genre" : this.addedMovie.genre,
    //   "rating" : this.addedMovie.rating,
    //   "trailerLink" : this.addedMovie.trailerLink

    // };

    console.log("adding movie to the database");
    
    this._movieService.postMovie(this.addedMovie);
    // this._movieService.postMovie();
    
    console.log("Added the movie to the database");
  }




}
