import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {

matrix = [];
size = 32;

  constructor() {
    for (let i=0; i < this.size; i++){
      this.matrix[i] = [];
      for (let j = 0; j < this.size; j++){
        this.matrix[i][j] = 0;
      }
    }
  }

  play(): void {
    var matrix2 = [];
	  for (let i = 0; i < this.matrix.length; i++){
      matrix2[i] = [];
      for (let j = 0; j < this.matrix.length; j++){
         matrix2[i][j] = 0;
        var neighbors = 0;
        if (this.matrix[this.isMin(i)-1][j] == 1) neighbors++;  //up
        if (this.matrix[i][this.isMax(j)+1] == 1) neighbors++;  //right
        if (this.matrix[this.isMax(i)+1][j] == 1) neighbors++;  //bottom
        if (this.matrix[i][this.isMin(j)-1] == 1) neighbors++;  //left
        if (this.matrix[this.isMin(i)-1][this.isMax(j)+1] == 1) neighbors++;
        if (this.matrix[this.isMax(i)+1][this.isMax(j)+1] == 1) neighbors++;
        if (this.matrix[this.isMax(i)+1][this.isMin(j)-1] == 1) neighbors++;
        if (this.matrix[this.isMin(i)-1][this.isMin(j)-1] == 1) neighbors++;

        if(this.matrix[i][j]) {
          (neighbors == 2 || neighbors == 3) ? matrix2[i][j] = 1 : matrix2[i][j] = 0;
        } else if(!this.matrix[i][j]) {
          (neighbors == 3) ? matrix2[i][j] = 1 : matrix2[i][j] = 0;
        }
        this.matrix[i][j] = matrix2[i][j];
		  }
    }
    // this.matrix = matrix2; ??????? not working
  }

  isMin(i: number): number {
    if(i == 0) return 32;
    return i;
  }

  isMax(i: number): number {
    if(i == 31) return -1;
    return i;
  }

  clear(): void {
    // this.matrix.forEach((row, i) => {
    //   row.forEach(element => {
    //     element = 0;
    //   });
    // });
    for(let i = 0; i < this.matrix.length; i++){
      for(let j = 0; j < this.matrix[i].length; j++){
        this.matrix[i][j] = 0;
      }
    }
  }

  random(): void {
    for(let i = 0; i < this.matrix.length; i++){
      for(let j = 0; j < this.matrix[i].length; j++){
        Math.random() > 0.5 ? this.matrix[i][j] = 1 : this.matrix[i][j] = 0;
      }
    }
  }

  changeState(i, j): void {
    this.matrix[i][j] = Number(!this.matrix[i][j]);
  }

}
