import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { FormularioPonerAdopcionService } from 'src/app/servicios/FormularioPonerAdopcion.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-gestion-proceso',
  templateUrl: './gestion-proceso.component.html',
  styleUrls: ['./gestion-proceso.component.css']
})
export class GestionProcesoComponent implements OnInit {
  personaFrom: FormGroup;
  animalFrom: FormGroup;
  motivoFrom: FormGroup;

  infoPerson = null;
  infoAnimal = null;
  infoMotivo = {};
  errorForm = 'si';
  idAnimal: number;


  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private FormularioPonerAdopcionService: FormularioPonerAdopcionService)
              {
  }

  ngOnInit(): void {

    this.personaFrom = this.formBuilder.group({
      ucedula: ['', Validators.required],
      unombres: ['', Validators.required],
      uapellidos: ['', Validators.required],
      ugender: [null, Validators.required],
      unacimiento: ['', Validators.required],
      utelf: ['', Validators.required],
      ucelular: ['', Validators.required],
      uciudad: ['', Validators.required],
      udireccion: ['', Validators.required],
      uemail: ['', Validators.required],
    });

    this.animalFrom = this.formBuilder.group({
      anombre: ['', Validators.required],
      aedad: ['', Validators.required],
      agenero: [null, Validators.required],
      atipo: ['', Validators.required],
      araza: ['', Validators.required],
      aesteril: [null, Validators.required],
      acolor: ['', Validators.required],
      afoto: [null, Validators.required],
    });

    this.motivoFrom = this.formBuilder.group({
      motivo: ['', Validators.required]
    });

  }



  person_form_validator(){
    if (this.personaFrom.invalid) {
      this.errorForm = 'si';
      return;
    }

    this.errorForm = 'no';
    const person = this.personaFrom.controls;
    this.infoPerson = {
      'cedula':person.ucedula.value, 
      'nombre':person.unombres.value,
      'apellido':person.uapellidos.value,
      'sexo':person.ugender.value,
      'fechaNacimiento':person.unacimiento.value,
      'telefono':person.utelf.value,
      'celular':person.ucelular.value,
      'ciudad':person.uciudad.value,
      'direccion':person.udireccion.value,
      'email':person.uemail.value,
      'cargo':'E'
    }
    console.log(this.infoPerson);
    this.http.post(`${environment.apiUrl}/persona/`, this.infoPerson).toPromise().catch(res => console.log(res));
  }


  animal_form_validator(){
    if (this.animalFrom.invalid) {
      this.errorForm = 'si';
      return;
    }

    this.errorForm = 'no';
    const animal = this.animalFrom.controls;
    this.infoAnimal = {
      'nombre':animal.anombre.value,
      'tipo':animal.atipo.value,
      'raza':animal.araza.value,
      'edad':animal.aedad.value,
      'sexo':animal.agenero.value,
      'esterilizado':animal.aesteril.value,
      'color':animal.acolor.value,
      // 'foto':animal.afoto.value,
      // 'dueno': this.infoPerson['cedula'],
    }
    console.log(this.infoAnimal);
    this.http.post(`${environment.apiUrl}/animal/`, this.infoAnimal).toPromise()
    .then(res => this.infoMotivo['animal'] = res['id']);
  }

  motivo_form_validator(){
    if (this.motivoFrom.invalid) {
      this.errorForm = 'si';
      return;
    }
    this.errorForm = 'no';
    const motivo = this.motivoFrom.controls;
    this.infoMotivo['motivo'] = motivo.motivo.value,
    this.infoMotivo['persona'] = this.infoPerson['cedula'];
    console.log(this.infoMotivo);
    this.http.post(`${environment.apiUrl}/formularioPonerAdopcion/`, this.infoMotivo).toPromise().then().catch(res => console.log(res));
    this.http.post(`${environment.apiUrl}/contactanos/`, {
      'email': this.infoPerson['email']
    }).toPromise().then().catch(res => console.log(res));
  }

 

}