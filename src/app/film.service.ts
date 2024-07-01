import { Injectable } from '@angular/core';
import {Film} from "./modules/film";
import {ResponseFilm} from "./modules/ResponseFilm";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films : Array<Film>= [];
  API_TOKEN:any="6a99c14b767fa1380fe1cfd1ad04bbe8"

  constructor(private http : HttpClient) {
    this.films=[];
  }


  getFilms(){
    return this.http.get<ResponseFilm>('https://api.themoviedb.org/3/movie/popular?api_key='+this.API_TOKEN);
  }

  getSearchedFilms(motcle : string){
    return this.http.get<ResponseFilm>('https://api.themoviedb.org/3/search/movie?api_key='+
                    this.API_TOKEN+'&language=fr&query='+motcle+"&page=1");
  }

  public getFilmById(id: String): Observable<Film> {
    return this.http.get<Film>(`https://api.themoviedb.org/3/movie/${id}?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8`)
  }

}



