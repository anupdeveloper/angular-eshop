import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private productService:ProductService,  private messengerService:MessengerService) { }

  cartTotal:any;
  ngOnInit(): void {
    this.messengerService.getMsg().subscribe((data)=>{
      this.cartTotal = data['data'].length;
    })
    this.productService.getCartItems().subscribe((data)=>{
      //console.log(data);
      this.cartTotal = data['data'].length;
    })
  }

}
