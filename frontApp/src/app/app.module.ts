import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdoptarComponent } from './componentes/paginas/adoptar/adoptar.component';
import { PonerAdopcionComponent } from './componentes/paginas/poner-adopcion/poner-adopcion.component';
import { MascotasAdoptadasComponent } from './componentes/paginas/mascotas-adoptadas/mascotas-adoptadas.component';
import { OrganizacionesComponent } from './componentes/paginas/organizaciones/organizaciones.component';
import { QuienesSomosComponent } from './componentes/paginas/quienes-somos/quienes-somos.component';
import { AyudaComponent } from './componentes/paginas/ayuda/ayuda.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AdoptarComponent,
    PonerAdopcionComponent,
    MascotasAdoptadasComponent,
    OrganizacionesComponent,
    QuienesSomosComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
