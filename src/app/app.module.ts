import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { GraficosComponent } from './graficos/graficos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndicadoresComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
