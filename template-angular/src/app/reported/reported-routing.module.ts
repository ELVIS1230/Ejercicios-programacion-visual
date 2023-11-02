import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {path: 'inventario', component:InventoryComponent ,
  children: [
  {path: 'transacciones', component: TransactionsComponent},
  
  ]}
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportedRoutingModule { }
