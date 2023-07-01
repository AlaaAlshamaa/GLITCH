import { Component } from '@angular/core';
import { Position } from '../../position.model';
import { productService } from '../../product.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {

position : string = "";
product_id : string = "";


  constructor
    (private svproduct: productService) {   }


  ngOnInit (): void {

  }

  positionvalue(event : any){
    this.position = event.target.value;
}

onsubmit(){
  this.svproduct.setPosition(this.position);
  this.svproduct.addtocart();
  }
}