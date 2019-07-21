import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

import Swiper from 'swiper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  
  constructor() { }
  
  ngOnInit() {
    var title=[
      ['러블리 어피치 이미용 기구','러블리 장인 어피치 아이템'],
      ['휴가지에서 인싸각','물놀이템 고민하지마'],
      ['라이언 어피치 핸디형 선풍기','지금부터 본격열일'],
      ['내자리를 책임질 사무용품','사무실 도비들 여기 주목']
    ]

    $('.title strong').text(title[0][0]);
    $('.title h4').text(title[0][1]);

    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop:true
    });

    swiper.on('slideChange', function () {
      $('.title strong').text(title[swiper.realIndex][0]);
      $('.title h4').text(title[swiper.realIndex][1]);
    });
  }

}
