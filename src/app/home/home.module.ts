import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { SliderComponent } from './slider/slider.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ModalModule } from './_modal';
import { RunComponent } from './run/run.component';
import { CodeComponent } from './code/code.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { TriathlonComponent } from './triathlon/triathlon.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SliderComponent, UploadFilesComponent, RunComponent, CodeComponent, RegisterComponent, ProfileComponent, BoardAdminComponent, BoardUserComponent, TriathlonComponent, LoginComponent, ContactComponent, MapComponent],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule,
    NgxUsefulSwiperModule,
    ModalModule,
    AppRoutingModule,
    FormsModule,
    LeafletModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
