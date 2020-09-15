﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable ,of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../componentes/models';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private httpOptions: any;

    // the actual JWT token
    public token: string;

    // the token expiration date
    public token_expires: Date;

    // error messages received from the login attempt
    public errors: any = [];

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          };
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    
    login(user) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`,JSON.stringify(user))
            .pipe(map(user => {

                if (user.cargo) {

                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    
}
function error(message) {
    return throwError({ status: 404, error: { message } });
}