import { Persona } from './persona';

// simulating the server
export class Animal2 {
    id: number;
    nombre: string;
    tipo: string;
    edad: number;
    raza: string;
    sexo: string;
    picture: string;
    contacto: string;
    motivo: string;
    images: string[];
    esterilizado: string;
    vacunas: string;
}

export class Animal{
    id: number;
    nombre: string;
    tipo: string;
    raza: string;
    edad: number;
    sexo: string;
    esterilizado: string;
    color: string;
    foto: string;
    contacto: string;
    motivo: string;
    vacunas: string;
}
export class Animal3{
    id: number;
    nombre: string;
    tipo: string;
    raza: string;
    edad: number;
    sexo: string;
    esterilizado: string;
    color: string;
    foto: string;

    dueno :string;
    historial:number;
    estado:EstadoAnimal;
}

export enum Estado {
    Adoptado = 'A',
    En_adopcion = 'E',
    Colonia = 'C',
    Preservado = 'P'
}


export class EstadoAnimal{
    id :number;
    estado:Estado;
}