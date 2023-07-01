import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import { Cart } from './cart.model';
import { Product } from '../home/designs/product.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carts:  any;  
   allproduct: Cart[];
  private productid: string;
  private product: Product;
  private frontimage: string;
 
    auth_token = "1|oD7bO7sj85R5pffYLpot49W8d5Cu0L3ZCa7M9soM";

  constructor(private http: HttpClient ) { }

  getallproduct() : Cart[]{
    console.log("i will return all p:"+ this.allproduct);
    
    return this.allproduct;
  }

  getfrontimage() : string{
    return this.frontimage;
  }

   getCarts()  {

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth_token}`,
    });
 console.log("0. get carts");
         this.http.get<Cart[]>('api/cart_product' ,  {headers:header})
          .subscribe((data) => {
          this.carts = data;
          this.allproduct = this.carts["data"];
       //   this.productid =
          console.log("1. show cart");
        console.log("2. this.allproduct");
        console.log(this.allproduct);
        //  console.log("3. this.productid");
         // console.log(this.productid);
         return this.allproduct;
        
  });
  }



  getproductbyid(xid: string)  {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth_token}`,
    });
     this.http.get<Product>('api/product/5' ,  {headers:header})
    .subscribe((data) => {
      this.product = data["data"];
      this.frontimage = this.product["front_image"];  
    //   console.log("4. show porduct by id" + xid);
    //   console.log(this.product);
    // console.log("5. this is front image");
    // console.log(this.frontimage);
     return data["data"];


    
});

  }

  getCarts2(){  
    const header = new HttpHeaders({
   'Content-Type': 'application/json',
   Authorization: `Bearer ${this.auth_token}`,
 });
console.log("0. get carts222 ");
   return this.http.get<Cart[]>('api/cart_product'  ,  {headers:header});
 }


getproductbyid2(xid: string)  {
  const header = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });
  return this.http.get<Product>('api/product/5' ,  {headers:header});

  }
}