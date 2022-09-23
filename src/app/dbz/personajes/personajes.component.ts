import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {


  get personajes(): Personajes[] {
    return this.dbzService.personaje;
  }
  constructor(private dbzService: dbzService) {}
}
