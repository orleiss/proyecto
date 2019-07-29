import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './vista/componentes/menu-principal/menu-principal.component';
import { environment } from '../environments/environment';

import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IniciarSesionComponent } from './vista/componentes/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './vista/componentes/inicio/inicio.component';
import { HomeComponent } from './vista/componentes/home/home.component';
import { CrearRegistroMedicoComponent } from './vista/componentes/atencionPaciente/crear-registro-medico/crear-registro-medico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearHistorialMedicoComponent } from './vista/componentes/atencionPaciente/crear-historial-medico/crear-historial-medico.component';
import { ConsultarRegistroMedicoComponent } from './vista/componentes/atencionPaciente/consultar-registro-medico/consultar-registro-medico.component';
import { ConsultarHistorialMedicoComponent } from './vista/componentes/atencionPaciente/consultar-historial-medico/consultar-historial-medico.component';
import { ModalHistorialComponent } from './vista/componentes/atencionPaciente/modal-formulario-historial/modal-historial.component';
import { ModalComponent } from './vista/componentes/atencionPaciente/modal-formulario-registro/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    IniciarSesionComponent,
    InicioComponent,
    HomeComponent,
    CrearRegistroMedicoComponent,
    CrearHistorialMedicoComponent,
    ConsultarRegistroMedicoComponent,
    ConsultarHistorialMedicoComponent,
    ModalHistorialComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
