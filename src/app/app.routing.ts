import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { LoginComponent } from './login/login.component';
import { IndicadoresComponent } from './indicadores/indicadores.component'

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'indicadores', component: IndicadoresComponent, 
        // children : [
        //     { path: 'eficincia', component: LoginComponent},
        //     { path: 'eficacia', component: LoginComponent},
        //     { path: 'efetividade', component: LoginComponent},
        //     { path: 'qualidade', component: LoginComponent},
        //     { path: 'impactos', component: LoginComponent},
        // ]
    },
    { path: '', component: BoasVindasComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
