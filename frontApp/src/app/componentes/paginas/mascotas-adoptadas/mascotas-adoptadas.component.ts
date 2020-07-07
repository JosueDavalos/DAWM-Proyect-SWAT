import { Component, OnInit } from '@angular/core';

interface Animal {
  nombre: string;
  tipo: string;
  edad: number;
  raza: string;
  sexo: string;
  picture: string;}
const ANIMALES: Animal[] = [
  {
    nombre: 'Juanito',
    tipo: 'gato',
    edad: 1,
    raza: 'mestizo',
    sexo: 'Macho',
    picture: 'gato'
  },
  {
    nombre: 'Amanda',
    tipo: 'gato',
    edad: 6,
    raza: 'mestizo',
    sexo: 'Hembra',
    picture: 'gato'

  },
  {
    nombre: 'Mota',
    tipo: 'perro',
    edad: 1,
    raza: 'mestizo',
    sexo: 'Macho',
    picture: 'perro'
  },
  {
    nombre: 'Claudio',
    tipo: 'perro',
    edad: 2,
    raza: 'mestizo',
    sexo: 'Macho',
    picture: 'perro'
  }
];
@Component({
  selector: 'app-mascotas-adoptadas',
  templateUrl: './mascotas-adoptadas.component.html',
  styleUrls: ['./mascotas-adoptadas.component.css']
})
export class MascotasAdoptadasComponent implements OnInit {
  animales = ANIMALES;

  constructor() { }

  ngOnInit(): void {
  }

}





