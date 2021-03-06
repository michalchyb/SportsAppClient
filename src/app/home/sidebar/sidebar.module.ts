import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { WeatherComponent } from '../weather/weather.component';
import { TweeterComponent } from '../tweeter/tweeter.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [SidebarComponent, WeatherComponent, TweeterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
