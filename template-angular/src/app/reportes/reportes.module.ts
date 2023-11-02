import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario/inventario.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InventarioComponent,
    TransaccionesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    InventarioComponent,
    TransaccionesComponent,
    HomeComponent
  ]
})
export class ReportesModule { }
