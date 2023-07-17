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
  private logo_position_id: string ="1";
  private colors: string[] = ["1"];
  private cloths: string[] = ["1"];
  private text: string = "";
  private user: string = localStorage.getItem("userid");
  private postproductdata: Product[] ;
  private postproductdata2: Product ;
  private productid : string;
  private productid2 : string;
  private imagegenerated : string;
  public loading : boolean = true;
//   private xx : Observable<Product>;
      
      auth_token =localStorage.getItem("token");
  
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
    const logo_position = this.logo_position_id;  
    const colors = this.colors; 
    const cloths = this.cloths;
    const text = this.text;
    const user = this.user;
    const header = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
        responseType: 'text'
      });

    const body = JSON.stringify({sizes: sizes, types: types ,position_id:position, logo_position_id: logo_position,
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
        console.log("1. call post product or update ");
        console.log("id is : " + this.productid);
        if (this.productid === undefined) {
        console.log("A. post product ");

    await this.postProduct();}
    else {
      console.log("B. update product ");

      await this.updateProduct(this.productid, "position_id" , this.position);
    }

        const header = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.auth_token}`,
            responseType: 'text'
        });

        this.resolveAfter20Seconds(20).then(async () =>  {
            // console.log(`6. promise result: ${value}`);
            //add to cart_product
            console.log("loagin is:" +this.loading);
            
            this.loading = false;
            console.log("loagin is:" +this.loading);

            const body2 = JSON.stringify({product_id:this.productid});
            console.log("7. this is post add to card poroduct json2 ::::" + body2); 
            const xx =await this.http.post('http://138.68.137.41/api/cart_product' ,body2 ,  {headers:header}).subscribe(data => {  
            this.postproductdata2 = data as Product; 
              //this.postproductdata = data as Product[]; 
            const xxx = this.postproductdata2["data"];
            console.log("8.1.this.postproductdata:" + this.postproductdata2);
            console.log("8.2.data post" +xxx);
        });
            console.log("9. added to cart");
    
    });

}

updateProduct (id: string, attribute: string, value: any): Observable<any> {
  const header = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
    responseType: 'text'
});
console.log("new p : "+ value);

  const url = 'http://138.68.137.41/api/product/${id}';
  const updateData = {};
  updateData[attribute] = value;
  const user = localStorage.getItem("userid");
  const body2 = JSON.stringify({position_id: value , created_by:user});

  console.log("upupupupdate :"+body2);
  return this.http.post(url, body2, {headers:header});
    }

    adddesigntocart(designid : string){
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
        responseType: 'text'
    });
      const body2 = JSON.stringify({product_id: designid});
            console.log("add design to cart" + body2); 
            const xx = this.http.post('http://138.68.137.41/api/cart_product' ,body2 ,  {headers:header})
            .subscribe() ;
            }
}
          