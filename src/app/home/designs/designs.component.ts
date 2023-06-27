import { Component , OnInit } from '@angular/core';
import { ProductService } from'./product.service';
import { Product } from './product.model';


@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})

export class DesignsComponent implements OnInit {
  products : Product;

  constructor(private svpro: ProductService) {}

  ngOnInit(){
   //this.products = this.svpro.getProduct();
   this.showProduct();
 
  }

  showProduct() {
    console.log("opopo");
    this.svpro.getProduct()
      // clone the data object, using its known Config shape
      .subscribe(data => this.products = {
        title: (data as any).title,
        price:  (data as any).price,
        front_image:  (data as any).front_image,
      });
      console.log("kiki");
      console.log(this.products);
  }
}
