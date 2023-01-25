import { Category } from './../../../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorytable',
  templateUrl: './categorytable.component.html',
  styleUrls: ['./categorytable.component.scss']
})
export class CategorytableComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns = ['id', 'name', 'desctiption', 'navigate'];

  constructor() { }

  ngOnInit(): void {
  }

}
