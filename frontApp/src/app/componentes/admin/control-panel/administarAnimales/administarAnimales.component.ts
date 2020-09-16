import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Animal3 } from 'src/app/componentes/models/animal';
import { Role } from 'src/app/componentes/models/role';
import { AnimalService } from 'src/app/servicios/animal.service';



@Component({
selector: 'app-administrar-animales',
  templateUrl: './administrarAnimales.component.html',
  styleUrls: ['./administrarAnimales.component.css']
})

//Las varibales que tengo asi son las que puedo usar en el html
export class AdministrarAnimalesComponent implements OnInit {
  addNew : boolean= false;
  showMsg: boolean = false;
  showErr:boolean=false;
  error:string;
    editRowId: any;

    loading = false;

    newTodo: Animal3; 

    pageActual:number = 1;

    public id:number;
    public nombre:string;
    public tipo: string;
    public raza: string;
    public edad: number;
    public sexo : string;
    public esterilizado: string;
    public color: string;
    public foto: string;
    public dueno :string;
    public historial:number;
    public estado:number;


    
    public dataList: Array<Animal3>=[];

    constructor(private service: AnimalService,private router: Router,) { }

    ngOnInit() {
        this.loading = true;
        this.service.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            
            this.dataList=users;
        });
    }
    public deleteUser(user: Animal3): void {
      
        /*this.service.deleteUser(user.cedula,user)
          .subscribe( data => {
            this.dataList = this.dataList.filter(u => u !== user);
            this.error='Usuario eliminado con éxito!';
              this.showMsg= true;
              setTimeout(() =>this.showMsg=false, 2000);
          },error=>{
            this.error='Error en el proceso!';
              this.showErr= true;
              setTimeout(() =>this.showErr=false, 2000);
          })
          if(this.dataList.indexOf(user)==0){
            this.addNew=false;
          }
          const index: number = this.dataList.indexOf(user);
          this.dataList.splice(index,1);
          */
      };
    


    
      public addUser(): void {
        //this.router.navigate(['add-user']);
        if(!this.addNew){
          this.newTodo = new Animal3();
          this.newTodo.id=0;
          this.dataList.unshift(this.newTodo);
          this.toggle(this.newTodo);
          this.addNew=true;
        }
      };

      onSubmit(user:any) {
        /*user = {
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
        if(!this.addNew){
          this.service.put(user,this.cedula).pipe(first()).subscribe(
            data => {
              this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
              };
              this.router.navigate([`administrar/usuario`]);
              this.error='Usuario actualizado con éxito!';
              this.showMsg= true;
              setTimeout(() =>this.showMsg=false, 2000);
            },
            error => {
              console.log(error);
                if(error.status==400){
                  this.error = "Verifique todos los datos";
                }
                if(error.status==404){
                  this.error = "No modifique cédula.";
                }
                else{
                  this.error = "Error del servidor";
                }
                this.showErr= true;
                setTimeout(() =>this.showErr=false, 3000);
                this.loading = false;
            });
          }else{
            this.service.addNew(user).pipe(first()).subscribe(
              data => {
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                  return false;
                };
                this.router.navigate([`administrar/usuario`]);
                this.error='Usuario insertado!';
                this.showMsg= true;
                setTimeout(() =>this.showMsg=false, 2000);
              },
              error => {
                console.log(error);
                  if(error.status==400)
                    this.error = "Verifique todos los datos";
                  else{
                    this.error = "Error del servidor";
                  }
                  this.showErr= true;
                  setTimeout(() =>this.showErr=false, 3000);
                  this.loading = false;
              });
        }
        */
      }

      toggle(obj:Animal3){
        if(this.addNew===false){

          this.editRowId = obj.id;
          this.id=obj.id;
          this.nombre=obj.nombre;
          this.tipo=obj.tipo;
          this.raza=obj.raza;
          this.edad=obj.edad;
          this.sexo=obj.sexo;
          this.esterilizado=obj.esterilizado;
          this.color=obj.color;
          this.foto=obj.foto;
          this.dueno=obj.dueno;
          this.historial=obj.historial;
          this.estado= obj.estado;   
        }
      }
}