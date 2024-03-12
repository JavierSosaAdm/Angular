import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    productList: IProduct[] = [];

    constructor(private _APIService: APIService) {}
    ngOnInit(): void {
      this._APIService.getAllProduct().subscribe((data: IProduct[]) => {
        console.log(data);
        this.productList = data;
      })
    }
}
