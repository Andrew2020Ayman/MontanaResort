import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function(){
     // $('.nav_cont').toggleClass('scrolled', $(this).scrollTop() > 50);
      if($(this).scrollTop() >250){
        document.getElementById("myDiv").style.backgroundColor = "black";
      }else{
        document.getElementById("myDiv").style.backgroundColor = "transparent";
      }
      
    });
  }

}
