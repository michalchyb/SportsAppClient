import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule
  ],
  schemas: [],
  providers: 
  [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
