import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'usuarios', loadChildren: 'app/usuario/usuario.module#UsuarioModule',  data: { preload: true } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //enableTracing: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
