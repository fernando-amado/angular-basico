import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 19;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre(heroe:string): void {
   this.nombre = heroe
  }
  cambiarEdad(edad:number): void {
    this.edad = edad;
  }
}
