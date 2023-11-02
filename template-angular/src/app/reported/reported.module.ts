import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportedRoutingModule } from './reported-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReportedComponent } from './reported.component';



@NgModule({
  declarations: [
    InventoryComponent,
    TransactionsComponent,
    ReportedComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReportedRoutingModule,

  ],
  exports: [
    InventoryComponent,
    TransactionsComponent,
    ReportedComponent,
  ]
})
export class ReportedModule { }
