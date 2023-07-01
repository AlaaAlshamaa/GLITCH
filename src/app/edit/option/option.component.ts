import { Component ,Output , EventEmitter} from '@angular/core';
import { productService } from '../../product.service';

//declare const disFun:any;
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {

  @Output() reloadEvent = new EventEmitter<string>();
  onreload(x: string) {
    this.reloadEvent.emit(x);
  }

  
  imagegenerated : string = "";
  ngOnInit(): void {
  //  disFun();
  this.imagegenerated = this.svproduct.getimage();
  console.log("immmmmaaagggeee"+this.imagegenerated);
  }


  constructor
  (private svproduct: productService) {   }
  
  loadedPosition = '5';
  @Output() positionSelected = new EventEmitter<string>();

  onPosition(position: string) {
    this.positionSelected.emit(position);
    this.loadedPosition = position;
  }

  onsubmit(){
    this.svproduct.setPosition(this.loadedPosition);
    this.svproduct.addtocart();
    this.ngOnInit();
  
  }

  
  }




