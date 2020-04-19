import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarClave = false;
  myArray: Array<Date> = new Array<Date>();

  changeColor() {
    this.mostrarClave = !this.mostrarClave;

    this.myArray.push(new Date());
    console.log(this.myArray);
  }
}
