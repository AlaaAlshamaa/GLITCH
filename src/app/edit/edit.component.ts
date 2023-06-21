import { Component , OnInit} from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
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
}
