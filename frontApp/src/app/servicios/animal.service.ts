import { Injectable } from '@angular/core';
// import { ANIMALS } from '../mock-animals';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// The AnimalService could get animal data from anywhere—a
// web service, local storage, or a mock data source.'
import { Animal } from '../componentes/models/animal';
// it instantiates the AnimalService class to provide the service. (make available to the dependecy injection)




@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }


  getAnimals(): Promise<Animal[]> {
    return this.http.get<Animal[]>(`${environment.apiUrl}/animal/`)
    .toPromise()
    .then(response => response as Animal[]);
  }
  

  getAnimalsEnAdopcion(): Promise<Animal[]> {
    return this.http.get(`${environment.apiUrl}/animal/EnAdopcion/`)
    .toPromise()
    .then(response => response as Animal[]);
  }

  getAnimalDetails(id){
    return this.http.get(`${environment.apiUrl}/animal/${id}`)
    .toPromise()
    .then(response => response as Animal);
  }




}
