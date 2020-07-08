import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ModalService } from 'src/app/home/_modal';
import { UploadFilesService } from 'src/app/services/upload-files/upload-files.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideData = [];
  constructor(private modalService: ModalService, private uploadFilesService: UploadFilesService) { }

  ngOnInit(): void {
    this.getSliceData();
  }

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

  private getSliceData() {
    this.uploadFilesService.getFiles().subscribe(data => {
      this.slideData = data;
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

