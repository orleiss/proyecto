import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: IniciarSesionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
