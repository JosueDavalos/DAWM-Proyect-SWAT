import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../../models';
import { UserService } from 'src/app/servicios';



@Component({
selector: 'app-administrar-usuarios',
  templateUrl: './administrarUsuario.component.html',
  styleUrls: ['./administrarUsuario.component.css']
})

//Las varibales que tengo asi son las que puedo usar en el html
export class AdministrarUsuarioComponent implements OnInit {
    loading = false;

    newTodo: User;

    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
            console.log(this.users);
        });
    }
    deleteUser(user: User): void {
        /*this.userService.deleteUser(user.id)
          .subscribe( data => {
            this.users = this.users.filter(u => u !== user);
          })*/
      };
    
      editUser(user: User): void {
        window.localStorage.removeItem("editUserId");
        window.localStorage.setItem("editUserId", user.id.toString());
        //this.router.navigate(['edit-user']);
      };
    
      addUser(): void {
        //this.router.navigate(['add-user']);
        this.users.unshift(this.newTodo);
        this.newTodo = new User;
      };
}