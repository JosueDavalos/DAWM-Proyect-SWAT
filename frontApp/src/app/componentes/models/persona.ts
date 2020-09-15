import { Role } from "./role";

export class Persona {
    id: number;
    cedula:string;
    
    //password: string;
    nombre: string;
    apellido: string;
    cargo: Role;

   
    sexo : string;
    fechaNacimiento : string;
    telefono :number;
    celular :number;
    ciudad :string;
    direccion :string;
    email :string;
    user: string;   
    foto :string;
}