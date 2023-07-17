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
  loading : boolean;
  ngOnInit(): void {
  //  disFun();
  this.imagegenerated = this.svproduct.getimage();
  console.log("immmmmaaagggeee : "+this.imagegenerated);
  }

  resolveAfter25Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 25000);
    });
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
    this.loading = this.svproduct.loading;
    console.log("loding:" + this.loading);

    this.svproduct.addtocart();
  
    this.resolveAfter25Seconds(25).then(async () =>  {
    this.ngOnInit();
    this.loading = this.svproduct.loading;
    console.log("loding:" + this.loading);

  });

  }
}




