import { Component  , ElementRef , ViewChild , Input} from '@angular/core';
import { UserService }      from '../user.service'
import { User } from '../user.model';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('phoneInput', { static: false }) phoneInputRef: ElementRef;
  @ViewChild('instagramInput', { static: false }) instagramInputRef: ElementRef;
  @ViewChild('addressInput', { static: false }) addressInputRef: ElementRef;
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

  onAddUser() {
    const uName = this.nameInputRef.nativeElement.value;
    const uPhone = this.phoneInputRef.nativeElement.value;
    const Uinstagram_url = this.instagramInputRef.nativeElement.value;
    const Uaddress = this.addressInputRef.nativeElement.value;
    const Upassword = "9090909090";
    const Upassword_confirmation = "9090909090";
    const newuser = new User(uName, uPhone ,Uinstagram_url ,Uaddress , Upassword , Upassword_confirmation);
    this.svuser.addUser1(newuser);
    localStorage.setItem('signupUsers', JSON.stringify(this.svuser.getUser1))
    this.svuser.postUser();
  //  this.router.navigate(['/']).then(() => this.form.hide());
  }

}
