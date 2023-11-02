import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { NominaComponent } from './nomina/nomina.component';

const routes: Routes = [
    
{ path: 'contabilidad', component: HomeComponent,
children:[
  {path: 'facturacion', component: FacturacionComponent},
  {path: 'nomina', component: NominaComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadRoutingModule { }
