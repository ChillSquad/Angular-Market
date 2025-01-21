import { IProduct } from 'src/app/models/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct | undefined;

  constructor() {}

  ngOnInit() {}
}
