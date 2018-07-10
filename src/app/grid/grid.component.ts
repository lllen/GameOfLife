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
  range = Array(this.size).fill(null).map((x, i) => i);
  mas;

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
    setInterval(()=>{
      this.mas = this.gridService.play();
    }, 300);
  }

  clear(){
    this.gridService.clear();
  }
}
