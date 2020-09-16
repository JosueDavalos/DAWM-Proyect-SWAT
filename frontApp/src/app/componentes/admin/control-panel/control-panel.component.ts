import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../models';
import { UserService } from 'src/app/servicios';
import { Persona } from '../../models/persona';



@Component({
selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})

//Las varibales que tengo asi son las que puedo usar en el html
export class ControlPanelComponent implements OnInit {
    loading = false;
    users: Persona[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}