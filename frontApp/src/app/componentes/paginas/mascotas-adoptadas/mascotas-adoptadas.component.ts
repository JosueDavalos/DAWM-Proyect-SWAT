import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../servicios/animal.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-mascotas-adoptadas',
  templateUrl: './mascotas-adoptadas.component.html',
  styleUrls: ['./mascotas-adoptadas.component.css']
})
export class MascotasAdoptadasComponent implements OnInit {
  animals: Animal[];
  constructor(
    private animalService: AnimalService
    ) { }

  ngOnInit(): void {
    // this.getAnimals();
  }
  // getAnimals(): void {
  //   this.animalService.getAnimals()
  //   .subscribe(animals => this.animals = animals);
  // }

}





