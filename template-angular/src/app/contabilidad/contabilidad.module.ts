import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { NominaComponent } from './nomina/nomina.component';
import { ContabilidadRoutingModule } from './contabilidad-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FacturacionComponent,
    NominaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContabilidadRoutingModule,
    AppRoutingModule,
    
  ]
})
export class ContabilidadModule { }
