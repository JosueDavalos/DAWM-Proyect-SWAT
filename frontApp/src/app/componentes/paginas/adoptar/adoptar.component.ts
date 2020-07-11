import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../../../mock-animals';

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

  mascotas = ANIMALS;

  toggleDetails(id){
    if(document.getElementById(id).getAttribute("class") == "content"){
      document.getElementById(id).className += " content-shown";
    }else{
      document.getElementById(id).className = "content";
    }  
  }

  adoptar(){
    
  }

  constructor() { }

  ngOnInit(): void {

  }

}
