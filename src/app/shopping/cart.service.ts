import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import { Cart } from './cart.model';
import { Product } from '../home/designs/product.model';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carts:  any;  
   allproduct: Cart[];
  private productid: string;
  private product: Product;
  private frontimage: string;
 
  auth_token =localStorage.getItem("token");

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

 
  updateProduct (id: string, attribute: string, value: any): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth_token}`,
      responseType: 'text'
  });
  console.log("new q : "+ value);
  
    const url = 'http://138.68.137.41/api/cart_product/quantity/${id}';
    const updateData = {};
    updateData[attribute] = value;
    return this.http.patch(url, updateData, {headers:header});
      }

      deleteProduct(cartitemId: string): Observable<any> {
        const header = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.auth_token}`,
          responseType: 'text'
      });
  console.log("delete cartItemid: "+ cartitemId);

    const url = 'http://138.68.137.41/api/cart_product/${id}';
        return this.http.delete(url ,  {headers:header});
      }
    }
  
