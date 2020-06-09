import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherComponent } from './weather/weather.component';
import { TweeterComponent } from './tweeter/tweeter.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, BodyComponent, FooterComponent, SidebarComponent, WeatherComponent, TweeterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
