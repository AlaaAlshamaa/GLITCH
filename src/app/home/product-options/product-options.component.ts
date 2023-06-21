import { Component  , EventEmitter, Output  } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare const myFun:any;

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionsComponent {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {   }
  
callfun(){
  myFun();
}


  
  }
  
