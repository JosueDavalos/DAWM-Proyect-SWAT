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
    tipos: string[] = ['Perro', 'Gato', 'Loro'];
    razas: string[] = ['Mestizo', 'Schnauzer', 'Pug', 'Persian', 'Siames'];
    etapas: string[] = ['Cachorro', 'Adulto', 'Viejo'];
    sectores: string[] = ['Duran', 'Prosperina', 'Sauces'];

  constructor(private service:AnimalService) { }

  ngOnInit(): void {
      this.loading = true;
      this.service.getAnimals().then(animales => 
        
        this.animals = animales,
        
        );
        this.loading = false,
      console.log(this.dataList);
  }

}
