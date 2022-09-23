import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-admin-shell',
  templateUrl: './dbz-admin-shell.component.html',
})
export class DbzAdminShellComponent {
  nuevoPersonaje: Personajes = {
    nombre: '',
    poder: 0,
  };
  constructor(){}
}
