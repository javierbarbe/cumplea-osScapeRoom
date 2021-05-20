import { PrincipalComponent } from './componentes/principal/principal.component';
import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ { path: '', component: PrincipalComponent, pathMatch: 'full' },
{ path: 'principal', component: PrincipalComponent, pathMatch: 'full' },
{ path: 'prueba1', component: Prueba1Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
