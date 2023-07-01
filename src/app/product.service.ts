import { Injectable } from '@angular/core';
import { Size } from '../app/home/product-options/size.model';
import { Type } from '../app/home/product-options/type.model';
import { Product } from '../app/home/designs/product.model';
import  { HttpClient , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class productService {
  private sizes: string[] = [];
  private types: string[] = [];
  private position: string;
  private colors: string[] = ["1"];
  private cloths: string[] = ["1"];
  private text: string = "GLITCH";
  private user: string = "1";
  private postproductdata: Product[] ;
  private postproductdata2: Product ;
  private productid : string;
  private productid2 : string;
  private imagegenerated : string;
//   private xx : Observable<Product>;
  auth_token = "1|oD7bO7sj85R5pffYLpot49W8d5Cu0L3ZCa7M9soM";
  
  constructor(private http: HttpClient ) { }

  resolveAfter20Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 20000);
    });
  }

  finalSizes() {
    return this.sizes.slice();
  }

  finalTypes() {
    return this.types.slice();
  }

  finalPosition() {
    return this.position;
  }

  setSizes(sizelist: string[]){
    this.sizes = sizelist;
  }

  setTypes(typelist: string[]){
    this.types = typelist;
  }
  
  setPosition(positionval: string) {
    this.position = positionval;
    console.log("add position");
    console.log( this.position);
  }

  setText(textval: string) {
    this.text = textval;
    console.log("add position");
    console.log( this.text);
  }

  getimage():string{
    return this.imagegenerated;
  }

//   getProduct_id():string{   

//     console.log("productid is");
//     console.log(this.productid);
//     return this.productid;
// } 




    async postProduct() {
    const sizes = this.sizes;  
    const types = this.types;  
    const position = this.position;  
    const colors = this.colors; 
    const cloths = this.cloths;
    const text = this.text;
    const user = this.user;
    const header = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      });

    const body = JSON.stringify({sizes: sizes, types: types ,position_id:position, 
        colors:colors , cloths:cloths , text:text , created_by:user});
    console.log("2. post product fun json ::::" + body); 
    const req = await this.http.post('http://138.68.137.41/api/product/generate' ,body ,  {headers:header})
    .subscribe(data => {  
            this.postproductdata = data as Product[]; 
            const x = this.postproductdata["data"];
            this.productid = x[0]["id"];
            this.imagegenerated = x[0]["source"]["image"];
            console.log("3. this is ppoost user data");
            console.log(this.postproductdata);
            console.log(x[0]["id"]);
            console.log("4. this is productid ");
            console.log(this.productid);
            console.log("5. this is image ");
            console.log(this.imagegenerated);
        }); 
}

    async addtocart()   {
        console.log("1. call post product");
        
    await this.postProduct(); 

        const header = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.auth_token}`,
        });

        this.resolveAfter20Seconds(20).then(async () =>  {
            // console.log(`6. promise result: ${value}`);
            //add to cart_product
            const body2 = JSON.stringify({product_id:this.productid});
            console.log("7. this is post add to card poroduct json2 ::::" + body2); 
            const xx =await this.http.post('http://138.68.137.41/api/cart_product' ,body2 ,  {headers:header}).subscribe(data => {  
            this.postproductdata = data as Product[]; 
            const xxx = this.postproductdata["data"];
            console.log("8.data post" +xxx);
        });
            console.log("9. added to cart");
    
    });

}
    }