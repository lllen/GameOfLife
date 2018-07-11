import {Component, OnInit} from '@angular/core';
import { GridService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  timer;
  size = 32;
  matrix;
  max = 1000;
  min = 100;
  speed = 100;
  step = 50;
  invert = true;
  thumbLabel = true;

  constructor(private gridService: GridService) {
  }

  ngOnInit(){
    this.matrix = this.gridService.matrix;
  }

  changeState(i: number, j: number): void{
    this.gridService.changeState(i, j);
  }

  play(): void{
    this.stopTimer();
     this.gridService.play();
    this.timer = setInterval(()=>{
       this.gridService.play();
    }, this.speed);
  }

  stopTimer(): void{
    clearInterval(this.timer);
  }

  clear(): void{
    this.stopTimer();
    this.gridService.clear();
    this.speed = this.min;
  }

  random(): void{
    this.gridService.random();
  }

}
