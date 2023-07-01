import { Component  , EventEmitter, Output  } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT, NgFor } from '@angular/common';
import { Size } from './size.model';
import { Type } from './type.model';
import { generatedProduct } from 'src/app/generatedProduct.model';
import { productService } from '../../product.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router'; 

// declare const myFun3c:any;
// declare const myFun2c:any;
declare const disFun:any;

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionsComponent {

  sizelist : Size[];
  typelist : Type[];
  finalsizelist : string[];
  finaltypelist : string[];
  generatedproduct : generatedProduct;
  inputtext : string ="";

  @Output() featureSelected = new EventEmitter<string>();
  @Output() sizeSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }


nosizeselected() : boolean{

  return true;
}
  onSelectSize(size: string) {
    console.log("size" + size);
    this.sizeSelected.emit(size);
    globalThis.generatedProduct.sizes.push(size);
    console.log(globalThis.generatedProduct.sizes);
  }

  constructor
    (private svproduct: productService,
    private renderer2: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private _document
  ) {   }



  getsizelist(){
    this.sizelist=[
      {sid:"1",sname:"S",sisselected:false},
      {sid:"4",sname:"M",sisselected:false},
      {sid:"7",sname:"L",sisselected:false},
      {sid:"6",sname:"XL",sisselected:false},
      {sid:"5",sname:"XXL",sisselected:false},
    ]
  }

  gettypelist(){
    this.typelist=[
      {tid:"2",tname:"Shirt",tisselected:false},
      {tid:"3",tname:"T-Shirt",tisselected:false},
      {tid:"1",tname:"Hoodie",tisselected:false},
      {tid:"4",tname:"Oversized",tisselected:false},
    ]
  }

  ngOnInit (): void {
    //disFun();
    this.getsizelist();
    this.gettypelist();
    this.generatedproduct = new generatedProduct();
  }

  onchangesize(i){
    for (let object of this.sizelist) {
      if (object.sid === i) {
          object.sisselected = !object.sisselected;
      }
  }
  this.finalsizelist = this.sizelist.filter(x=>x.sisselected==true).map(x=>x.sid);
 
}

onchangetype(i){
  for (let object of this.typelist) {
    if (object.tid === i) {
        object.tisselected = !object.tisselected;
    }
  
}
this.finaltypelist = this.typelist.filter(x=>x.tisselected==true).map(x=>x.tid);
 
}

onKey(event)
 {
  this.inputtext = event.target.value;
}

onsubmitgenerate()
{
  this.svproduct.setText(this.inputtext);
  this.onsubmitadd();
  this.router.navigate(['/edit']);
}

onsubmitadd(){
  this.finalsizelist = this.sizelist.filter(x=>x.sisselected==true).map(x=>x.sid);
  this.svproduct.setSizes(this.finalsizelist);

  this.finaltypelist = this.typelist.filter(x=>x.tisselected==true).map(x=>x.tid);
  this.svproduct.setTypes(this.finaltypelist);
  
}

// callfun(){
//   myFun2c();
// }

// callfun3(){
//   myFun3c();
// }
  
}
  
