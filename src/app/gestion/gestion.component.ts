
import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {faHome} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  formData: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Subscribe to the formData$ observable to get updates
    this.dataService.formData$.subscribe(data => {
      this.formData = data;
    });
  }

  // Check if formData is available, otherwise display a 404 error
  protected get show404Error() {
    return !this.formData;
  }

}
