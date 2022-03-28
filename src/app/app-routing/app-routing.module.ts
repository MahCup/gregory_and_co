import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { SignComponent } from '../sign/sign.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'sign', component: SignComponent},
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
