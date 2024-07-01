export class Film{

  id : string;
  title : string;
  original_language : string;
  overview : string;
  poster_path : string;
  vote_average : string;


  constructor(id: string, title: string, original_language: string, overview: string, poster_path: string, vote_average: string) {
    this.id = id;
    this.title = title;
    this.original_language = original_language;
    this.overview = overview;
    this.poster_path = "https://image.tmdb.org/t/p/w500"+poster_path+"?api_key=6a99c14b767fa1380fe1cfd1ad04bbe8";
    this.vote_average = vote_average;
  }
}

