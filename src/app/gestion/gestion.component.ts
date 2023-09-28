import { Component } from '@angular/core';
import {faHome} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  protected readonly faHome = faHome;
}
