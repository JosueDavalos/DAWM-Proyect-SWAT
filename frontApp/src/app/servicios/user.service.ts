import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../componentes/models';
import { environment } from 'src/environments/environment';
import { Persona } from '../componentes/models/persona';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Persona[]>(`${environment.apiUrl}/persona/`);
    }

    getById(id: number) {
        return this.http.get<Persona>(`${environment.apiUrl}/usuario/${id}`);
    }
}