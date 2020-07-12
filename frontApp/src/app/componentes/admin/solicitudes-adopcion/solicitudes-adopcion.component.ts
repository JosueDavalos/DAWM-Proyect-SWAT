import { Component, OnInit } from '@angular/core';
import {SolicitudAdopcion} from 'src/app/componentes/models/solicitudAdopcion';

@Component({
  selector: 'app-solicitudes-adopcion',
  templateUrl: './solicitudes-adopcion.component.html',
  styleUrls: ['./solicitudes-adopcion.component.css']
})
export class SolicitudesAdopcionComponent implements OnInit {

  solicitudes: SolicitudAdopcion[] = [
    {
      id: 1,
      cedula: "099195204",
      nombres: "Josue",
      apellidos: "Davalos Carrera",
      genero: "Masculino",
      edad: 21,
      correo: "jedavalo@espol.edu.ec",
      telefono: "04-2013201",
      celular: "09876543210",
      direccion: "Ceibos",
      ciudad: "Guayaquil",
      mascota: "Michu",
    },
    {
      id: 2,
      cedula: "099174907",
      nombres: "Erick",
      apellidos: "Pulla",
      genero: "Masculino",
      edad: 41,
      correo: "epulla@espol.edu.ec",
      telefono: "04-4879801",
      celular: "09876543210",
      direccion: "Sauces",
      ciudad: "Guayaquil",
      mascota: "Firulais",
    },
    {
      id: 3,
      cedula: "098756412",
      nombres: "Bryan",
      apellidos: "Sanchez",
      genero: "Masculino",
      edad: 22,
      correo: "bsanchez@espol.edu.ec",
      telefono: "02-278945",
      celular: "09876543210",
      direccion: "Panecillo",
      ciudad: "Quito",
      mascota: "Michu",
    },
    {
      id: 4,
      cedula: "099195204",
      nombres: "Eunice",
      apellidos: "Galvez",
      genero: "Femenino",
      edad: 19,
      correo: "eunice@espol.edu.ec",
      telefono: "04-278244",
      celular: "09876543210",
      direccion: "Ceibos",
      ciudad: "Guayaquil",
      mascota: "Santa Claus",
    },
    {
      id: 5,
      cedula: "099195204",
      nombres: "Allan",
      apellidos: "Avendaño",
      genero: "Masculino",
      edad: 31,
      correo: "allanv@espol.edu.ec",
      telefono: "04-2013201",
      celular: "09876543210",
      direccion: "Ceibos",
      ciudad: "Guayaquil",
      mascota: "Zanahoria",
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
