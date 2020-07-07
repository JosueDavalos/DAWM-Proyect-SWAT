import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.component.html',
  styleUrls: ['./adoptar.component.css']
})
export class AdoptarComponent implements OnInit {
  tipos : Object[] = [
    {
      id : 0,
      tipo : 'Perro'
    },
    {
      id : 1,
      tipo : 'Gato'
    },
    {
      id : 0,
      tipo : 'Loro'
    }
  ];

  razas : Object[] = [
    {
      id : 0,
      raza : 'Schnauzer',
    },
    {
      id : 1,
      raza : 'Pug',
    },
    {
      id : 2,
      raza : 'Persian',
    },
    {
      id : 2,
      raza : 'Siames',
    }
  ];

  etapas : Object[] = [
    {
      id : 0,
      etapa : 'Cachorro'
    },
    {
      id: 1,
      etapa : 'Adulto'
    },
    {
      id : 2,
      etapa : 'Viejo'
    }
  ];

  sectores : Object[] = [
    {
      id : 0,
      sector : 'Duran',
    },
    {
      id : 1,
      sector : 'Prosperina',
    },
    {
      id : 2,
      sector : 'Sauces'
    }
  ];

  mascotas : Object[] = [
    {
      id : 0,
      nombre : 'Tommy',
      edad : 8,
      tipo : 'Perro',
      raza : 'Schnauzer',
      contacto : '0998871624',
      motivo : 'No tengo suficiente espacio en mi casa'
    },
    {
      id : 1,
      nombre : 'Michi',
      edad : 3,
      tipo : 'Gato',
      raza : 'Persian',
      contacto : '0998871624',
      motivo : 'No tengo suficiente espacio en mi casa'
    },
    {
      id : 2,
      nombre : 'Firulais',
      edad : 2,
      tipo : 'Perro',
      raza : 'Pug',
      contacto : '0998871624',
      motivo : 'No tengo suficiente espacio en mi casa'
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
