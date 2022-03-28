import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  images = ["assets/images/shoe6.jpg", "assets/images/shoe5.jpg", "assets/images/shoe4.jpg"];
  
}
