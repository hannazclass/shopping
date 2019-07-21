import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../../cart.service'
import * as $ from 'jquery';
import 'materialize-css';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  shippingCosts;

  constructor(private route: ActivatedRoute, private cartService:CartService) { 
    this.shippingCosts=this.cartService.getShippingPrices();
  }

  ngOnInit() {
    //라우터의 아이디값을 자동으로 세팅한다.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });

    M.Modal.init($('.modal'));
  }

  addToCart(product){
    window.alert('장바구니에 담았습니다.');
    console.log('상품:',product);
    this.cartService.addToCart(product);
  }
}
