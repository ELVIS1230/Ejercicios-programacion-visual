import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { WebModule } from './web/web.module';
import { AuthModule } from './auth/auth.module';
import { WebRoutingRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ReportesModule } from './reportes/reportes.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    WebModule,
    AppRoutingModule,
    WebRoutingRoutingModule,
    AuthRoutingModule,
    ReportesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
