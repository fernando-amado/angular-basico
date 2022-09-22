import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {
    console.log('holi soy su servicio');
  }
  private _personajes: Personaje[] = [
    { nombre: 'Krillin', poder: 12 },
    { nombre: 'Goku', poder: 12000 },
    { nombre: 'Vegeta', poder: 8000 },
  ];
  get personajes():Personaje[] {
    return [...this._personajes];
  }
}
