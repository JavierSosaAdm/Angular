import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { APIService } from '../service/api.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _APIService: APIService
    ) {}

  ngOnInit(): void {
    this._route.params.subscribe({ 
      next: (params: Params) => {
        this._APIService.getProducsById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
          this.product = data
          this.color = this.product?.price as number > 200 ? 'red' : 'blue';
          this.loading = false;
          },
          error: (error: any) => {
            console.log(error);
            this.loading = false;
          }
        })
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
