import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.scss']
})
export class ProducttableComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'desctiption', 'navigate'];

  constructor() { }

  ngOnInit(): void {
  }

}
