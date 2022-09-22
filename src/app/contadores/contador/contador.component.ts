import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  templateUrl:'./contador.component.html'
})
export class ContadorComponent {
  titulo: string = 'Contador app';
  numero: number = 10;
  base :number= 5;


  operacion(operador:number): number {
    return (this.numero += operador);
  }
}
