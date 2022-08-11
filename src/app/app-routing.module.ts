import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Declaracion de rutas hijas
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

// Componentes de APP
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';


// Configurar las rutas de APP
const routes: Routes = [

  // Si es un path vacio va a redirecionar a -> dashboard y esto a un -> path: '', component: DashboardComponent
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Cualquiera otra ruta que no este definida en este routing va a mostrar NoPagesFound
  { path: '**', component: NopagesfoundComponent },

  //{ path: 'oldPath', redirectTo: '/staticPath' },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule] // Se exporta para que otro modulo pueda disponer de este routing
})
export class AppRoutingModule { }
