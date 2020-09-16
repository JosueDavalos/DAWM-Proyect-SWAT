import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-reporte-adopcion',
  templateUrl: './reporte-adopcion.component.html',
  styleUrls: ['./reporte-adopcion.component.css']
})
export class ReporteAdopcionComponent implements OnInit {
  adopciones = [];
  entero = 0;
  constructor(private restangular: Restangular) { }

  ngOnInit(): void {
    this.restangular.all("adopcion").getList().subscribe(adopciones => {
      this.adopciones = adopciones;
      this.entero++;
    });;
  }

  doRequest(){
    console.log(this.adopciones);
    
  }

}
