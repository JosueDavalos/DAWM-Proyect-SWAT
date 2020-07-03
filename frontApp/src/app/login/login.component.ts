import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading = false;
  usuario: string;
  clave: string;
  respuesta: any;
  today: number = Date.now();
  msgs: Message[] = [];
  
  constructor(public router: Router) { }

  limpiarMensaje() {
    this.msgs = [];
  }

  loginButton() {

    
  }

  falseLog() {

    
  }

}
