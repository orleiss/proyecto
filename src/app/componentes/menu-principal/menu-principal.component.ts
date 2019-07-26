import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
    selector: 'app-menu-principal',
    templateUrl: './menu-principal.component.html',
    styleUrls: ['./menu-principal.component.css'],
  })


  export class MenuPrincipalComponent {
    ocupacion : string = null;
    public esMedico : boolean = false;
    constructor(public authS: AuthService) {
      this.authS.user.subscribe((d)=>{
        if(d.ocupacion == 'Medico'){
          this.ocupacion = "Medico"
          this.esMedico = true;
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
