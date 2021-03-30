import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_key = '474cdac2871040feae6be11033a0061b';

  constructor(private httpClient: HttpClient) {
  }

  public getNews(){
    //const url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-03-12&sortBy=popularity&apiKey='+this.api_key;
    return this.httpClient.get('http://127.0.0.1:8000/api/get_products');
  }

  public addToCart(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addtocart', data);
  }

  getCartItems(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/get_cartitems`);
  }

  payment_checkout(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/payment_checkout', data);
  }

}
