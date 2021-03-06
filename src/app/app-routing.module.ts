import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ProfileComponent } from './home/profile/profile.component';
import { BoardUserComponent } from './home/board-user/board-user.component';
import { BoardAdminComponent } from './home/board-admin/board-admin.component';
import { CodeComponent } from './home/code/code.component';
import { RunComponent } from './home/run/run.component';
import { TriathlonComponent } from './home/triathlon/triathlon.component';
import { ContactComponent } from './home/contact/contact.component';
import { MapComponent } from './home/map/map.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'coding', component: CodeComponent },
  { path: 'run', component: RunComponent },
  { path: 'triathlon', component: TriathlonComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: MapComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
