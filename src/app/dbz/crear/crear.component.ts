import { Component, Input} from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent {
  @Input() nuevoPersonaje: Personajes = {
    nombre: '',
    poder: 0,
  };
  constructor(private dbzService: dbzService) {}
  agregar() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
  }
}
