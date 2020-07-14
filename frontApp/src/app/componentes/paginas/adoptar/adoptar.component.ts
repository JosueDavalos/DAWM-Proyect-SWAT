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
  razas: string[] = ['Schnauzer', 'Pug', 'Persian', 'Siames'];
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
  }
}
