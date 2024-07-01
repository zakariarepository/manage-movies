import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../modules/film";
import {Router} from "@angular/router";

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent{

  @Input() film! : Film;

  clickFilm(){
    this.router.navigate([`detail/${this.film.id}`])
  }

  constructor(private router : Router) {
  }

}
