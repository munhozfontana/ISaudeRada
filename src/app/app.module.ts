import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SuiModule } from 'ng2-semantic-ui';
import { routing } from './app.routing';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { IndicadoresModule } from './indicadores/indicadores.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoasVindasComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    routing,
    IndicadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
