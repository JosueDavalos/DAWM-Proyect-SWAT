import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren , OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../../models';
import { UserService } from 'src/app/servicios';
import { Persona } from 'src/app/componentes/models/persona';



@Component({
  selector: 'app-administrar-usuarios',
    templateUrl: './administrarUsuario.component.html',
    styleUrls: ['./administrarUsuario.component.css']
  })

//Las varibales que tengo asi son las que puedo usar en el html
export class AdministrarUsuarioComponent implements OnInit {
  
    loading = false;

    newTodo: Persona;
    //users: Persona[] = [];


    public dataList: Array<Persona>=[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            const i=0;
            users.forEach(element => {
              element.id=i+users.indexOf(element)+1;
              this.dataList.push(element);
            });
        });
    }
    public deleteUser(user: Persona): void {
        /*this.userService.deleteUser(user.id)
          .subscribe( data => {
            this.users = this.users.filter(u => u !== user);
          })*/
          const index: number = this.dataList.indexOf(user);
          this.dataList.splice(index,1);

      };
    
      public updateUser(): void {
        //window.localStorage.removeItem("editUserId");
        //window.localStorage.setItem("editUserId", user.id.toString());
        //this.router.navigate(['edit-user']);
    };
    
      public addUser(): void {
        //this.router.navigate(['add-user']);
        this.dataList.unshift(this.newTodo);
        this.newTodo = new Persona;
      };


 
}