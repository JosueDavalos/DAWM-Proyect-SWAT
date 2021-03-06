﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role, User } from '../componentes/models';
import { environment } from 'src/environments/environment';
import { Persona } from '../componentes/models/persona';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {


    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Persona[]>(`${environment.apiUrl}/persona/`);
    }

    getPersonas(): Promise<Persona[]> {
        return this.http.get<Persona[]>(`${environment.apiUrl}/persona/`)
        .toPromise()
        .then(response => response as Persona[]);
      }

    put(persona,pk) {
        return this.http.put<Persona>(`${environment.apiUrl}/persona/`+pk,JSON.stringify(persona))
            .pipe(map(answer => {
                return answer;
            }));
    }
    addNew(persona) {
        return this.http.post<Persona>(`${environment.apiUrl}/persona/`,JSON.stringify(persona))
            .pipe(map(answer => {
                return answer;
            }));
    }
    deleteUser(id,persona){
        return this.http.delete<Persona>(`${environment.apiUrl}/persona/`+id)
            .pipe(map(answer => {
                return answer;
            }));
    }
    /*getUserPerPersona() {
        return this.http.get<User[]>(`${environment.apiUrl}/persona/`);
    }*/

    getById(id: number) {
        return this.http.get<Persona>(`${environment.apiUrl}/usuario/${id}`);
    }
}