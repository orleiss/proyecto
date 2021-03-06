import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './vista/componentes/menu-principal/menu-principal.component';
import { IniciarSesionComponent } from './vista/componentes/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './vista/componentes/inicio/inicio.component';
import { HomeComponent } from './vista/componentes/home/home.component';
import { CrearRegistroMedicoComponent } from './vista/componentes/atencionPaciente/crear-registro-medico/crear-registro-medico.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: IniciarSesionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crearRegistro', component: CrearRegistroMedicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
