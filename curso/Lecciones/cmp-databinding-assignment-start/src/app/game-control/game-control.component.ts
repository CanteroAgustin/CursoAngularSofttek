import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  gameInit = new EventEmitter<number>();
  count = 0;
  interval;
  cancelar = false;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.gameInit.emit(this.count++);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
