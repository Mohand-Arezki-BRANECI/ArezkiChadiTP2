import { Component } from '@angular/core';
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  protected movieList = [
    new Movie('Le seigneur des anneaux','assets/img/LSDA.jpg'),
    new Movie('Harry Potter','assets/img/HP.jpg'),
    new Movie('Star Wars','assets/img/StarWars.jpg'),
    new Movie('Indiana Jones','assets/img/IJ.jpg'),
    new Movie('Seven','assets/img/seven.jpg')]

  protected selectedMovie: Movie | undefined;

  protected printMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

}
