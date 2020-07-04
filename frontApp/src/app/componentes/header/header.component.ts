import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios';
import { Role, User } from '../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

  ngOnInit(): void {
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  get isVolunteer() {
    return this.currentUser && this.currentUser.role === Role.Volunteer;
  }

  get isOrganizer() {
    return this.currentUser && this.currentUser.role === Role.Organizer;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']); 
  }
  get isLogged(){
    return this.currentUser;
  }
}
