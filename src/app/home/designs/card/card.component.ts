import { Component , Input} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()   items : Product[] ;
  @Input()   item : Product ;
}
