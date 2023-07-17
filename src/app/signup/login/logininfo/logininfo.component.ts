import { Component  , ElementRef , ViewChild , Input} from '@angular/core';
import { UserService }      from '../../user.service'
import { User } from '../../user.model';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-logininfo',
  templateUrl: './logininfo.component.html',
  styleUrls: ['./logininfo.component.css']
})
export class LogininfoComponent {
  @ViewChild('codeInput', { static: false }) codeInputRef: ElementRef;
  @ViewChild('phoneInput', { static: false }) phoneInputRef: ElementRef;
  
  @Input() form: any;
  signupUsers: any [] = [];
  signupObj: User;
  loginObj: any = {
    phone :'',
    code :''
  };

  constructor(private svuser: UserService , private router: Router ) {}


  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null){
      this.svuser.setUser1(JSON.parse(localData));
    }
  }

  setloginobj() {
    this.loginObj.code = this.codeInputRef.nativeElement.value;
    this.loginObj.phone = this.phoneInputRef.nativeElement.value;
    this.onLogin();
    this.router.navigate(['/']).then(() => this.form.hide());

  }

  onLogin(){
    this.svuser.login(this.loginObj).subscribe((data) => {
      const res  = data["data"];
      console.log("res:"+ data["data"]);
      localStorage.setItem("token" , res.token);
      console.log("token: "+res.token);
      localStorage.setItem("userid" , res.user.id);
      console.log("user id is:" +res.user.id);
      
    })
    }
  

}

