import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzAdminShellComponent } from './dbz-admin-shell/dbz-admin-shell.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { dbzService } from './services/dbz.service';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzAdminShellComponent,
    PersonajesComponent,
    CrearComponent
  ],
  exports:[
    DbzAdminShellComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    dbzService
  ]
})
export class DbzModule { }
