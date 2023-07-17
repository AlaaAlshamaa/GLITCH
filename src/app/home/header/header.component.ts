import { Component , EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router'; 

declare const myFun2:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor
  (  private router: Router  ) {   }

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
  //  this.featureSelected.emit(feature);
    this.router.navigate(['/'+feature]);

}

callfun2(){
  myFun2();
}
}