import { NewbrandComponent } from './../products/components/brand/forms/newbrand/newbrand.component';
import { CategorytableComponent } from './../products/components/category/display/categorytable/categorytable.component';
import { BrandtableComponent } from './../products/components/brand/display/brandtable/brandtable.component';
import { ProducttableComponent } from './../products/components/product/display/producttable/producttable.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminlayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProducttableComponent },
      { path: 'brands', component: BrandtableComponent },
      { path: 'brands/new', component: NewbrandComponent },
      { path: 'categories', component: CategorytableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
