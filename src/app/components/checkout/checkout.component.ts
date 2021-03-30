import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productservice:ProductService) { }
  totalAmt = 5;
  handler:any = null;
  
  ngOnInit(): void {
    
  }

  
  


  pay(amount) {    
    
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IWfchFXYYK5rSW7fGp6peQNMqky0cwmvPUGADfnSuaVE6V8LJwR9UNm4aH9R0GoDM3uTB0cNpvM1SA818lWHeoR00g0XidYCI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token.id)
        

        fetch('http://localhost:8000/api/payment_checkout', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + 'key'
        },
        body: JSON.stringify({'name':"anup@gmail.com",'email':"anup@gmail.com",'amt':amount,'id':token.id})
      })
      .then(output => {
        console.log(output)
      })
      

        
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

    
 
    
  }

  
 

}
