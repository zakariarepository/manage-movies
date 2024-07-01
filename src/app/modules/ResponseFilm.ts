import {Film} from "./film";

export class ResponseFilm{
  results : Array<Film>=[];


  constructor(films: Array<Film>) {
    this.results = films;
  }
}
