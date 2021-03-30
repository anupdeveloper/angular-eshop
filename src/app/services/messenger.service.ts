import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  _subject = new Subject();

  constructor() { }

  sendMsg(data:any){
    //console.log(data)
    this._subject.next(data); // triggering from product component ADDTOCART
  }

  getMsg(){
    return this._subject.asObservable();
  }
}
