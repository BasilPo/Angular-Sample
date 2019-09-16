import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isOnTouchDevice = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.cartService.loadCartData();
  }

  toggleNavbarMenu(): void {
    this.isOnTouchDevice = this.isOnTouchDevice ? false : true;
  }

  getCartItemsCount(): number {
    return this.cartService.itemCount();
  }
}
