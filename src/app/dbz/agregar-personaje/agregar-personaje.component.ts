import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonaje {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    
    this.onNuevoPersonaje.emit(this.nuevo)
  }
}
