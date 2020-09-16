import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../../servicios/animal.service';


@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.component.html',
  styleUrls: ['./adoptar.component.css']
})

export class AdoptarComponent implements OnInit {
  animals: Animal[];
  tipos: string[] = ['Perro', 'Gato', 'Loro'];
  razas: string[] = ['Mestizo', 'Schnauzer', 'Pug', 'Persian', 'Siames'];
  etapas: string[] = ['Cachorro', 'Adulto', 'Viejo'];
  sectores: string[] = ['Duran', 'Prosperina', 'Sauces'];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAnimals().then(animales => this.animals = animales);
  }


  buscar() {
    let tipo = (<HTMLSelectElement>document.getElementById("tipo")).value;
    let raza = (<HTMLSelectElement>document.getElementById("raza")).value;
    let etapa = (<HTMLSelectElement>document.getElementById("etapa")).value;
    // let sector = document.getElementById("sector").value;
    var animalsFilter:  Animal[] = [];
    
    console.log(tipo,raza, etapa);
    for (let animal of this.animals) {
      let booltipo = tipo.toLowerCase() == animal.tipo.toLowerCase();
      console.log(tipo.toLowerCase(), animal.tipo.toLowerCase(), tipo.toLowerCase() == animal.tipo.toLowerCase())
      let boolraza = raza.toLowerCase() == animal.raza.toLowerCase();
      let esCachorro = animal.edad >= 0 && animal.edad < 3;
      let esAdulto = animal.edad >= 3 && animal.edad < 7;
      let esViejo = animal.edad >= 7;

      if (booltipo || boolraza || (etapa == "Cachorro" && esCachorro) || (etapa == "Adulto" && esAdulto) || (etapa == "Viejo" && esViejo)) {
        animalsFilter.push(animal);
      }
    }
    this.animals = animalsFilter;

  }

  reiniciar() {
    // this.animals = this.allAnimals;
    this.animalService.getAnimals().then(animales => this.animals = animales);
  }
}
