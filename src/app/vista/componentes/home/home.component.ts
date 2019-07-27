import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { PersonalMedico } from 'src/app/modelo/PersonalMedico.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prueba2: any = null;
  personal: PersonalMedico = null;
  constructor(public authS: AuthService, private afs: AngularFirestore) {
    
    this.authS.user.subscribe((u)=>{
      if(u){
        this.personal = u;
      }
    });
    
  }

  ngOnInit() {
  }

}
