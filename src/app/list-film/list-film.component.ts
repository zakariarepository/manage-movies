import {Component, OnInit} from '@angular/core';
import {FilmService} from "../film.service";
import {ResponseFilm} from "../modules/ResponseFilm";
import {HttpErrorResponse} from "@angular/common/http";
import {Film} from "../modules/film";

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit{

  public films:any[];
  public url='https://image.tmdb.org/t/p/w500';

  constructor(private filmService : FilmService) {
    this.films=[];
  }

  ngOnInit(){
    this.getFilms();
  }

  public getFilms(): void {
    this.filmService.getFilms().subscribe(
      (response: ResponseFilm) => {
        this.films = response.results;
        this.films.forEach(film => film.poster_path=this.url+film.poster_path);
        console.log(response.results);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  searchText : string ='';

  onSearchTextEnetered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
    if(searchValue!=''){
      this.filmService.getSearchedFilms(searchValue).subscribe(
        (response: ResponseFilm) => {
          this.films = response.results;
          this.films.forEach(film => film.poster_path=this.url+film.poster_path);
          console.log(response.results);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }else {
      this.getFilms();
    }

  }
}
