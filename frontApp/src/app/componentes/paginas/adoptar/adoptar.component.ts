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
  allAnimals: Animal[];
  tipos: string[] = ['Perro', 'Gato', 'Loro'];
  razas: string[] = ['Mestizo', 'Schnauzer', 'Pug', 'Persian', 'Siames'];
  etapas: string[] = ['Cachorro', 'Adulto', 'Viejo'];
  sectores: string[] = ['Duran', 'Prosperina', 'Sauces'];
  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.getAnimals();
  }
  getAnimals(): void {
    this.animalService.getAnimals()
      .subscribe(animals => this.animals = animals);
    this.allAnimals = this.animals;
  }

  buscar() {
    let tipo = (<HTMLSelectElement>document.getElementById("tipo")).value;
    let raza = (<HTMLSelectElement>document.getElementById("raza")).value;
    let etapa = (<HTMLSelectElement>document.getElementById("etapa")).value;
    // let sector = document.getElementById("sector").value;
    this.animals = [];
    for (let animal of this.allAnimals) {
      let booltipo = tipo.toLowerCase() == animal.tipo.toLowerCase();
      let boolraza = raza.toLowerCase() == animal.raza.toLowerCase();
      let esCachorro = animal.edad >= 0 && animal.edad < 3;
      let esAdulto = animal.edad >= 3 && animal.edad < 7;
      let esViejo = animal.edad >= 7;
      if (booltipo || boolraza || (etapa == "Cachorro" && esCachorro) || (etapa == "Adulto" && esAdulto) || (etapa == "Viejo" && esViejo)) {
        this.animals.push(animal);
      }
    }

  }

  reiniciar() {
    this.animals = this.allAnimals;
  }
}
