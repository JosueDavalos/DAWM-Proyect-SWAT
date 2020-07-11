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
    this.getAnimal();
  }
  getAnimal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animalService.getAnimal(id)
    .subscribe(animal => this.animal = animal);
  }
  goBack(): void {
    this.location.back();
  }
}
