import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { SliderComponent } from './slider/slider.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, BodyComponent, FooterComponent, SliderComponent],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule,
    NgxUsefulSwiperModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
