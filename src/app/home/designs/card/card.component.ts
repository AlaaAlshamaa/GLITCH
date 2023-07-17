import { Component , Input} from '@angular/core';
import { Product } from '../product.model';
import { productService } from '../../../product.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()   items : Product[] ;
  @Input()   item : Product ;
  constructor(private svpro: productService,  private router: Router,
    ) {}

  onchecktoken(){
    console.log("onchecktoken:" + localStorage.getItem("token"));
    
    if (localStorage.getItem("token") === undefined){
    this.router.navigate(['/login']);
    }
    else{
      this.onaddtocart();
    }
  }

  onaddtocart()
  {
    console.log("adddesigntocart id :" +this.item.id);
    
    this.svpro.adddesigntocart(this.item.id);
  }
}
