import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { SuiModule } from 'ng2-semantic-ui';

import { IndicadoresComponent } from "./indicadores.component";

import { IndicadoresService } from './indicadores.service';
@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        SuiModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [IndicadoresComponent],
    providers: [IndicadoresService],

})
export class IndicadoresModule{}