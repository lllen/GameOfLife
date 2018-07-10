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
  mas;
  max = 1000;
  min = 100;
  value = 100;
  step = 50;

  invert = true;
  thumbLabel = true;

  constructor(private gridService: GridService) {
  }

  ngOnInit() {
    this.mas = this.gridService.mas;
  }

  changeState(i, j){
    this.gridService.changeState(i, j);
  }

  play(){
    this.gridService.play();
    this.timer = setInterval(()=>{
      this.mas = this.gridService.play();
    }, this.value);
  }

  clear(){
    clearInterval(this.timer);
    this.gridService.clear();
    this.value = this.min;
  }

  random(){
    this.mas = this.gridService.random();
  }

}
