import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserService, AuthenticationService } from 'src/app/servicios';
import { first } from 'rxjs/operators';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  introJS = introJs();
  loading = false;
  currentUser: User;
  userFromApi: User;
  
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { 
    this.currentUser = this.authenticationService.currentUserValue;

    this.introJS.setOptions({
      steps: [
      {
         element: '#step1',
         intro: 'Welcome to your new app!',
         position: 'bottom'
      },
      {
         element: '#step3',
         intro: "Ok, wasn't that fun?",
         position: 'right'
      },
      {
         element: '#step2',
         intro: "let's keep going",
         position: 'top'
      },
      {
         element: '#step4',
         intro: 'More features, more fun.',
         position: 'right'
      }
   ],
   showProgress: true
  });
    
  }

  ngOnInit(): void {
    
    this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
  }

  ejecutarTuto(){
    this.introJS.start();
    console.log("asd");
    
  }



}
