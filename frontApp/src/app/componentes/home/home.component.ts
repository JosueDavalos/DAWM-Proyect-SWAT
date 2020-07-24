import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserService, AuthenticationService } from 'src/app/servicios';
import { first } from 'rxjs/operators';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 introJS = introJs();
  loading = false;
  currentUser: User;
  userFromApi: User;



  

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;

    this.introJS.setOptions({
      steps: [
      {
         element: '#step1',
         intro: 'Adopta un corazón',
         position: 'bottom'
      },
      {
        element: '#step2',
        intro: 'Estos son nuestros servicios',
        position: 'top'
      },
      {
        element: '#step3',
        intro: 'Nuestros patrocinadores',
        position: 'top'
      },
      {
        element: '#step4',
        intro: 'Contáctate con nosotros',
        position: 'bottom'
      }
   ],
   showProgress: true
  });

  }

  

  ngOnInit(): void {
    this.get_countries();

    // this.loading = true;
    // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
    //         this.loading = false;
    //         this.userFromApi = user;
    //     });

  }

  callIntro(){
    this.introJS.start();
  }

  get_countries(){
    fetch('https://sgr-ecuador.carto.com:443/api/v2/sql?q=select * from public.provincias')
    .then(function(resultado){
        return resultado.json();
      })
      .then(function(provincias) {

        let plantilla = '';
        for (let prov of provincias['rows']){
          let provincia = prov['dpa_despro'];
          
          plantilla = plantilla + `
             <option value="${provincia}"></option>
            `;
        }
        document.getElementById('cities').innerHTML = plantilla;
    })
    .catch(err => { throw err });
  };

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



}
