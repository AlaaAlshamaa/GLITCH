import { Component , OnInit} from '@angular/core';
declare var window: any;

declare const myFun:any;

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  formModal: any;
  constructor() {}
 
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.formModal.show();
  }

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
    
  }

  callfun(){
    myFun();
  }
  
}

