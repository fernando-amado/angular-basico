import { Injectable } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Injectable()
export class dbzService {
  constructor() {

  }
  private _personaje: Personajes[] = [
    {
      nombre: 'Vegeta',
      poder: 12000,
    },
    {
      nombre: 'Goku',
      poder: 15000,
    },
  ];

  get personaje(): Personajes[] {
    return [...this._personaje];
  }

  agregarPersonaje(personaje:Personajes)
  {
    this._personaje.push(personaje);
  }

}
