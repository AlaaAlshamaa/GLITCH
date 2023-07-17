import { Component , Input } from '@angular/core';
import { Position } from '../../position.model';
import { productService } from '../../product.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  @Input() form: any;

position : string = "";
product_id : string = "";


  constructor
    (private svproduct: productService ,  private router: Router) {   }


  ngOnInit (): void {

  }

  positionvalue(event : any){
    this.position = event.target.value;
    console.log("position is :" + this.position);
}

onsubmit(){
  this.svproduct.setPosition(this.position);
  this.svproduct.addtocart();
  //this.router.navigate(['/']).then(() => this.form.hide());

  }
}