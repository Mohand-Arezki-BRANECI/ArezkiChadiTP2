import {Component, OnInit} from '@angular/core';
import {DataService} from "../../Services/data.service";
import {User} from "../../../Model/user";


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  user: User | undefined;
  constructor(private dataService: DataService) {}

  ngOnInit():void  {
    // Subscribe to the formData$ observable to get updates
    this.dataService.formData$.subscribe(data => {
      this.user = data;
    });
  }
  // Check if formData is available, otherwise display a 404 error
  protected get show404Error() {
    return !this.user;
  }

}
