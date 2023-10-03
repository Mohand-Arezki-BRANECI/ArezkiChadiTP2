import { Component } from '@angular/core';
import {Movie} from "../../../Model/movie";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  listFilms = [
    new Movie('Le seigneur des anneaux','assets/img/LSDA.jpg'),
    new Movie('Harry Potter','assets/img/HP.jpg'),
    new Movie('Star Wars','assets/img/StarWars.jpg'),
    new Movie('Indiana Jones','assets/img/IJ.jpg'),
    new Movie('Seven','assets/img/seven.jpg')]

  filmSelectionne: Movie | undefined;

  afficherFilm(film: Movie) {
    this.filmSelectionne = film;
  }

}
