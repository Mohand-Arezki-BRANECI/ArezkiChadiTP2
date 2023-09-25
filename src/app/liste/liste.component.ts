import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  listFilms = [
    {titre:'Le seigneur des Anneaux', link:''},
    {titre:'Harry Potter', link:''},
    {titre:'Star Wars', link:''},
    {titre:'Indiana Jones', link:''},
    {titre:'Seven', link:''}];


  filmSelectionne: any; // Pour stocker le film sélectionné

  afficherFilm(film: any) {
    this.filmSelectionne = film;
  }

}
