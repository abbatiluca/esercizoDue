import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pomeriggio2';
  selected = 'list';
  movies: Array<Movie> = MOVIES;
  selectedmovie: Movie;
  cambia(type) {
    this.selected = type
  }
  constructor() { }

  viewDetail(movieId: any) {
    console.log(movieId);
    this.selectedmovie = this.movies.find((value) => {
      return value.id === movieId;
    })
    this.selected = 'detail';
    console.log(this.selectedmovie.title);
  }

  editDetail(movieId: any) {
    console.log(movieId);
    this.selectedmovie = this.movies.find((value) => {
      return value.id === movieId;
    })
    this.selected = 'edit';
    console.log(this.selectedmovie.title);
  }

  updateMovie(movie:any){
    console.log(movie);
    let x = this.movies.findIndex (value => value.id === movie.id) //return è implicito -> forma accorciata -> si può fare solo se la stringa è unica
    console.log(x);
    for(let prop in movie){
      this.movies[x][prop] = movie[prop];
    }
  }

  showcontent(type: string): void {
    this.selected = type;
  }

  ngOnInit() {

  }
}