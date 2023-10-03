import { Component } from '@angular/core';
import {faHome, faList, faShieldCat, faSitemap} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  protected readonly faHome = faHome;
  protected readonly faList = faList;
  protected readonly faSitemap = faSitemap;
  protected readonly faShieldCat = faShieldCat;
}
