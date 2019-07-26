import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
    selector: 'app-menu-principal',
    templateUrl: './menu-principal.component.html',
    styleUrls: ['./menu-principal.component.css'],
  })


  export class MenuPrincipalComponent {
    ocupacion : String = null;
    constructor(public authS: AuthService) {
      this.authS.user.subscribe((d)=>{
        if(d.rol == 'Medico'){
          this.ocupacion = "Medico";
        }
        else{
          this.ocupacion = "Enfermera";
        }
      });
    }

    logout() {
      this.authS.logout();
    }

  }
