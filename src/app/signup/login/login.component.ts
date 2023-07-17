

import { Router } from '@angular/router'; 

import { Component , OnInit} from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
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

