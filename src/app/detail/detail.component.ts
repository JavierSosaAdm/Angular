import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../products/products.mock'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product?: Product;
  productList: Product[] = productList;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
   setTimeout(() => {
    this._route.params.subscribe(params =>{
      this.product = this.productList.find(product => product.id == params['productId']); 
      this.loading = false;
      this.color = this.product?.price as number > 5 ? 'red' : 'blue';
    });
   }, 1200);
  }
}
