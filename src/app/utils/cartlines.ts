import { Goods } from './goods';

export class CartLine {
  goods: Goods;
  quantity: number;

  constructor(goods: Goods) {
    this.goods = goods;
    this.quantity = 1;
  }
}
