import { Component, OnInit } from '@angular/core';
/* Toast Message */
import { ToastrService } from 'ngx-toastr';


import { ProductService } from 'src/app/services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  constructor(
    private productService:ProductService,
    private messengerService:MessengerService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.productService.getNews().subscribe((data)=>{
      //console.log(data);
      this.products = data;
    });
    
  }

  onSubmit(data){
    console.log(data)
  }

  _addItemToCart( id, quantity): void {
    let payload = {
      product_id: id,
      qty:quantity,
      user_id:1
    };
    //console.log(payload)
    
    this.productService.addToCart(payload).subscribe(() => {
      this.productService.getCartItems().subscribe((data) => {
        this.messengerService.sendMsg(data);
        //alert('Product Added');
        this.toastrService.success('Added to cart.')
      })
     
    });
    
  }

  
}
