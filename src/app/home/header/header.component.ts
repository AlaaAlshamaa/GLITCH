import { Component , EventEmitter, Output  } from '@angular/core';

declare const myFun2:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
}

callfun2(){
  myFun2();
}
}