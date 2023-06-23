import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor() {}
  quantity : number = 1;
  i=1;
  plus(){
    if (this.i != 1000){
      this.i++;
      this.quantity= this.i;
    }
  }

  minus(){
    if (this.i != 1){
      this.i--;
      this.quantity= this.i;
    }
  }


}
