import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-ayudar',
  templateUrl: './como-ayudar.component.html',
  styleUrls: ['./como-ayudar.component.css']
})
export class ComoAyudarComponent implements OnInit {

  arreglo : Object[] = [
    {
      id : 0,
      nombre : 'Donación de insumos',
      imagen : "../../../../assets/img/taza.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Puedes colaborar por medio de donaciones de insumos, productos y servicios.'
    },
    {
      id : 0,
      nombre : 'Donación de dinero',
      imagen : "../../../../assets/img/donation.png",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Puedes donar a traves de cuentas digitales, para así ayudar a nuestras acciones.'
    },
    {
      id : 0,
      nombre : '¡Adopta!',
      imagen : "../../../../assets/img/adoptas.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Puedes adoptar y darle un hogar a estos animalitos. Para que tengan una vida llena de amor'
    },
    {
      id : 0,
      nombre : 'Inu 4',
      imagen : "../../../../assets/img/adoptas.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Puedes colaborar por medio de donaciones de insumos, productos y servicios.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
