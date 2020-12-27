import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AngularCompComponent } from './angular-comp/angular-comp.component'
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AngularCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
