import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  producto: string = '';
  color: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.producto = params['productId'];
      this.color = params['category'];
    });
  }
}
