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

  @Input() item: Cart;

  quantity : number = 1;

  i=1;
  plus(){
    if (this.i != 1000){
      this.i++;
      this.quantity= this.i;
      this.item.quantity = this.quantity;
      this.updateCartItemQuantity(this.item);

    }
  }

  minus(){
    if (this.i != 1){
      this.i--;
      this.quantity= this.i;
      this.item.quantity = this.quantity;
      this.updateCartItemQuantity(this.item);
    }
  }

  resolveAfterSeconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }

  ngOnInit(){  }

  updateCartItemQuantity(cartItem: Cart) {
    if (this.quantity != 1){
      console.log("updateProduct:"+ cartItem.product_id +" new quantity : " + this.quantity );
    this.svcart.updateProduct(cartItem.product_id , "quantity" , this.quantity);
  }
  }

  ondelete(){

    this.item.deleted = true;
    console.log(this.item.id +" will ddelete"+  this.item.deleted  );

  this.svcart.deleteProduct(this.item.id) .subscribe(() => {
    // You can update your cart data here
    
  });

}
}
