import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PersonalMedico } from 'src/app/modelo/PersonalMedico.model';

@Component({
    selector: 'app-menu-principal',
    templateUrl: './menu-principal.component.html',
    styleUrls: ['./menu-principal.component.css'],
  })


  export class MenuPrincipalComponent {
    personal: PersonalMedico = null;
    constructor(public authS: AuthService) {
      this.authS.user.subscribe((u)=>{
        if(u){
          this.personal = u;
        }
      });
    }

    logout() {
      this.authS.logout();
    }

  }
