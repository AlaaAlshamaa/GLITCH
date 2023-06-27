import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:  Product[] = [
    new Product('Alaa', '90878767' , 'uiu' ),
    new Product('Alaa2', '4654536' , 'uiu' ),
  ];
  private getproductdata:any;
  private postproductdata:any;

  constructor(private http: HttpClient ) { }
  getProduct1() {
    return this.products.slice();
  }

  addProduct(nweproduct: Product) {
    this.products.push(nweproduct);
    console.log(nweproduct);
  }

   getProduct()  {
 // const title = this.products.at(-1).title;  
 // const price = this.products.at(-1).price;  
 // const front_image = this.products.at(-1).front_image;  
 // const body2 = JSON.stringify({title: title, price: price ,front_image:front_image});
 // console.log("jjjjsssoooon");
 // console.log(body2); 
 console.log("get");
        return this.http.get<Product>('http://138.68.137.41/api/product/');

  }




}