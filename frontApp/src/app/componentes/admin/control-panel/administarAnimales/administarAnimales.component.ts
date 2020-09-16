import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Animal } from 'src/app/componentes/models/animal';



@Component({
selector: 'app-administrar-animales',
  templateUrl: './administrarAnimales.component.html',
  styleUrls: ['./administrarAnimales.component.css']
})

//Las varibales que tengo asi son las que puedo usar en el html
export class AdministrarAnimalesComponent implements OnInit {
    loading = false;

    newTodo: Animal;

    animals: Animal[] = [];

    constructor() { }

    ngOnInit() {
        this.loading = true;
        //this.animals = ANIMALS;
    }
    public deleteUser(user: Animal): void {
        /*this.userService.deleteUser(user.id)
          .subscribe( data => {
            this.users = this.users.filter(u => u !== user);
          })*/
          const index: number = this.animals.indexOf(user);
          this.animals.splice(index,1);

      };
    
      public updateUser(): void {
        //window.localStorage.removeItem("editUserId");
        //window.localStorage.setItem("editUserId", user.id.toString());
        //this.router.navigate(['edit-user']);
    };
    
    public addUser(): void {
        //this.router.navigate(['add-user']);
        this.animals.unshift(this.newTodo);
        this.newTodo = new Animal;
      };
}