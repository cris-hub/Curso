import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule', data: { preload: true } },
  { path: 'usuarios', loadChildren: 'app/usuario/usuario.module#UsuarioModule', data: { preload: true } },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //enableTracing: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
