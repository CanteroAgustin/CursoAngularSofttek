import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeCounter: number = 0;
  incativeCounter: number = 0;

  constructor() { }

  increaseInactive(){
    this.incativeCounter++;
  }

  increaseActive(){
    this.activeCounter++;
  }

  getActive(){
    return this.activeCounter;
  }

  getInactive(){
    return this.incativeCounter;
  }

}
