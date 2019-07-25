import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(public authS: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.authS.loginGoogle();
    this.getDatos();
  }

  logoutGoogle(){
    this.authS.logout();
  }

  getDatos(){
    console.log();
  }
  
}
