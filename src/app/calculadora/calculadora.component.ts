import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcResult() {
    //usando this.resultado this.... ele vai buscar a variável dentro da classe (calculadoraComponent)
    //caso não use o this, ele vai procurar variável local (dentro da propria função)

      this.resultado = this.numero1 + this.numero2;
      console.log(this.resultado)
  }

}
