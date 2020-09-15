import { Role } from "./role";

export class User {
    id: number;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    cargo: Role;
    token?: string;
}