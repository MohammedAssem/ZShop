import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './../products/products.module';
import { AllmaterialModule } from './../allmaterial/allmaterial.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminlayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AllmaterialModule,
    HttpClientModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
