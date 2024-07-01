import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { FilmItemComponent } from './film-item/film-item.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import { DetailFilmComponent } from './detail-film/detail-film.component';
import {RouterModule, Routes} from "@angular/router";


const appRoutes : Routes = [
  {path : ''  , component : ListFilmComponent},
  {path : 'detail/:id'  , component : DetailFilmComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListFilmComponent,
    FilmItemComponent,
    SearchComponent,
    DetailFilmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
