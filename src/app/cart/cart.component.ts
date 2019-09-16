import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartLine } from '../utils/cartlines';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartLine[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.cartService.loadCartData();
    this.cartItems = this.cartService.cartLines;
  }

  removeItem(line: CartLine): void {
    this.cartService.removeGoods(line);
  }

  getCartTotal(): number {
    return this.cartService.cartTotal();
  }
}
