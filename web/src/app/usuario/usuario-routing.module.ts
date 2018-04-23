import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { VerComponent } from './ver/ver.component';
import { IndexComponent } from './index/index.component';

const usuariosRoutes: Routes = [
  {
  path: '',
    component: ListarComponent,
  children: [
    {
      path: '',
      component: ListarComponent,
      children: [
        {
          path: ':id',
          component: VerComponent
        },
        
      ]
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
