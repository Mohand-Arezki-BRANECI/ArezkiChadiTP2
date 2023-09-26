import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  listFilms = [
    {titre:'Le seigneur des Anneaux', link:'assets/img/LSDA.jpg'},
    {titre:'Harry Potter', link:'assets/img/HP.jpg'},
    {titre:'Star Wars', link:'assets/img/StarWars.jpg'},
    {titre:'Indiana Jones', link:'assets/img/IJ.jpg'},
    {titre:'Seven', link:'assets/img/seven.jpg'}];

  filmSelectionne: any;

  afficherFilm(film: any) {
    this.filmSelectionne = film;
  }

}
