import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/servicios/animal.service';
import { Animal } from '../../models/animal';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  
  loading = false;

  public dataList: Array<Animal>=[];

  animals: Animal[];


  constructor(private service:AnimalService) { }

  ngOnInit(): void {
      this.getAnimals();
      console.log(this.animals);
  }
  async getAnimals(){
    return await this.service.getAnimals().then(animales => this.animals = animales);
  }

}
