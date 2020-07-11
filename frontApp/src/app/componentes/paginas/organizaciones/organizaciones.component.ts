import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent implements OnInit,AfterViewInit  {

  organizaciones : Object[] = [
    {
      id : 0,
      nombre : 'Organizacion 1',
      imagen : "../../../../assets/img/companyEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : 'Somos una organizacion con la idea de la la la land'
    },
    {
      id : 0,
      nombre : 'Organizacion 2',
      imagen : "../../../../assets/img/logo2Ejem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : "You must think that I'm stupid \nYou must think that I'm a fool \nYou must think that I'm new to this \nBut I have seen this all before"
    },
    {
      id : 0,
      nombre : 'Organizacion 3',
      imagen : "../../../../assets/img/logoEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : '...'
    },
    {
      id : 0,
      nombre : 'Organizacion 4',
      imagen : "../../../../assets/img/logo2Ejem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : '...'
    },{
      id : 0,
      nombre : 'Organizacion 5',
      imagen : "../../../../assets/img/companyEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : '...'
    },{
      id : 0,
      nombre : 'Organizacion 6',
      imagen : "../../../../assets/img/logoEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : '...'
    },{
      id : 0,
      nombre : 'Organizacion 7',
      imagen : "../../../../assets/img/logo2Ejem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : '...'
    },{
      id : 0,
      nombre : 'Organizacion 8',
      imagen : "../../../../assets/img/logoEjem.jpg",
      tipo : 'Sin fines de lucro',
      contacto : '0998871624',
      informacion : '...'
    }
  ];

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightblue';
  }

  ngOnInit(): void {
  }

}
