import { Movie } from './../dashboard/movie';
import { Injectable, Component } from '@angular/core';


@Injectable()
@Component({
    providers:[Movie]
})
export class AddMovieService{
    constructor(private movie:Movie)
    {

    }
    addMovie(movieObject: Movie):void{
        this.movie = movieObject;
        console.log("Successfully inserted data to the database");

    }
}