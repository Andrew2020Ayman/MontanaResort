import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  
  constructor() { 
    
  }

 /*  photos=[
      {phot: "assets/banner/banner2.png"},
      {phot:"assets/banner/banner.png"}
  ];  */ 
  photos=[
     "assets/banner/banner2.png",
     "assets/banner/banner.png"
]; 
  customOptions: any = {
    loop: true,
    dots: false,
    nav: false,
    slideBy: "1",
    mouseDrag: true,
    touchDrag: true,
    
    autoWidth:true,
    lazyLoad: true,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      }
    }
  };
  arr_img = [
    " assets/banner/banner2.png",
      "assets/banner/banner.png"
 
  ];
  /* arr_img = [
    {
      img:'assets/banner/banner2.png',
      title:'andrew'
    },
    {
      img:'assets/banner/banner.png',
      title:'andrew'
    }
  
  ]; */
  ngOnInit() {
 

  }

}
