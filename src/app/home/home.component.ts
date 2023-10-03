import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  private animationClass = ["fa-beat","fa-bounce","fa-flip","fa-shake","fa-spin",];

  randomValue: number | undefined;
  randomClass:string = '';

protected animation(){
  this.randomValue = Math.floor(Math.random() * 5);
  if(this.randomClass == ''){
    this.randomClass = this.animationClass[this.randomValue];
  } else {
    this.randomClass = '';
  }
}

}
