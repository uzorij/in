import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {@Input() product: any;}





// export class ProductCardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
// products = [
//   {name: 'Laptop', price: 500, rating: 4},
//   {name: 'Phone', price: 200, rating: 5},
//   {name: 'Headphones', price: 100, rating: 3}
// ];
// show = false;

// showProducts(){
//   this.show = true;
// }

