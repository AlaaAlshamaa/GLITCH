import { Component  , ElementRef , ViewChild} from '@angular/core';
import { UserService }      from '../user.service'
import { User } from '../user.model';

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

  constructor(private svuser: UserService) {}
  ngOnInit(): void {
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
    this.svuser.postUser();
  }

}
