import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './web/no-page-found/no-page-found.component';
import { WebRoutingRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ReportesRoutingModule } from './reportes/reportes-routing.module';
import { ContabilidadRoutingModule } from './contabilidad/contabilidad-routing.module';


const routes: Routes = [
{path: '', redirectTo:'/dashboard', pathMatch: 'full'},
// {path:'dashboard' ,loadChildren: () => import('./web/web-routing.module').then(m =>m.WebRoutingRoutingModule)},
// {path:'dashboard' ,loadChildren: () => WebRoutingRoutingModule},
{path: '**', component: NoPageFoundComponent},
]
@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    WebRoutingRoutingModule,
    AuthRoutingModule,
    ReportesRoutingModule,
    ContabilidadRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
