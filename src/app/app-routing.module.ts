import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './vista/componentes/menu-principal/menu-principal.component';
import { IniciarSesionComponent } from './vista/componentes/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './vista/componentes/inicio/inicio.component';
import { HomeComponent } from './vista/componentes/home/home.component';
import { CrearRegistroMedicoComponent } from './vista/componentes/atencionPaciente/crear-registro-medico/crear-registro-medico.component';
import { CrearHistorialMedicoComponent } from './vista/componentes/atencionPaciente/crear-historial-medico/crear-historial-medico.component';
import { ConsultarRegistroMedicoComponent } from './vista/componentes/atencionPaciente/consultar-registro-medico/consultar-registro-medico.component';
import { ConsultarHistorialMedicoComponent } from './vista/componentes/atencionPaciente/consultar-historial-medico/consultar-historial-medico.component';
import { RegistroPendiente } from './vista/componentes/atencionPaciente/registros-pendientes/registros-pendientes.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: IniciarSesionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crearRegistro', component: CrearRegistroMedicoComponent },
  { path: 'crearHistorial', component: CrearHistorialMedicoComponent },
  { path: 'consultarRegistro', component: ConsultarRegistroMedicoComponent },
  { path: 'consultarHistorial', component: ConsultarHistorialMedicoComponent },
  { path: 'RegistroPendiente', component: RegistroPendiente },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
