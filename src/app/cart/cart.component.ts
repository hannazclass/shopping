import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import * as $ from 'jquery';

import 'materialize-css';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items;
  checkoutForm;
  shippingCosts;
  totalPrice:number=0;
  totalCount:string;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.shippingCosts=this.cartService.getShippingPrices();
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

    for (const i in this.items) {
      if(this.items[i].sale){
        this.totalPrice+=this.items[i].salePrice;  
      }else{
        this.totalPrice+=this.items[i].price;
      }
    }
    this.totalCount=this.items.length+'개';
  }

  onSubmit(customerData) {
    if(this.totalCount!='0개'){
      console.warn('주문 완료'+customerData);
      window.alert('주문을 완료하였습니다.');
  
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
      this.totalPrice=0;
      this.totalCount='0개';
    }else{
      window.alert('주문할 상품이 없습니다.');    
    }

  }

  ngOnInit(){
   M.Modal.init($('.modal'));
  }
}
