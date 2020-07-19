import { Injectable } from '@angular/core';
import { ANIMALS } from '../mock-animals';
import { Observable, of } from 'rxjs';
// The AnimalService could get animal data from anywhere—a
// web service, local storage, or a mock data source.'
import { Animal } from '../componentes/models/animal';
// it instantiates the AnimalService class to provide the service. (make available to the dependecy injection)
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }
// Simulating getting data from the server
  getAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }
  getAnimal(id: number): Observable<Animal>{
    console.log(`AnimalService: fetched animal id=${id}`)
    return of(ANIMALS.find(animal => animal.id === id));
  }
}
