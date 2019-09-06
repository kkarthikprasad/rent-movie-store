import { Movie } from './movie';
import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class MoviesServices{

    postData:string;

    constructor(private _http:Http)
    {

    }

    getMovies():Observable<Movie[]>
    {
        return this._http.get("http://localhost:41007/api/movie").map((response: Response) => <Movie[]>response.json() );
    }
    // getMovies():Movie[]
    // {
    //     return [

    //         { name:"Spidy", picturePath:"pic path",isAvailable:"yup", movieDescription:"movie description" , genre:"action" ,rating:4,trailerLink:"asdfasf"},
    //         { name:"Speeedy", picturePath:"pic path",isAvailable:"yup", movieDescription:"movie description" , genre:"action" ,rating:4,trailerLink:"asdfasf"},
    //         { name:"Spidy", picturePath:"pic path",isAvailable:"yup", movieDescription:"movie description" , genre:"action" ,rating:4,trailerLink:"asdfasf"}
        
    //     ];
    // }

    postMovie(movie:Movie):void{
        // const hdrs = new Headers();
        // hdrs.append('Content-type','application/json');
        // console.log(JSON.stringify(movie));
        // this._http.post("http://localhost:41007/api/movie",JSON.stringify(movie),{headers:hdrs}).subscribe( () => {}, err => console.error(err) );

       
       
        var headers = new Headers();
        headers.append('content-type', 'application/json');


        // console.log(headers);

        this._http.post('http://localhost:41007/api/movie' , movie, {headers:headers})
        .map(res => res.json()).subscribe( data => this.postData = JSON.stringify(data), 
            err => console.log(err),
            () => console.log("finished")
        );
    }



}