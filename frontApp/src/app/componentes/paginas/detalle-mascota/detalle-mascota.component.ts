import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnimalService } from '../../../servicios/animal.service';

import { Animal } from '../../models/animal';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {
  animal: Animal;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animalService.getAnimalDetails(id).then(animales => this.animal = animales);
    // this.getAnimal();
  }

  // getAnimal(): void {
    
  //   for (let animal of this.animals){
  //     if (animal.id == id){
  //       this.animal = animal;
  //       console.log(animal);
  //     }
  //   }
  // }

  goBack(): void {
    this.location.back();
  }
}
