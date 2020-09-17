import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
// import { saveAs } from 'file-saver';
@Component({
  selector: 'app-reporte-adopcion',
  templateUrl: './reporte-adopcion.component.html',
  styleUrls: ['./reporte-adopcion.component.css']
})
export class ReporteAdopcionComponent implements OnInit {
  adopciones = [];
  adopcionesCSV = [];
  entero = 0;
  constructor(private restangular: Restangular) { }

  ngOnInit(): void {
    this.restangular.all("adopcion").getList().subscribe(adopciones => {
      this.adopciones = adopciones;
      for(let adopcion of adopciones){
        if(adopcion.animal.nombre != undefined)
          this.adopcionesCSV.push({
            nombre: adopcion.animal.nombre,
            edad: adopcion.animal.edad,
            raza: adopcion.animal.raza,
            tipo: adopcion.animal.tipo,
            cedula: adopcion.usuario.cedula,
            nombreUser: adopcion.usuario.nombre,
            apellido: adopcion.usuario.apellido,
            sexo: adopcion.usuario.sexo,
          });
      }
      this.entero++;
    });;
  }

  doRequest(){
    console.log(this.adopciones);
    
  }

  downloadFile() {
    let data = this.adopcionesCSV;
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "myFile.csv");
}

}
