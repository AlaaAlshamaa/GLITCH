import { Component , OnInit } from '@angular/core';
import { ProductService } from'./productdesigns.service';
import { Product } from './product.model';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})

export class DesignsComponent implements OnInit {
  products : any;
  allproduct : Product[] ;
  productid : string;

  constructor(private svpro: ProductService) {}

  ngOnInit(){
  // this.products = this.svpro.getProduct();
   this.showProduct();
  }

  showProduct() {

    console.log("show");
    this.svpro.getProduct()
      .subscribe((data) => {
        this.products = data;
        this.allproduct = this.products["data"];
      //  this.productid = this.allproduct[0]["id"];  
      //  this.producttitle = x[]
      console.log("this.allproduct");
      console.log(this.allproduct);
      //  console.log("this.productid");
      //  console.log(this.productid);
});
  }

 
}
