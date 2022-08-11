import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing Principal de APP
import { AppRoutingModule } from './app-routing.module';

// Modulo customizados
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

// Componentes principales de APP
import { AppComponent } from './app.component';
// Pagina 404
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
