import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { VerComponent } from './ver/ver.component';
import { AñadirComponent } from './añadir/añadir.component';
import { UsuarioService } from './usuario.service';
import { IndexComponent } from './index/index.component';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
    ////material 
    //MatToolbarModule,
    //MatTabsModule,
    //MatButtonModule,
    //MatIconModule,
    //MatCardModule,
    ////BrowserAnimationsModule
    //material
  ],
  declarations: [EditarComponent, ListarComponent, VerComponent, AñadirComponent, IndexComponent],
  providers: [UsuarioService]


})
export class UsuarioModule { }
