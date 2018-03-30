import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { LoginComponent } from './login/login.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { GraficosComponent } from './graficos/graficos.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'indicadores', component: IndicadoresComponent },
    { path: 'graficos', component: GraficosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);