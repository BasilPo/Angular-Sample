import { Injectable } from '@angular/core';
import { CartLine } from './utils/cartlines';
import { Goods } from './utils/goods';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartLines: CartLine[] = [];
  CART = 'cart';

  constructor() { }

  addGoods(goods: Goods): void {
    const currentline: CartLine = this.cartLines.find(line => line.goods.id === goods.id);
    if (currentline != null) {
      currentline.quantity++;
    } else {
      this.cartLines.push(new CartLine(goods));
    }
    this.storeCartData();
  }

  removeGoods(lineToRemove: CartLine): void {
    const index: number = this.cartLines.findIndex(line => line === lineToRemove);
    if (index > -1) {
      this.cartLines.splice(index, 1);
      this.storeCartData();
    }
  }

  storeCartData(): void {
    localStorage.setItem(this.CART, JSON.stringify(this.cartLines));
  }

  loadCartData(): void {
    const data: string = localStorage.getItem(this.CART);
    if (data !== null) {
      this.cartLines = JSON.parse(data);
    }
  }

  itemCount(): number {
    return this.cartLines.reduce((total, line) => total + line.quantity, 0);
  }

  cartTotal(): number {
    return this.cartLines.reduce((total, line) => line.goods.price * line.quantity + total, 0);
  }
}
