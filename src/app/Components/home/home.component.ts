import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public animationClass :string [] = ["fa-beat","fa-bounce","fa-flip","fa-shake","fa-spin",];

  randomClass:string = '';

  public animation() : void {
    if(this.randomClass == ''){
      this.randomClass = this.animationClass[Math.ceil(Math.random() * 5)];
    } else {
      this.randomClass = '';
    }
  }

}
