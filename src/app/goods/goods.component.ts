import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Goods } from '../utils/goods';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html'
})
export class GoodsComponent implements OnInit {

  items: Goods[] = [];

  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: Goods[]) => this.items = data);
  }

  addToCart(item: Goods): void {
    this.cartService.addGoods(item);
  }
}
