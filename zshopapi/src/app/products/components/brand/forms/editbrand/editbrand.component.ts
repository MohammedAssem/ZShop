import { BrandService } from './../../../../services/brand.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent implements OnInit {

  @Input()
  brandid: number = 0;

  brandfrm = this.frm.group({
    name: this.frm.control(''),
    description: this.frm.control(''),
    imageUrl: this.frm.control(''),
    updatedUserID: this.frm.control('1'),
    updatedDate: this.frm.control('2022-02-18'),
    createdUserID: this.frm.control('1'),
    createdDate: this.frm.control('2022-02-18')
  }
  );
  constructor(private frm: FormBuilder, private srv: BrandService) { }

  ngOnInit(): void{
  }

  submitMethod() {
    this.srv.newBrand(this.brandfrm.value);
  }

}
