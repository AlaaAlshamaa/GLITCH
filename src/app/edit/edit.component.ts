import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router'; 

declare var window: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  formModal: any;
 constructor(    private router: Router,
    ) {} 
 
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

  loadedFeature = '';
  reload = "";

  resolveAfter25Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 25000);
    });
  }

  async reloadFunction(x : string){
    this.reload = x;
     this.resolveAfter25Seconds(25).then(async () =>  {
      console.log("reload");
    //  this.refreshComponent();
      //window.location.reload();
            });
    
   
  }

  refreshComponent(){
    this.router.navigate(['/edit']);
 }

  
}
