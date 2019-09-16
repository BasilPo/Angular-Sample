import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.loadCartData();
  }
}
