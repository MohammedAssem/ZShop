import { AllmaterialModule } from './../allmaterial/allmaterial.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewbrandComponent } from './components/brand/forms/newbrand/newbrand.component';
import { EditbrandComponent } from './components/brand/forms/editbrand/editbrand.component';
import { ListbrandComponent } from './components/brand/display/listbrand/listbrand.component';
import { BrandlistComponent } from './components/brand/display/brandlist/brandlist.component';
import { BrandgridComponent } from './components/brand/display/brandgrid/brandgrid.component';
import { BrandtableComponent } from './components/brand/display/brandtable/brandtable.component';
import { CategorytableComponent } from './components/category/display/categorytable/categorytable.component';
import { CategorylistComponent } from './components/category/display/categorylist/categorylist.component';
import { CategorygridComponent } from './components/category/display/categorygrid/categorygrid.component';
import { NewcategoryComponent } from './components/category/forms/newcategory/newcategory.component';
import { EditcategoryComponent } from './components/category/forms/editcategory/editcategory.component';
import { ProductlistComponent } from './components/product/display/productlist/productlist.component';
import { ProductgridComponent } from './components/product/display/productgrid/productgrid.component';
import { ProducttableComponent } from './components/product/display/producttable/producttable.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewbrandComponent,
    EditbrandComponent,
    ListbrandComponent,
    BrandlistComponent,
    BrandgridComponent,
    BrandtableComponent,
    CategorytableComponent,
    CategorylistComponent,
    CategorygridComponent,
    NewcategoryComponent,
    EditcategoryComponent,
    ProductlistComponent,
    ProductgridComponent,
    ProducttableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AllmaterialModule
  ],
  exports: [
    NewbrandComponent,
    EditbrandComponent,
    ListbrandComponent,
    BrandlistComponent,
    BrandgridComponent,
    BrandtableComponent,
    CategorytableComponent,
    CategorylistComponent,
    CategorygridComponent,
    NewcategoryComponent,
    EditcategoryComponent,
    ProductlistComponent,
    ProductgridComponent,
    ProducttableComponent
  ],
})
export class ProductsModule { }
