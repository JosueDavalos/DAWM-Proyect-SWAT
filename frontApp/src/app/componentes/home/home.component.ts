import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserService, AuthenticationService } from 'src/app/servicios';
import { first } from 'rxjs/operators';
import * as introJs from 'intro.js/intro.js';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactanosForm : FormGroup;

  infoPerson = null;
  errorForm = 'si';


  introJS = introJs();
  loading = false;
  currentUser: User;
  userFromApi: User;



  

  constructor(
                private formBuilder: FormBuilder,
                private http: HttpClient,
                private userService: UserService,
                private authenticationService: AuthenticationService
             ) 
  {

    this.buildForm();

    this.currentUser = this.authenticationService.currentUserValue;

    this.introJS.setOptions({
      steps: 
      [
        {
          element: '#step1',
          intro: 'Adopta un corazón',
          position: 'bottom'
        },
        {
          element: '#noticias',
          intro: 'Historias de nuestros adoptados',
          position: 'top'
        },
        {
          element: '#step3',
          intro: 'Estos son nuestros servicios',
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


  private buildForm() {
    this.contactanosForm = this.formBuilder.group({
      unombres: ['',  [Validators.required]],
      unacimiento: ['', [Validators.required]],
      uemail: ['', [Validators.required, Validators.email]],
      umensaje: ['', [Validators.required, Validators.maxLength(200)]],
      utelf: ['', [Validators.required]],
      uciudad: ['', [Validators.required]]
    });

    this.contactanosForm.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }
  save(event: Event) {
    event.preventDefault();
    const value = this.contactanosForm.value;
    console.log(value);
  }
  person_form_validator(){
    // console.log("ENTRO AL VALIDADOR DE PERSONA")
    if (this.contactanosForm.invalid) {
      this.errorForm = 'si';
      // console.log("SOY INVALIIDOOOOOO")
      return;
    }

    this.errorForm = 'no';
    // console.log('*******NO SOY INVALIDO')
    const person = this.contactanosForm.controls;
    this.infoPerson = {
      'nombre':person.unombres.value,
      'fechaNacimiento':person.unacimiento.value,
      'telefono':person.utelf.value,
      'ciudad':person.uciudad.value,
      'email':person.uemail.value,
      'mensaje': person.umensaje.value,
      'cargo':'E'
    };
   // this.http.post(`${environment.apiUrl}/persona/`, this.infoPerson).toPromise().catch(res => console.log(res));
    this.http.post(`${environment.apiUrl}/contactanos-home/`, {
      'email': this.infoPerson['email'],
      'mensaje' : this.infoPerson['mensaje'],
      
    }).toPromise().then().catch(res => console.log(res));
  }
}
