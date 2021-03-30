import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {

  cartItems;cartTotal;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this._getCartItems();
  }

  _getCartItems(){
    this.productService.getCartItems().subscribe((data=>{
      this.cartItems = data['data'];
      this.cartTotal = data['cartTotal'];
    }))
    
  }

}
