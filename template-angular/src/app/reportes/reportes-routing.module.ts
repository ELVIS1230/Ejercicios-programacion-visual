import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
  {path: 'reportes', component:HomeComponent ,
  children: [
  // {path: '', component: DashboardComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'transacciones' , component: TransaccionesComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
