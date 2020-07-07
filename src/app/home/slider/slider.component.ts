import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ModalService } from 'src/app/home/_modal';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor( private modalService: ModalService) { 
    this.images=[];
  }

  ngOnInit(): void {
  }

  images: any[] = [];
  slideData = [
    {
      id: 382,
      name: "SportsAppClient/src/assets/weather icons/01d.svg",}
    // }, {
    //   id: 822,
    //   name: "Avon",
    // }, {
    //   id: 159,
    //   name: "Infrastructures",
    // }, {
    //   id: 424,
    //   name: "Users Cotton",
    // }, {
    //   id: 572,
    //   name: "Haptic Oklahoma Jewelery",
    // }, {
    //   id: 127,
    //   name: "Circles Integration Street",
    // }, {
    //   id: 1009,
    //   name: "uniform Communications Tuna",
    // }, {
    //   id: 619,
    //   name: "North Carolina",
    // }, {
    //   id: 716,
    //   name: "Eyeballs Rubber",
    // }, {
    //   id: 382,
    //   name: "Nevada green unleash",
    // }
  ]

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id:string){
    this.modalService.close(id);
  }
}

