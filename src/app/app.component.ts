import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pascal-triangle';
  result = 0;

  constructor(){
    this.pascal(9);
  }

  factorial(num){
    if(num <= 1){
      return 1;
    }
    let result = num;
    for(let i=1; i<num ;i++){
      result= result * (num-i);
    }
    return result;
  }

  pascal(power){ // (a+b)^n     n:power
   const n = this.factorial(power);
   let array = [];

   for(let k = 0; k<=power; k++){
      let res = this.factorial(k)*this.factorial(power-k);
      array.push(n/res);
   }

   console.log("Power",power,"Array=>", array);
  }

}
