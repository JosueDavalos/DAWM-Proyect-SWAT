import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { FormularioPonerAdopcion } from 'src/app/componentes/models/FormularioPonerAdopcion';


@Injectable()
export class FormularioPonerAdopcionService{
    constructor(private http: HttpClient) { }

    getAll(): Promise<FormularioPonerAdopcion[]> {
        return this.http.get(`${environment.apiUrl}/formularioPonerAdopcion/`)
                .toPromise()
                .then(response => response as FormularioPonerAdopcion[]);

    }

    getById(id: number) {
        return this.http.get<FormularioPonerAdopcion>(`${environment.apiUrl}/formularioPonerAdopcion/${id}`);
    }
}