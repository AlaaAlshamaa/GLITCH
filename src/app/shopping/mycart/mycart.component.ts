import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent {

  constructor(private svcart: CartService) {}

  image: string = "";
  allproductcarts : any; 
  cart: any;
  carts: Cart[];
  product : any;
  frontimage: string;

  ngOnInit(){
   this.showCart2();
  }

  resolveAfterSeconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }


  showCart2(){
    this.svcart.getCarts2().subscribe((data) => {
    this.cart = data;
    this.allproductcarts = this.cart["data"];
    console.log("1. show cart");
    console.log("2. this.allproduct");
    console.log(this.allproductcarts);
  });
     this.resolveAfterSeconds(5000).then(async () =>  {
      console.log("222. this.allproduct");
      console.log(this.allproductcarts);
  })      
}

onsubmit (){}

updatequantity (){
  
  this.allproductcarts
}

}
