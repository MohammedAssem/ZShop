import { BrandService } from './../../../../services/brand.service';
import { Brand } from './../../../../models/brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandtable',
  templateUrl: './brandtable.component.html',
  styleUrls: ['./brandtable.component.scss']
})
export class BrandtableComponent implements OnInit {

  brands: any[] = [];
  displayedColumns = ['id', 'name', 'description', 'navigate'];

  constructor(private srv: BrandService) {
    this.srv.getBrands();
  }

  ngOnInit(): void {
    this.brands = this.srv.brands;
  }

}
