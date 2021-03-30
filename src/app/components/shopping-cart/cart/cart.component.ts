import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  constructor(private productService:ProductService, private messengerService:MessengerService) { }

  ngOnInit(): void {
    this._getCartItems();
  }
  
  _getCartItems(){
    this.messengerService.getMsg().subscribe((data)=>{
      this.cartItems = data['data'];
    })
    this.productService.getCartItems().subscribe((data)=>{
      //console.log(data);
      this.cartItems = data['data'];
    })
  }

}
