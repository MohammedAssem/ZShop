import { BrandService } from './../../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newbrand',
  templateUrl: './newbrand.component.html',
  styleUrls: ['./newbrand.component.scss']
})
export class NewbrandComponent implements OnInit {

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
  constructor(private frm: FormBuilder, private srv: BrandService, private router: Router) { }

  ngOnInit(): void {
  }

  submitMethod() {
    this.srv.newBrand(this.brandfrm.value);
    this.router.navigateByUrl('/admin/brands');
  }


}
