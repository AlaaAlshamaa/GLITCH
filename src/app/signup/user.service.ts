import { Injectable } from '@angular/core';
import { User } from './user.model';
import  { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:  User[] = [
    new User('Alaa', '90878767' , 'uiu' , 'yui' , '78' , '78'),
    new User('Alaa2', '4654536' , 'uiu' , 'yui' , '78' , '78'),
  ];
  private getuserdata:any;
  private postuserdata:any;

  constructor(private http: HttpClient ) { }
  getUser1() {
    return this.users.slice();
  }

  addUser1(nweuser: User) {
    this.users.push(nweuser);
    console.log(nweuser);
  }

  postUser() {
  const username = this.users.at(-1).username;  
  const phone = this.users.at(-1).phone;  
  const instagram_url = this.users.at(-1).instagram_url;  
  const address = this.users.at(-1).address;  
  const password = this.users.at(-1).password;  
  const password_confirmation = this.users.at(-1).password_confirmation
  const body = new User(username , phone , instagram_url, address, password , password_confirmation );
  console.log("ppppppoooooossssstttttt");
  console.log(body);
  const body2 = JSON.stringify({username: username, phone: phone ,instagram_url:instagram_url, address:address , password:password , password_confirmation:password_confirmation});
  console.log("jjjjsssoooon");
  console.log(body2); 

  const req = this.http.post('http://138.68.137.41/api/auth/client/signup' ,body2 ).subscribe(data => {  
          this.postuserdata = data;
        
        });
        
        console.log("ppoost user data");
        console.log(this.postuserdata);
        

  }




}