import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { BrandComponent } from '../brand/brand.component';
import { HomeComponent } from '../home/home.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { ProductComponent } from '../product/product.component';
import { SignComponent } from '../sign/sign.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'sign', component: SignComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'brand', component: BrandComponent},
      {path: 'product', component: ProductComponent},
      {path: 'inventory', component: InventoryComponent}
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
