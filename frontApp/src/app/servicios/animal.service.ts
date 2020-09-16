import { Injectable } from '@angular/core';
// import { ANIMALS } from '../mock-animals';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// The AnimalService could get animal data from anywhere—a
// web service, local storage, or a mock data source.'
import { Animal, Animal3 } from '../componentes/models/animal';
import { map } from 'rxjs/operators';
// it instantiates the AnimalService class to provide the service. (make available to the dependecy injection)




@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Animal3[]>(`${environment.apiUrl}/animal/`);
  }

  put(animal,pk) {
    return this.http.put<Animal3>(`${environment.apiUrl}/animal/`+pk,JSON.stringify(animal))
        .pipe(map(answer => {
            return answer;
        }));
}
addNew(animal) {
    return this.http.post<Animal3>(`${environment.apiUrl}/animal/`,JSON.stringify(animal))
        .pipe(map(answer => {
            return answer;
        }));
}
delete(id,animal){
    return this.http.delete<Animal3>(`${environment.apiUrl}/animal/`+id)
        .pipe(map(answer => {
            return answer;
        }));
}

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

  getAnimalsAdoptados(): Promise<Animal[]> {
    return this.http.get(`${environment.apiUrl}/animal/adoptados/`)
    .toPromise()
    .then(response => response as Animal[]);
  }

  getAnimalDetails(id){
    return this.http.get(`${environment.apiUrl}/animal/${id}`)
    .toPromise()
    .then(response => response as Animal);
  }

  setAnimalAdoptado(id){
    return this.http.put(`${environment.apiUrl}/animal/${id}`,'')
    .toPromise()
    .then().catch(res => res);
  }




}
