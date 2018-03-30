import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { GraficosComponent } from './graficos/graficos.component';

import { SuiModule } from 'ng2-semantic-ui';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndicadoresComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
