import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren , OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Role, User } from '../../../models';
import { UserService } from 'src/app/servicios';
import { Persona } from 'src/app/componentes/models/persona';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-administrar-usuarios',
    templateUrl: './administrarUsuario.component.html',
    styleUrls: ['./administrarUsuario.component.css']
  })

//Las varibales que tengo asi son las que puedo usar en el html
export class AdministrarUsuarioComponent implements OnInit {
  addNew : boolean= false;
  showMsg: boolean = false;
    editRowId: any;

    loading = false;

    newTodo: Persona; 

    pageActual:number = 1;

    public cedula:string;
    public nombre:string;
    public apellido: string;
    public cargo: Role;
    public sexo : string;
    public fechaNacimiento : string;
    public telefono :number;
    public celular :number;
    public ciudad :string;
    public direccion :string;
    public email :string;
    public userN: string;   
    public foto :string;

    public dataList: Array<Persona>=[];

    constructor(private userService: UserService,private router: Router,) { }

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
          if(this.dataList.indexOf(user)==0){
            this.addNew=false;
          }
          const index: number = this.dataList.indexOf(user);
          this.dataList.splice(index,1);
          
      };
    


    
      public addUser(): void {
        //this.router.navigate(['add-user']);
        if(!this.addNew){
          this.newTodo = new Persona();
          this.newTodo.id=0;
          this.dataList.unshift(this.newTodo);
          this.toggle(this.newTodo);
          this.addNew=true;
        }
      };

      onSubmit(user:any) {
        user = {
          id: user.id,
          cedula:this.cedula,
          nombre: this.nombre,
          apellido: this.apellido,
          cargo: this.cargo,
          sexo : this.sexo,
          fechaNacimiento : this.fechaNacimiento,
          telefono :this.telefono,
          celular :this.celular,
          ciudad :this.ciudad,
          direccion :this.direccion,
          email :this.email,
          user: this.userN,   
          foto :this.foto,
        };
        this.loading=true;
        this.userService.addNew(user,this.cedula).pipe(first())
        .subscribe(
            data => {
              console.log(data);
              this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
              };
              this.router.navigate([`administrar/usuario`]);
              this.showMsg= true;

              setTimeout(function () {
                    alert('STOP');
                
            }, 5000);
            console.log("sali");
            },
            error => {
              console.log(error);
                /*if(error.status==404){
                  this.error = "Usuario o contraseña incorrecto";
                }
                else{
                  this.error = "Error del servidor";
                }*/
                this.loading = false;
            });
      }

      toggle(user:Persona){
        if(this.addNew===false){
          this.editRowId = user.id;
          this.cedula=user.cedula;
          this.nombre=user.nombre;
          this.apellido=user.apellido;
          this.cargo=user.cargo;
          this.sexo=user.sexo;
          this.fechaNacimiento=user.fechaNacimiento;
          this.telefono=user.telefono;
          this.celular=user.celular;
          this.ciudad=user.ciudad;
          this.direccion=user.direccion;
          this.email=user.email;
          this.userN= user.user;   
          this.foto=user.foto;
        }
      }
 
}