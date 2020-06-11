import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from './sidebar/sidebar.module';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
