import { Router } from '@angular/router'; 

import { Component , OnInit} from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit {
  formModal: any;
  constructor
  (  private router: Router  ) {   }

 
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
    this.router.navigate(['/']);

    
  }

  
}
