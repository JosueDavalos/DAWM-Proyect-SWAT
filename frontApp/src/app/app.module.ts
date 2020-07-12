import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdoptarComponent } from './componentes/paginas/adoptar/adoptar.component';
import { PonerAdopcionComponent } from './componentes/paginas/poner-adopcion/poner-adopcion.component';
import { MascotasAdoptadasComponent } from './componentes/paginas/mascotas-adoptadas/mascotas-adoptadas.component';
import { OrganizacionesComponent } from './componentes/paginas/organizaciones/organizaciones.component';
import { QuienesSomosComponent } from './componentes/paginas/quienes-somos/quienes-somos.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ControlPanelComponent } from './componentes/admin/control-panel/control-panel.component';
import { GestionProcesoComponent } from './componentes/admin/gestion-proceso/gestion-proceso.component';
import { ReportesComponent } from './componentes/admin/reportes/reportes.component';
import { NoticiasComponent } from './componentes/paginas/noticias/noticias.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './componentes/security';
import { ComoAyudarComponent } from './componentes/paginas/como-ayudar/como-ayudar.component';
import { DetalleMascotaComponent } from './componentes/paginas/detalle-mascota/detalle-mascota.component';
import { DetalleInlineComponent } from './componentes/paginas/detalle-inline/detalle-inline.component';
import { SolicitudesAdopcionComponent } from './componentes/admin/solicitudes-adopcion/solicitudes-adopcion.component';



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
    RegisterComponent,
    ControlPanelComponent,
    GestionProcesoComponent,
    ReportesComponent,
    NoticiasComponent,
    ComoAyudarComponent,
    DetalleMascotaComponent,
    DetalleInlineComponent,
    SolicitudesAdopcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
