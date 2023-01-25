import { BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Brand } from './../models/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseApiUrl = environment.apiurl + 'Brands';
  brands: any[] = [];
  constructor(private http: HttpClient) { }

  getBrands(){
    this.http.get(this.baseApiUrl).subscribe(
      res =>  {
        console.log(res);
        this.brands = res as Brand[];
        console.log(this.brands);
      }
    );
  }

  newBrand(brand: any){
    this.http.post(this.baseApiUrl, brand).subscribe(
      res =>  {
        console.log(res);
        this.getBrands();
      }
    );
  }

  updateBrand(brand: any){
    this.http.post(this.baseApiUrl+'/'+brand.id, brand).subscribe(
      res =>  {
        console.log(res);
        this.getBrands();
      }
    );
  }
}
