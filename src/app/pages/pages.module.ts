import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing del componente pages
import { PagesRoutingModule } from './pages-routing.module';

// Componentes de PAGES
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

// Modulos customizados
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [ // Se exporta para que otros modulos puedan utilizarlos
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ]
})
export class PagesModule { }
