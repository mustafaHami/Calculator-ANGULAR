import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  values1 : string[] = ["C","PI","%","AC"]
  values2 :  string[] = ["7","8","9","x"]
  values3 :  string[] = ["4","5","6","÷"]
  values4 :  string[] = ["1","2","3","-"]
  values5 :  string[] = ["0",".","=","+"]
  valeur : string = ''
  constructor() { }

  ngOnInit(): void {
  }
  calcul(e:string) {
    if(e === '=') {
      const result = eval(this.valeur)
      this.valeur = result.toPrecision(3)
    }else if (e === 'C'){
      const result = this.valeur.slice(0, this.valeur.length - 1)
      this.valeur = result
    }else if (e === 'AC'){
      this.valeur = ''
    }else if (e === 'x'){
      this.valeur += '*'
    }else if (e === '÷'){
      this.valeur+= '/'
    }else if (e === 'PI'){
      const result = this.valeur.slice(0, this.valeur.length - 1)
      this.valeur += Math.PI.toPrecision(3)
    }else{
      this.valeur += e
    }
  }
}
