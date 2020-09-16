import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnimalService } from '../../../servicios/animal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { Animal } from '../../models/animal';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {
  animal: Animal;
  personaFrom: FormGroup;
  infoPerson = null;
  enviada = false;
  error = false;
  idAnimal;



  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.idAnimal = +this.route.snapshot.paramMap.get('id');
    this.animalService.getAnimalDetails(this.idAnimal).then(animales => this.animal = animales);

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
  }


  goBack(): void {
    this.location.back();
  }

  person_form_validator(){
    this.error = false;

    if (this.personaFrom.invalid) {
      this.error = true;
      return;
    }
    this.error = false;

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
    };
    console.log(this.infoPerson);
    this.enviada = true;
    this.animalService.setAnimalAdoptado(this.idAnimal).then();
    this.http.post(`${environment.apiUrl}/persona/`, this.infoPerson).toPromise().catch(res => console.log(res));
  }


}
