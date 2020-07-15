import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AdoptarComponent } from './componentes/paginas/adoptar/adoptar.component';
import { MascotasAdoptadasComponent } from './componentes/paginas/mascotas-adoptadas/mascotas-adoptadas.component';
import { OrganizacionesComponent } from './componentes/paginas/organizaciones/organizaciones.component';
import { QuienesSomosComponent } from './componentes/paginas/quienes-somos/quienes-somos.component';
import { LoginComponent } from './componentes/login/login.component';
import { ControlPanelComponent } from './componentes/admin/control-panel/control-panel.component';
import { ComoAyudarComponent } from './componentes/paginas/como-ayudar/como-ayudar.component';
import { DetalleMascotaComponent } from './componentes/paginas/detalle-mascota/detalle-mascota.component';
import { GestionProcesoComponent } from './componentes/admin/gestion-proceso/gestion-proceso.component';
import { ReportesComponent } from './componentes/admin/reportes/reportes.component';
import { SolicitudesAdopcionComponent } from './componentes/admin/solicitudes-adopcion/solicitudes-adopcion.component';
import { RegisterComponent } from './componentes/register/register.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adoptar', component: AdoptarComponent },
  { path: 'ponerAdopcion', component: GestionProcesoComponent }, // component: PonerAdopcionComponent },
  { path: 'adoptadas', component: MascotasAdoptadasComponent },
  { path: 'organizaciones', component: OrganizacionesComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'controlPanel', component: ControlPanelComponent },
  { path: 'reporteGrafico', component: ReportesComponent },
  { path: 'comoAyudar', component: ComoAyudarComponent },
  { path: 'detalle-mascota/:id', component: DetalleMascotaComponent },
  { path: 'solicitudesAdopcion', component: SolicitudesAdopcionComponent},
  { path: 'registrar', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
