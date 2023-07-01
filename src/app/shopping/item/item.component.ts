import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/home/designs/product.model';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  constructor(private svcart: CartService) {}

  @Input() items: any;

  quantity : number = 1;
  i=1;
  plus(){
    if (this.i != 1000){
      this.i++;
      this.quantity= this.i;
    }
  }

  minus(){
    if (this.i != 1){
      this.i--;
      this.quantity= this.i;
    }
  }

  resolveAfterSeconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }

  ngOnInit(){
    //this.getproductinfo();
  }
    getproductinfo(){
     this.resolveAfterSeconds(15000).then(async () =>  {
      console.log("11. mycart" +this.items);
      
      this.items = this.items["data"];
      console.log("22. mycart" +this.items);
    
     // this.image = this.svcart.getfrontimage();
   //   console.log("test show item info" + this.mycart.cart_id + "-" + this.mycart.price + "-" + this.mycart.quantity);
      
      
     });
   }

}
