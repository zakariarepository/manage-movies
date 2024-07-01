import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Film} from "../modules/film";
import {FilmService} from "../film.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent{

  film! : Film ;
  id : string;

  public url='https://image.tmdb.org/t/p/w500';

  constructor(private route : ActivatedRoute, private filmService : FilmService) {
    this.id="";
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id']


    // @ts-ignore
    this.film = this.filmService.getFilmById(this.id).subscribe(
      (response: Film) => {
        this.film = response;
        this.film.poster_path=this.url+this.film.poster_path;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );


  }

}
