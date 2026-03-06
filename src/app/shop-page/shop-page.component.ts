import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products = [
  {name: 'Laptop', price: 500, rating: 4},
  {name: 'Phone', price: 200, rating: 5},
  {name: 'Headphones', price: 100, rating: 3}
];
show = false;

showProducts(){
  this.show = true;
}
}