import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-ayudar',
  templateUrl: './como-ayudar.component.html',
  styleUrls: ['./como-ayudar.component.css']
})
export class ComoAyudarComponent implements OnInit {

  noticias : Object[] = [
    {
      id : 0,
      nombre : 'Noticia 1',
      imagen : "../../../../assets/img/companyEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Somos una organizacion con la idea de la la la land'
    },
    {
      id : 0,
      nombre : 'Noticia 1',
      imagen : "../../../../assets/img/companyEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Somos una organizacion con la idea de la la la land'
    },
    {
      id : 0,
      nombre : 'Noticia 1',
      imagen : "../../../../assets/img/companyEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Somos una organizacion con la idea de la la la land'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
