import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {

mas = [];
size = 32;

  constructor(){
    for (let i=0; i<this.size; i++){
      this.mas[i] = [];
      for (let j=0; j<this.size; j++){
        this.mas[i][j]=0;
      }
    }
  }

  play(){
    var mas2 = [];
	  for (let i = 0; i < this.size; i++){
      mas2[i] = [];
      for (let j = 0; j < this.size; j++){
         mas2[i][j] = 0;
        var neighbors = 0;
        if (this.mas[this.isMin(i)-1][j] == 1) neighbors++;//up
        if (this.mas[i][this.isMax(j)+1] == 1) neighbors++;//right
        if (this.mas[this.isMax(i)+1][j] == 1) neighbors++;//bottom
        if (this.mas[i][this.isMin(j)-1] == 1) neighbors++;//left
        if (this.mas[this.isMin(i)-1][this.isMax(j)+1] == 1) neighbors++;
        if (this.mas[this.isMax(i)+1][this.isMax(j)+1] == 1) neighbors++;
        if (this.mas[this.isMax(i)+1][this.isMin(j)-1] == 1) neighbors++;
        if (this.mas[this.isMin(i)-1][this.isMin(j)-1] == 1) neighbors++;

        if(this.mas[i][j]) {
          (neighbors == 2 || neighbors == 3) ? mas2[i][j] = 1 : mas2[i][j] = 0;
        } else if(!this.mas[i][j]) {
          (neighbors == 3) ? mas2[i][j] = 1 : mas2[i][j] = 0;
        }
		  }
    }
    this.mas = mas2;
    return this.mas;
  }

  isMin(i): number{
    if(i == 0) return 32;
    return i;
  }

  isMax(i): number{
    if(i == 31) return -1;
    return i;
  }

  clear(){
    for(let i = 0; i < this.mas.length; i++){
      for(let j = 0; j < this.mas[i].length; j++){
        this.mas[i][j] = 0;
      }
    }
  }

  random(){

  }

  changeState(i, j){
    if(this.mas[i][j]===1) this.mas[i][j]=0
    else this.mas[i][j]=1;
  }

}
