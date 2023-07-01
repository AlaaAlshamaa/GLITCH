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

   showCart() {
    this.svcart.getCarts()
    this.resolveAfterSeconds(5000).then(async () =>  {
      this.carts= this.svcart.allproduct;
      console.log("cccccccccccccccccccccc"+ this.carts);
      console.log("aaaaaaaaalllllllllllll"+ this.svcart.allproduct);
      
      for(var productsEl of this.svcart.getallproduct() ){  
       // this.paaray.push(productsEl);
       console.log("thhhhhis is element" + productsEl);
       
        this.svcart.getproductbyid( productsEl["id"]  );
        this.resolveAfterSeconds(15000).then(async () =>  {
        this.image = this.svcart.getfrontimage();
        console.log("this is image fromm item component" + this.image);
        
       });
      }
            });
  }

  showCart2(){
    this.svcart.getCarts2().subscribe((data) => {
      this.cart = data;
      this.allproductcarts = this.cart["data"];
   //   this.productid =
      console.log("1. show cart");
    console.log("2. this.allproduct");
    console.log(this.allproductcarts);
    //  console.log("3. this.productid");
     // console.log(this.productid);
    });

     this.resolveAfterSeconds(5000).then(async () =>  {
    
      console.log("222. this.allproduct");
      console.log(this.allproductcarts);
    

      // for (let i = 0; i <  this.allproductcarts[1].length; i++) {
      //  console.log("3. for thhhhhis is element" + this.allproductcarts[1]);

      //   this.svcart.getproductbyid2(currentele.cart_id  )
      //   .subscribe((data) => {
      //     this.product = data["data"];
      //     this.frontimage = this.product["front_image"];  
      //   this.resolveAfterSeconds(15000).then(async () =>  {
      //   this.image = this.svcart.getfrontimage();
      //   console.log("this is image fromm item component" + this.image);
      // });
      // }
      // );
      // }
    
  })
        
  }

}
