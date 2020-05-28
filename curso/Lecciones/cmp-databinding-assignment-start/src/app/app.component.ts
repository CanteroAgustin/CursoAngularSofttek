import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds = [];
  evens = [];

  onGameInit(number) {
    if (number % 2 === 0) {
      this.evens.push({
        value: number
      });
    } else {
      this.odds.push({
        value: number
      });
    }
  }
}
